import { IIT_DIMENSIONS, IIT_QUESTIONS, IITDimensionId } from "@/data/invisibleInheritanceQuestions";

export interface PartnerAnswerMap {
  // question_id -> archetype value (0..3)
  [questionId: string]: number;
}

export interface DimensionResult {
  dimensionId: IITDimensionId;
  title: string;
  subtitle: string;
  caption: string;
  partnerA: { archetype: string; distribution: number[] };
  partnerB: { archetype: string; distribution: number[] };
  alignment: number; // 0..100
  zone: "resonance" | "tension" | "blind_spot";
  insight: string;
  conversationPrompt: string;
}

export interface IITReport {
  dimensions: DimensionResult[];
  overallAlignment: number;
  resonanceCount: number;
  tensionCount: number;
  blindSpotCount: number;
  topConversations: string[];
}

function distributionFor(answers: PartnerAnswerMap, dim: IITDimensionId): number[] {
  const dist = [0, 0, 0, 0];
  for (const q of IIT_QUESTIONS) {
    if (q.dimension !== dim) continue;
    const v = answers[q.id];
    if (typeof v === "number" && v >= 0 && v <= 3) dist[v] += 1;
  }
  return dist;
}

function dominantArchetype(distribution: number[], labels: readonly string[]): { index: number; label: string } {
  let best = 0;
  for (let i = 1; i < distribution.length; i++) {
    if (distribution[i] > distribution[best]) best = i;
  }
  return { index: best, label: labels[best] };
}

// Cosine-style similarity 0..100
function similarity(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  const sim = dot / (Math.sqrt(na) * Math.sqrt(nb));
  return Math.round(sim * 100);
}

function buildInsight(
  dimTitle: string,
  archA: string,
  archB: string,
  alignment: number
): string {
  if (alignment >= 75) {
    return `Both of you carry a ${archA.toLowerCase()} inheritance here. The risk isn't conflict — it's repetition. You'll reinforce each other's blind spot instead of stretching it.`;
  }
  if (alignment >= 50) {
    return `Mostly aligned, with edges. You lean ${archA.toLowerCase()}, they lean ${archB.toLowerCase()}. Under stress, these edges will pull at each other.`;
  }
  if (alignment >= 30) {
    return `Different inheritances. You move toward ${archA.toLowerCase()}, they move toward ${archB.toLowerCase()}. This will create the most repeated argument of your marriage if unnamed.`;
  }
  return `Opposite inheritances around ${dimTitle.toLowerCase()}. What is instinctive for one of you is invisible — sometimes threatening — to the other. This is your most important early conversation.`;
}

function buildPrompt(dimTitle: string, archA: string, archB: string): string {
  return `${dimTitle} — Tell each other one childhood scene that shaped how you became a ${archA.toLowerCase()} (you) and how they became a ${archB.toLowerCase()}. No fixing. Just listening.`;
}

export function generateReport(answersA: PartnerAnswerMap, answersB: PartnerAnswerMap): IITReport {
  const dims: DimensionResult[] = IIT_DIMENSIONS.map((d) => {
    const distA = distributionFor(answersA, d.id);
    const distB = distributionFor(answersB, d.id);
    const domA = dominantArchetype(distA, d.archetypes);
    const domB = dominantArchetype(distB, d.archetypes);
    const alignment = similarity(distA, distB);

    const sumA = distA.reduce((a, b) => a + b, 0);
    const sumB = distB.reduce((a, b) => a + b, 0);
    const oneSided = (sumA === 0) !== (sumB === 0);

    let zone: DimensionResult["zone"] = "tension";
    if (oneSided) zone = "blind_spot";
    else if (alignment >= 60) zone = "resonance";
    else if (alignment < 35) zone = "blind_spot";

    return {
      dimensionId: d.id,
      title: d.title,
      subtitle: d.subtitle,
      caption: d.caption,
      partnerA: { archetype: domA.label, distribution: distA },
      partnerB: { archetype: domB.label, distribution: distB },
      alignment,
      zone,
      insight: buildInsight(d.title, domA.label, domB.label, alignment),
      conversationPrompt: buildPrompt(d.title, domA.label, domB.label),
    };
  });

  const overallAlignment = Math.round(
    dims.reduce((s, d) => s + d.alignment, 0) / dims.length
  );

  const resonanceCount = dims.filter((d) => d.zone === "resonance").length;
  const tensionCount = dims.filter((d) => d.zone === "tension").length;
  const blindSpotCount = dims.filter((d) => d.zone === "blind_spot").length;

  // 12 conversations: prompts from blind_spot first, then tension, then resonance
  const ordered = [
    ...dims.filter((d) => d.zone === "blind_spot"),
    ...dims.filter((d) => d.zone === "tension"),
    ...dims.filter((d) => d.zone === "resonance"),
  ];
  const topConversations = ordered.slice(0, 12).map((d) => d.conversationPrompt);

  return {
    dimensions: dims,
    overallAlignment,
    resonanceCount,
    tensionCount,
    blindSpotCount,
    topConversations,
  };
}

export function generateSessionCode(): string {
  // 6-character, no ambiguous chars
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

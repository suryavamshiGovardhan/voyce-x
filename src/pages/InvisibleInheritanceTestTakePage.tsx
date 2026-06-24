import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SEOHead } from "@/components/SEOHead";
import QuestionStage from "@/components/iit/QuestionStage";
import DimensionIntro from "@/components/iit/DimensionIntro";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AuroraBackground from "@/components/iit/AuroraBackground";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import {
  IIT_DIMENSIONS,
  IIT_QUESTIONS,
  TOTAL_QUESTIONS,
} from "@/data/invisibleInheritanceQuestions";

const introSchema = z.object({
  name: z.string().trim().max(50, "Keep it under 50 characters").optional().or(z.literal("")),
  email: z.string().trim().email("That doesn't look like a valid email").max(255).optional().or(z.literal("")),
});

type Step = { kind: "intro"; dimensionIndex: number } | { kind: "question"; questionIndex: number };

function buildSteps(): Step[] {
  const steps: Step[] = [];
  let lastDim = "";
  IIT_QUESTIONS.forEach((qq, i) => {
    if (qq.dimension !== lastDim) {
      const dimIndex = IIT_DIMENSIONS.findIndex((d) => d.id === qq.dimension);
      steps.push({ kind: "intro", dimensionIndex: dimIndex });
      lastDim = qq.dimension;
    }
    steps.push({ kind: "question", questionIndex: i });
  });
  return steps;
}

export default function InvisibleInheritanceTestTakePage() {
  const { sessionCode = "", partner = "a" } = useParams();
  const navigate = useNavigate();
  const partnerKey = partner === "b" ? "b" : "a";

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introName, setIntroName] = useState("");
  const [introEmail, setIntroEmail] = useState("");
  const [introError, setIntroError] = useState<string | null>(null);
  const [savingIntro, setSavingIntro] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [saving, setSaving] = useState(false);

  const steps = useMemo(buildSteps, []);
  const current = steps[stepIdx];
  const questionStepsTotal = TOTAL_QUESTIONS;
  const questionNumber = steps.slice(0, stepIdx + 1).filter((s) => s.kind === "question").length;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("iit_sessions")
        .select("id, partner_a_completed_at, partner_b_completed_at")
        .eq("session_code", sessionCode.toUpperCase())
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        toast.error("Session not found.");
        navigate("/invisible-inheritance/test");
        return;
      }
      setSessionId(data.id);
      const done = partnerKey === "a" ? !!data.partner_a_completed_at : !!data.partner_b_completed_at;
      setAlreadyDone(done);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [sessionCode, partnerKey, navigate]);

  const handleAnswer = async (value: number) => {
    if (!sessionId || current.kind !== "question") return;
    const q = IIT_QUESTIONS[current.questionIndex];
    setSaving(true);
    try {
      const { error } = await supabase
        .from("iit_responses")
        .upsert(
          {
            session_id: sessionId,
            partner: partnerKey,
            dimension: q.dimension,
            question_id: q.id,
            answer_value: value,
          },
          { onConflict: "session_id,partner,question_id" }
        );
      if (error) throw error;

      const isLast = stepIdx === steps.length - 1;
      if (isLast) {
        const updates: Record<string, string> =
          partnerKey === "a"
            ? { partner_a_completed_at: new Date().toISOString() }
            : { partner_b_completed_at: new Date().toISOString() };
        await supabase.from("iit_sessions").update(updates).eq("id", sessionId);
        navigate(`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`);
      } else {
        setStepIdx((i) => i + 1);
      }
    } catch (err) {
      console.error(err);
      toast.error("Couldn't save that answer. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AuroraBackground>
        <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground ii-serif italic">
          Opening your session…
        </div>
      </AuroraBackground>
    );
  }

  if (alreadyDone) {
    return (
      <AuroraBackground>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <SEOHead title="Already Completed — The Invisible Inheritance Test" description="You've already completed this test." canonicalUrl={`https://voyce-x.lovable.app/invisible-inheritance/test/${sessionCode}`} />
          <p className="ii-eyebrow mb-6">ALREADY COMPLETED</p>
          <h1 className="ii-display text-4xl sm:text-5xl mb-5">
            <span className="ii-text-gradient">You've finished your half.</span>
          </h1>
          <p className="ii-serif text-muted-foreground italic max-w-md mb-10 text-lg">
            When your partner finishes theirs, the shared reflection opens.
          </p>
          <Link to={`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`}>
            <Button size="lg" className="ii-cta ii-pill">Open the report</Button>
          </Link>
        </div>
      </AuroraBackground>
    );
  }

  const progressPct = (questionNumber / questionStepsTotal) * 100;

  return (
    <AuroraBackground>
      <SEOHead
        title={`Partner ${partnerKey.toUpperCase()} — The Invisible Inheritance Test`}
        description="Sixty quiet questions. Ten dimensions. Take your half privately."
        canonicalUrl={`https://voyce-x.lovable.app/invisible-inheritance/test/${sessionCode}/${partnerKey}`}
      />

      {/* progress */}
      <div className="h-[3px] w-full bg-white/5">
        <div
          className="h-[3px] transition-all"
          style={{
            width: `${progressPct}%`,
            background: "linear-gradient(90deg, hsl(var(--ii-aurora-1)), hsl(var(--ii-aurora-2)), hsl(var(--ii-aurora-3)))",
            boxShadow: "0 0 14px hsl(var(--ii-glow) / 0.6)",
          }}
        />
      </div>

      <div className="px-4 py-5 flex items-center justify-between max-w-2xl mx-auto">
        <span className="ii-marginalia font-mono">{sessionCode.toUpperCase()} · PARTNER {partnerKey.toUpperCase()}</span>
        <span className="ii-marginalia">{String(questionNumber).padStart(2, "0")} / {String(questionStepsTotal).padStart(2, "0")}</span>
      </div>

      {current.kind === "intro" ? (
        <DimensionIntro
          dimension={IIT_DIMENSIONS[current.dimensionIndex]}
          number={current.dimensionIndex + 1}
          total={IIT_DIMENSIONS.length}
          onContinue={() => setStepIdx((i) => i + 1)}
        />
      ) : (
        <QuestionStage
          key={IIT_QUESTIONS[current.questionIndex].id}
          question={IIT_QUESTIONS[current.questionIndex]}
          index={questionNumber - 1}
          total={questionStepsTotal}
          onAnswer={handleAnswer}
        />
      )}

      {saving && (
        <p className="text-center text-xs text-muted-foreground py-4 italic ii-serif">saving…</p>
      )}
    </AuroraBackground>
  );
}

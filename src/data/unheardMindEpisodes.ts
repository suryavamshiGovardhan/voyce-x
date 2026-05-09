export interface EpisodeSection {
  label: string;
  icon: string;
  type: "story" | "psychology" | "vedic" | "realtalk";
  paragraphs?: string[];
  pullquote?: string;
  shloka?: string;
  shlokaSource?: string;
  vedicBody?: string[];
  bullets?: { strong: string; text: string }[];
}

export interface Episode {
  id: string; // ep01
  number: string; // EP 01
  tag: string;
  title: string;
  hook: string;
  takeaway: string;
  sections: EpisodeSection[];
}

const ep01: Episode = {
  id: "ep01",
  number: "EP 01",
  tag: "Shadow Psychology",
  title: "The Mask We All Wear",
  hook: "You smile. You perform. But who are you when no one's watching?",
  takeaway: "You can't truly connect with anyone until you've met yourself first.",
  sections: [
    {
      label: "The Story",
      icon: "🪞",
      type: "story",
      paragraphs: [
        "Arjun was everyone's favourite person in the room. Funny. Confident. Always had something smart to say. His friends called him the life of the party.",
        "But at 1 AM, when the group chat went quiet and his phone screen dimmed, something else showed up. A heaviness he couldn't name. A tiredness that sleep never fixed. A quiet voice asking: *Is any of that even real?*",
        "He had spent years learning exactly what to say, how to laugh, when to be serious. Not because he was fake — but because somewhere along the way, he had learned that the **real him wasn't safe to show.**",
        "Maybe it started when he cried as a kid and was told boys don't cry. Maybe when he shared a dream and someone laughed. Maybe when being honest cost him a friendship. Whatever the origin — the lesson was clear: *Wear the mask. It's safer.*",
        "So he did. And he got very, very good at it. So good that one day he looked in the mirror and couldn't tell where the mask ended and he began.",
      ],
      pullquote: "The scariest thing isn't losing people. It's losing yourself trying to keep them.",
    },
    {
      label: "The Psychology",
      icon: "🧠",
      type: "psychology",
      paragraphs: [
        "Carl Jung called it the **Persona** — the social mask we wear to navigate the world. And he called what lives beneath it: the **Shadow**.",
        "The Shadow is not evil. It's simply the parts of yourself you were told were unacceptable. Your anger. Your grief. Your ambition. Your neediness. Your weirdness. Over time, you push these parts down — not because they disappear, but because they're inconvenient.",
        "Here's the psychological trap: *the more you suppress the Shadow, the more it controls you from the dark.* It leaks out as irritability, self-sabotage, overreaction to small things, or a vague sense of emptiness even when life looks perfect on the outside.",
        "Research in personality psychology confirms this — people who score high in **self-monitoring** report higher levels of anxiety, lower self-esteem, and difficulty trusting their own emotions. The performance exhausts you.",
        "Shadow work — the process of meeting and integrating those buried parts — isn't about becoming \"worse.\" It's about becoming **whole**.",
      ],
    },
    {
      label: "The Ancient Angle",
      icon: "🕉️",
      type: "vedic",
      shloka: "Arjuna, the self is not the body, nor the role, nor the name. It is the eternal witness — beyond all masks.",
      shlokaSource: "Bhagavad Gita 2.20 (paraphrased)",
      vedicBody: [
        "The Gita calls the true self the **Atman** — the witnessing consciousness that exists beneath all roles. Krishna didn't ask Arjuna to choose between warrior and philosopher. He asked him to *see beyond both*.",
        "In Vedantic philosophy, the mask is called **Ahamkara** — the ego-identity constructed from roles and social belonging. The practice of *Svadhyaya* (self-study) is the ancient version of Shadow work: sitting with your uncensored self and asking — who am I when nothing is being performed?",
      ],
    },
    {
      label: "Real Talk",
      icon: "⚡",
      type: "realtalk",
      bullets: [
        { strong: "Notice the performance.", text: "When do you shift your voice, laugh, or opinion based on who's in the room? That's the mask activating. Just noticing it is step one." },
        { strong: "Find one safe space to drop it.", text: "A journal. A trusted person. Therapy. Somewhere you can say the thing you'd never say out loud." },
        { strong: "Stop judging the ugly parts.", text: "Your jealousy, your fear, your rage — they're data, not defects. Ask what they're protecting." },
        { strong: "Wholeness, not perfection.", text: "The goal isn't to become maskless (impossible). It's to choose when you wear the mask instead of forgetting you're wearing it." },
      ],
    },
  ],
};

const ep02: Episode = {
  id: "ep02",
  number: "EP 02",
  tag: "Self-Sabotage",
  title: "Why You Destroy What You Love",
  hook: "The moment things get good — you find a way to break it.",
  takeaway: "The things you destroy fastest are usually the things you wanted most.",
  sections: [
    {
      label: "The Story",
      icon: "🪞",
      type: "story",
      paragraphs: [
        "Priya had finally gotten the internship she'd worked two years for. The first week went beautifully. Her manager praised her. Her teammates liked her. She was exactly where she'd wanted to be.",
        "Then she started coming in late. Then she stopped responding to emails quickly. Then she submitted a half-finished report and told herself she \"didn't care\" anymore.",
        "She wasn't lazy. She wasn't incompetent. She was **terrified.**",
        "Not of failing — she had failed before and survived. She was terrified of *succeeding*. Because success meant this was real. And if it was real, it could be taken away. And if it was taken away after she'd given everything — that pain would be unbearable.",
        "So she took it away herself. She made sure she failed on her own terms, in her own timing. At least that way, she was in control.",
      ],
      pullquote: "Sometimes we don't destroy things because we don't care. We destroy them because we care too much and don't know what to do with that feeling.",
    },
    {
      label: "The Psychology",
      icon: "🧠",
      type: "psychology",
      paragraphs: [
        "Self-sabotage is a **protective mechanism** — not a personality flaw. Psychologists connect it to several overlapping patterns:",
        "**Fear of Success:** Counterintuitively, success can feel threatening. It raises the stakes, increases visibility, and creates new expectations. For people who grew up in unpredictable environments, high visibility = danger.",
        "**Low Tolerance for Positive Emotion:** Research by Gay Hendricks on the *\"Upper Limit Problem\"* shows that people have an unconscious ceiling for how good they allow themselves to feel. When life exceeds that ceiling, they unconsciously create a crisis to bring things back to familiar territory.",
        "**Attachment to a Struggling Identity:** If your self-image is built around being \"the underdog\" — actually making it threatens who you think you are. You sabotage to stay consistent with your story.",
        "The cure isn't willpower. It's **building a new belief about what you deserve** — slowly, through evidence and action.",
      ],
    },
    {
      label: "The Ancient Angle",
      icon: "🕉️",
      type: "vedic",
      shloka: "Let right deeds be thy motive, not the fruit which comes from them.",
      shlokaSource: "Bhagavad Gita 2.47",
      vedicBody: [
        "The Gita's concept of **Nishkama Karma** — action without attachment to outcome — addresses self-sabotage at its root. When we perform for outcomes (approval, achievement, permanence), we live in constant fear of loss. The action itself becomes poisoned by expectation.",
        "Ancient yogic philosophy also speaks of **Kleshas** — the afflictions of the mind. *Abhinivesha*, the clinging to things out of fear of their ending, is considered one of the deepest. Self-sabotage is Abhinivesha's most paradoxical form: we destroy the thing we cling to, simply to stop fearing its loss.",
      ],
    },
    {
      label: "Real Talk",
      icon: "⚡",
      type: "realtalk",
      bullets: [
        { strong: "Name the pattern, not the action.", text: "Don't call yourself lazy. Ask: \"What am I protecting myself from right now?\"" },
        { strong: "Sit with the discomfort of things going well.", text: "When something is good, consciously breathe through the urge to undo it. The urge will pass." },
        { strong: "Update your self-story.", text: "The identity of \"the one who almost makes it\" needs a rewrite. You are allowed to be the one who arrives." },
        { strong: "Tiny acts of allowing.", text: "Let yourself enjoy the compliment. Let yourself keep the win. Practice receiving in small doses." },
      ],
    },
  ],
};

// Episodes 03-08: scaffolded with hook + tag. Full content can be added later.
const placeholder = (
  id: string,
  num: string,
  tag: string,
  title: string,
  hook: string,
  takeaway: string,
): Episode => ({
  id,
  number: num,
  tag,
  title,
  hook,
  takeaway,
  sections: [
    {
      label: "Coming Soon",
      icon: "✦",
      type: "story",
      paragraphs: [
        "This episode of *The Unheard Mind* is being written. The full story, psychology breakdown, ancient lens, and real-talk practices will land here soon.",
        "In the meantime — sit with the question above. Sometimes the question matters more than the answer.",
      ],
    },
  ],
});

export const episodes: Episode[] = [
  ep01,
  ep02,
  placeholder("ep03", "EP 03", "Attachment Theory", "The Validation Trap", "You need them to say you're enough. But why?", "When you stop needing applause, you start hearing your own voice."),
  placeholder("ep04", "EP 04", "Emotional Intelligence", "Anger Is Not the Enemy", "Rage isn't the problem. What's beneath it is.", "Anger is grief that hasn't been allowed to speak."),
  placeholder("ep05", "EP 05", "Social Psychology", "The Comparison Loop", "You opened Instagram. Now you feel small. Why?", "Comparison is the fastest way to forget who you actually are."),
  placeholder("ep06", "EP 06", "Introversion", "Silence Isn't Weakness", "They called you too quiet. You called it survival.", "Stillness is not absence. It is presence without performance."),
  placeholder("ep07", "EP 07", "Grief & Identity", "Why You Can't Let Go", "Loss doesn't just take people. It takes identity.", "Letting go isn't forgetting. It's making room for who you're becoming."),
  placeholder("ep08", "EP 08", "Imposter Syndrome", "The Imposter Inside", "You earned it. So why do you feel like a fraud?", "The voice that calls you a fraud is usually quoting someone who wasn't qualified to judge you."),
];

export const getEpisode = (id: string) => episodes.find((e) => e.id === id);

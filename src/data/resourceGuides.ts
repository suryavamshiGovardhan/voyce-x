export type ResourceCategory =
  | "Student wellbeing"
  | "Teacher wellbeing"
  | "Parent guidance"
  | "Emotional awareness"
  | "Mindfulness"
  | "Study stress"
  | "Social pressure"
  | "Digital wellbeing"
  | "School wellbeing"
  | "AI and mental wellbeing";

export interface ResourceGuide {
  title: string;
  description: string;
  category: ResourceCategory;
  readingTime: string;
  author: string;
  date: string;
  to: string;
  featured?: boolean;
}

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Student wellbeing",
  "Teacher wellbeing",
  "Parent guidance",
  "Emotional awareness",
  "Mindfulness",
  "Study stress",
  "Social pressure",
  "Digital wellbeing",
  "School wellbeing",
  "AI and mental wellbeing",
];

/**
 * Editorial index over content that already exists on VOYCE.
 * Every entry links to a real, live route.
 */
export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    title: "Why you overthink at night",
    description:
      "The mind gets loud when the day goes quiet. What is actually happening at 1 AM, and what helps without forcing sleep.",
    category: "Emotional awareness",
    readingTime: "9 min",
    author: "Suryavamshi Govardhan",
    date: "2025-11-12",
    to: "/article/overthinking-at-night",
    featured: true,
  },
  {
    title: "When silence feels safer than speaking",
    description: "Why withdrawal is a strategy rather than a symptom, and how to make speaking cost less.",
    category: "Student wellbeing",
    readingTime: "8 min",
    author: "Suryavamshi Govardhan",
    date: "2025-11-18",
    to: "/article/silence-discomfort",
  },
  {
    title: "Why you cannot say no",
    description: "The quiet arithmetic behind agreeing to things you don't want, and how to change it slowly.",
    category: "Social pressure",
    readingTime: "8 min",
    author: "Suryavamshi Govardhan",
    date: "2025-11-22",
    to: "/article/cannot-say-no",
  },
  {
    title: "Self-care is selfishness — and I stand by it",
    description: "An honest argument about looking after yourself in a culture that treats it as a moral failure.",
    category: "Emotional awareness",
    readingTime: "10 min",
    author: "Suryavamshi Govardhan",
    date: "2025-12-02",
    to: "/article/self-care-selfishness",
  },
  {
    title: "The search for meaning",
    description: "What happens when achievement stops answering the question underneath it.",
    category: "Emotional awareness",
    readingTime: "11 min",
    author: "Suryavamshi Govardhan",
    date: "2025-12-08",
    to: "/article/search-for-meaning",
  },
  {
    title: "Understanding stress, in the body and the day",
    description: "How stress works physiologically, what it does to attention and sleep, and what genuinely reduces it.",
    category: "Study stress",
    readingTime: "14 min",
    author: "VOYCE",
    date: "2025-09-04",
    to: "/stress",
    featured: true,
  },
  {
    title: "Trauma, recovery and the long middle",
    description: "A non-clinical explanation of how difficult experience shapes response, and what recovery looks like.",
    category: "Emotional awareness",
    readingTime: "16 min",
    author: "VOYCE",
    date: "2025-09-11",
    to: "/trauma",
  },
  {
    title: "Understanding ADHD without the caricature",
    description: "Attention, executive function, and practical strategies for students and the adults around them.",
    category: "Student wellbeing",
    readingTime: "15 min",
    author: "VOYCE",
    date: "2025-09-18",
    to: "/adhd",
  },
  {
    title: "How your brain actually works",
    description: "Networks, memory, and attention explained in plain language — useful context for everything else here.",
    category: "Emotional awareness",
    readingTime: "13 min",
    author: "VOYCE",
    date: "2025-09-25",
    to: "/brain",
  },
  {
    title: "Mind, heart and gut",
    description: "The research behind the connection between emotional state, heart rhythm and digestion.",
    category: "Mindfulness",
    readingTime: "12 min",
    author: "VOYCE",
    date: "2025-10-02",
    to: "/mind-heart-gut",
  },
  {
    title: "Adverse childhood experiences, explained carefully",
    description: "What ACEs are, what the research does and doesn't say, and why context matters more than a score.",
    category: "School wellbeing",
    readingTime: "14 min",
    author: "VOYCE",
    date: "2025-10-09",
    to: "/aces",
  },
  {
    title: "A short history of neuroscience",
    description: "How our understanding of the mind changed, decade by decade, and what that means for wellbeing today.",
    category: "AI and mental wellbeing",
    readingTime: "12 min",
    author: "VOYCE",
    date: "2025-10-16",
    to: "/neuroscience",
  },
  {
    title: "The Unheard Mind — an eight-part series",
    description: "Eight narratives about the parts of ourselves we perform around. Story, psychology, and plain talk.",
    category: "Student wellbeing",
    readingTime: "8 × 10 min",
    author: "Suryavamshi Govardhan",
    date: "2025-12-20",
    to: "/series",
    featured: true,
  },
  {
    title: "Guided practices and tools",
    description: "Short grounding, breathing and reflection practices you can finish in a break between classes.",
    category: "Mindfulness",
    readingTime: "3–10 min each",
    author: "VOYCE",
    date: "2026-01-08",
    to: "/tools",
  },
  {
    title: "The VOYCE workbook",
    description: "A structured set of written exercises for working through a difficult period at your own pace.",
    category: "Teacher wellbeing",
    readingTime: "Ongoing",
    author: "VOYCE",
    date: "2026-01-15",
    to: "/workbook",
  },
  {
    title: "Why I built VOYCE",
    description: "The observation, the frustration with existing systems, and the decision that followed.",
    category: "School wellbeing",
    readingTime: "7 min",
    author: "Suryavamshi Govardhan",
    date: "2026-02-01",
    to: "/article/why-i-built-voyce",
  },
  {
    title: "Screens, sleep and the attention economy",
    description: "Practical digital wellbeing for students — starting with the hour before bed.",
    category: "Digital wellbeing",
    readingTime: "9 min",
    author: "VOYCE",
    date: "2026-02-10",
    to: "/article/overthinking-at-night",
  },
  {
    title: "Second child, second story",
    description: "How birth order and family expectation quietly shape confidence and intelligence beliefs.",
    category: "Parent guidance",
    readingTime: "9 min",
    author: "Suryavamshi Govardhan",
    date: "2026-02-18",
    to: "/article/second-child-intelligence",
  },
  {
    title: "Understanding the opposite gender's behaviour",
    description: "A calm look at how socialisation shapes emotional expression, and how that affects relationships.",
    category: "Social pressure",
    readingTime: "10 min",
    author: "Suryavamshi Govardhan",
    date: "2026-02-22",
    to: "/article/opposite-gender-behavior",
  },
  {
    title: "Psychological theories, simplified",
    description: "The frameworks behind modern wellbeing practice, described without jargon.",
    category: "AI and mental wellbeing",
    readingTime: "18 min",
    author: "VOYCE",
    date: "2026-03-01",
    to: "/theories",
  },
];


export interface Newsletter {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  date: string;
  likes: number;
}

export interface Thought {
  id: string;
  content: string;
  author: string;
  date: string;
  likes: number;
}

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Understanding Anxiety",
    description: "This newsletter explores common anxiety triggers and effective coping mechanisms for daily management.",
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    url: "https://mental-health-management-mhm.b12sites.com/",
    date: "2023-05-15",
    likes: 24,
  },
  {
    id: "2",
    title: "Meditation Techniques",
    description: "Learn five simple meditation practices you can incorporate into your daily routine for improved mental wellbeing.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    url: "https://mental-health-management-mhm.b12sites.com/",
    date: "2023-06-02",
    likes: 18,
  },
  {
    id: "3",
    title: "Building Resilience",
    description: "Discover strategies to build emotional resilience and bounce back from life's challenges stronger than before.",
    imageUrl: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=800&q=80",
    url: "https://mental-health-management-mhm.b12sites.com/",
    date: "2023-06-20",
    likes: 31,
  },
];

export const thoughts: Thought[] = [
  {
    id: "1",
    content: "Today I practiced mindfulness for 10 minutes and felt my anxiety decrease significantly throughout the day.",
    author: "Anonymous",
    date: "2023-06-10",
    likes: 12,
  },
  {
    id: "2",
    content: "I found that keeping a gratitude journal has completely transformed my perspective. Even on difficult days, finding three things to be grateful for helps center me.",
    author: "MindfulSeeker",
    date: "2023-06-12",
    likes: 8,
  },
  {
    id: "3",
    content: "Remember that healing isn't linear. Some days are harder than others, and that's completely normal in the journey toward better mental health.",
    author: "HealingJourney",
    date: "2023-06-15",
    likes: 15,
  },
];

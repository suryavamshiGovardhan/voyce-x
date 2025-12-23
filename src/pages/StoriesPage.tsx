import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BookOpen, Pause, Heart, Cloud, Users } from "lucide-react";

// Story Categories (No disorder names, no clinical framing)
const storyCategories = [
  { id: "silence", title: "Silence", description: "Stories about the weight of unspoken thoughts", icon: Pause },
  { id: "fear", title: "Fear", description: "Navigating uncertainty and worry", icon: Cloud },
  { id: "family", title: "Family", description: "Relationships, expectations, and belonging", icon: Users },
  { id: "identity", title: "Identity", description: "Finding and understanding yourself", icon: Heart },
  { id: "pressure", title: "Pressure", description: "Academic, social, and personal demands", icon: BookOpen },
];

// Sample Anonymous Stories (First-person, human, no diagnosis)
const sampleStories = [
  {
    id: "1",
    category: "silence",
    content: "For years, I carried everything inside. I didn't know how to say what I felt, so I just didn't. It wasn't until I found a space where I didn't have to explain — just exist — that I realized silence can be both a burden and a choice.",
    reflectionQuestion: "What have you been carrying that you haven't put into words?"
  },
  {
    id: "2",
    category: "pressure",
    content: "Everyone expected me to be the successful one. The one who had it together. But inside, I was exhausted. It took a long time to understand that taking care of myself wasn't the same as giving up.",
    reflectionQuestion: "When did expectations start feeling heavier than your own needs?"
  },
  {
    id: "3",
    category: "family",
    content: "My family loves me, but they don't always understand me. For a long time, I confused their love with acceptance. Now I'm learning that I can love them while also honoring my own truth.",
    reflectionQuestion: "How do you navigate love that doesn't always come with understanding?"
  },
  {
    id: "4",
    category: "fear",
    content: "I used to be afraid of everything changing. Then everything did change, and I survived. I learned that fear is often about the unknown, and that I'm more capable than I thought.",
    reflectionQuestion: "What fear has taught you something about yourself?"
  },
  {
    id: "5",
    category: "identity",
    content: "I spent years trying to be who others wanted me to be. The journey to finding myself wasn't linear — it was messy, confusing, and sometimes painful. But it was mine.",
    reflectionQuestion: "What parts of yourself are you still discovering?"
  },
];

export default function StoriesPage() {
  return (
    <>
      <SEOHead
        title="Stories | VOYCE-X"
        description="Anonymous, first-person human stories about silence, fear, family, identity, and pressure. Read and feel less alone."
        keywords="personal stories, mental health stories, anonymous stories, human connection"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Header */}
          <section className="safe-space breathing-space border-b border-border">
            <div className="text-center max-w-2xl mx-auto">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Stories
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Anonymous, first-person experiences from people navigating 
                life's complexities. No comments. No likes. Just human connection.
              </p>
              
              <div className="disclaimer-box text-left">
                <p className="text-muted-foreground text-sm">
                  These stories are shared for reflection, not advice. 
                  If you're in crisis, please reach out to a trusted person or crisis helpline.
                </p>
              </div>
            </div>
          </section>
          
          {/* Categories */}
          <section className="safe-space py-12">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {storyCategories.map((category) => (
                <button
                  key={category.id}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-foreground text-sm transition-colors"
                >
                  <category.icon className="h-4 w-4 text-primary" />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </section>
          
          {/* Stories */}
          <section className="safe-space pb-16">
            <div className="space-y-8 max-w-2xl mx-auto">
              {sampleStories.map((story) => (
                <article key={story.id} className="story-card">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {storyCategories.find(c => c.id === story.category)?.title}
                    </span>
                  </div>
                  
                  {/* Story Content */}
                  <p className="text-foreground leading-relaxed mb-6">
                    "{story.content}"
                  </p>
                  
                  {/* Reflection Question */}
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-sm text-primary italic">
                      Reflect: {story.reflectionQuestion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          
          {/* Closing Message */}
          <section className="safe-space pb-16">
            <div className="text-center max-w-lg mx-auto">
              <p className="reflection-prompt">
                "Your story matters, even if no one else ever hears it."
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

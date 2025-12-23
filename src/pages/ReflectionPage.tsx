import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Feather, Lock, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Guided Journaling Prompts (No gamification, no streaks, no pressure)
const reflectionPrompts = [
  {
    id: "1",
    prompt: "What's one thing you're feeling right now that you haven't said out loud?",
    category: "awareness"
  },
  {
    id: "2",
    prompt: "If your body could speak today, what might it be asking for?",
    category: "body"
  },
  {
    id: "3",
    prompt: "What's something you've been avoiding thinking about? Why might that be?",
    category: "depth"
  },
  {
    id: "4",
    prompt: "Describe a moment recently when you felt genuinely at peace.",
    category: "gratitude"
  },
  {
    id: "5",
    prompt: "What's one small thing you can do for yourself today?",
    category: "action"
  },
  {
    id: "6",
    prompt: "Who in your life makes you feel seen? What do they do that creates that feeling?",
    category: "connection"
  },
];

export default function ReflectionPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [journalEntry, setJournalEntry] = useState("");

  return (
    <>
      <SEOHead
        title="Reflection | VOYCE-X"
        description="Guided journaling prompts for self-reflection. Private, personal, at your own pace. No streaks, no scores."
        keywords="journaling, self-reflection, mindfulness, mental clarity, personal growth"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Header */}
          <section className="safe-space breathing-space border-b border-border">
            <div className="text-center max-w-2xl mx-auto">
              <Feather className="h-10 w-10 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Reflection
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Guided journaling prompts to help you explore your thoughts 
                and feelings. Take your time. There's no rush.
              </p>
              
              {/* Privacy Notice */}
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Your reflections are private and stay on your device</span>
              </div>
            </div>
          </section>
          
          {/* Prompts Section */}
          <section className="safe-space py-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-lg font-medium text-foreground mb-6 text-center">
                Choose a prompt that speaks to you
              </h2>
              
              <div className="grid gap-4">
                {reflectionPrompts.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPrompt(item.id)}
                    className={`story-card text-left transition-all ${
                      selectedPrompt === item.id 
                        ? "border-primary/50 bg-primary/5" 
                        : ""
                    }`}
                  >
                    <p className="text-foreground leading-relaxed">
                      {item.prompt}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Writing Section */}
          {selectedPrompt && (
            <section className="safe-space pb-16">
              <div className="max-w-2xl mx-auto">
                <div className="voyce-card p-6">
                  <p className="text-primary font-medium mb-4">
                    {reflectionPrompts.find(p => p.id === selectedPrompt)?.prompt}
                  </p>
                  
                  <Textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder="Take your time... Write whatever comes to mind."
                    className="min-h-[200px] text-base leading-relaxed resize-none border-0 focus:ring-0 bg-transparent p-0"
                  />
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Your writing stays here. No one else can see it.
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary"
                      onClick={() => {
                        // Save to localStorage
                        const saved = JSON.parse(localStorage.getItem("voyce_reflections") || "[]");
                        saved.push({
                          prompt: reflectionPrompts.find(p => p.id === selectedPrompt)?.prompt,
                          entry: journalEntry,
                          date: new Date().toISOString()
                        });
                        localStorage.setItem("voyce_reflections", JSON.stringify(saved));
                        setJournalEntry("");
                        setSelectedPrompt(null);
                      }}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save for myself
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Encouraging Message */}
          <section className="safe-space pb-16">
            <div className="text-center max-w-lg mx-auto">
              <div className="disclaimer-box">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Remember:</strong> Reflection is personal. 
                  There's no right or wrong way to do this. Some days you might write a lot, 
                  other days just a few words. Both are okay.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import CDSContent from "@/components/content/CDSContent";

export default function CDSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight text-foreground mb-6">
            <span className="text-primary">CDS</span> Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring Cognitive Disengagement Syndrome — a newly recognized condition 
            distinct from ADHD, characterized by daydreaming and mental fogginess.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl">
          <CDSContent />
        </div>

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}

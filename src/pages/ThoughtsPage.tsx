
import Navbar from "@/components/Navbar";
import ClearThoughts from "@/components/ClearThoughts";
import Footer from "@/components/Footer";

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Clear Thoughts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A safe space to express yourself and connect with others. 
              Share your experiences, insights, and thoughts to help build a supportive community.
            </p>
          </div>
        </div>
        
        <ClearThoughts />
      </main>
      
      <Footer />
    </div>
  );
}

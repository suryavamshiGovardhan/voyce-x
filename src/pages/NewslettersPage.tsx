
import Navbar from "@/components/Navbar";
import Newsletters from "@/components/Newsletters";
import Footer from "@/components/Footer";

export default function NewslettersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Mental Health Newsletters</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover curated mental health resources to support your journey. Add your own resources 
              to help build our community knowledge base.
            </p>
          </div>
        </div>
        
        <Newsletters />
      </main>
      
      <Footer />
    </div>
  );
}

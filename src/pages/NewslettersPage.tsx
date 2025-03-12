
import Navbar from "@/components/Navbar";
import Newsletters from "@/components/Newsletters";

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
      
      <footer className="py-8 px-4 border-t bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} VOYCE Mental Health Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

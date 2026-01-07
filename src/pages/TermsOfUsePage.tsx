import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

export default function TermsOfUsePage() {
  return (
    <>
      <SEOHead 
        title="Terms of Use | VOYCE-X"
        description="Terms of Use for VOYCE-X. Understand the guidelines for using our platform."
        keywords="terms of use, terms of service, VOYCE-X terms"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Use</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using VOYCE-X, you agree to be bound by these Terms of Use. 
                If you do not agree, please do not use our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Nature of Content</h2>
              <p className="text-muted-foreground">
                VOYCE-X provides educational and reflective content about mental health, psychology, and personal growth. 
                This content is for informational purposes only and is not a substitute for professional medical advice, 
                diagnosis, or treatment.
              </p>
              <p className="text-muted-foreground font-medium">
                VOYCE-X does not provide therapy, diagnosis, or emergency support. 
                If you are in crisis, please contact emergency services or a mental health professional.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Conduct</h2>
              <p className="text-muted-foreground">
                You agree to use VOYCE-X responsibly and not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Post harmful, abusive, or inappropriate content</li>
                <li>Misuse the platform for unauthorized purposes</li>
                <li>Attempt to access other users' accounts or data</li>
                <li>Distribute the content without permission</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on VOYCE-X, including text, graphics, and design, is owned by VOYCE-X or its contributors. 
                You may not reproduce or distribute this content without permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                VOYCE-X is provided "as is" without warranties of any kind. 
                We are not liable for any damages arising from your use of the platform. 
                Use the information provided at your own discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these terms from time to time. Continued use of VOYCE-X after changes 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please reach out through our contact page.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

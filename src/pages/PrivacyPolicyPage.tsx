import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | VOYCE-X"
        description="Privacy Policy for VOYCE-X. Learn how we collect, use, and protect your information."
        keywords="privacy policy, data protection, VOYCE-X privacy"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                VOYCE-X collects minimal information necessary to provide our educational and reflective services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Account information (email, name) when you create an account</li>
                <li>Journal entries and mood data you voluntarily submit</li>
                <li>Anonymous usage analytics to improve our platform</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use your information solely to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and personalize your VOYCE-X experience</li>
                <li>Save your journal entries and progress</li>
                <li>Improve our educational content and features</li>
                <li>Send occasional updates if you opt-in</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Data Protection</h2>
              <p className="text-muted-foreground">
                Your data is encrypted and stored securely. We do not sell your personal information to third parties. 
                You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cookies</h2>
              <p className="text-muted-foreground">
                We use essential cookies to maintain your session and preferences. 
                We do not use tracking cookies for advertising purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal data. 
                Contact us at privacy@voyce-x.com for any data-related requests.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
              <p className="text-muted-foreground">
                For privacy-related questions, please reach out through our contact page or email us directly.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSessionCode } from "@/lib/iit/scoring";
import SessionCodeCard from "@/components/iit/SessionCodeCard";

export default function InvisibleInheritanceTestPage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [createdCode, setCreatedCode] = useState<string | null>(null);
  const [joinCode, setJoinCode] = useState("");
  const [joining, setJoining] = useState(false);

  const createSession = async () => {
    setCreating(true);
    try {
      // Generate codes until we find an unused one
      let code = generateSessionCode();
      for (let attempt = 0; attempt < 4; attempt++) {
        const { data: existing } = await supabase
          .from("iit_sessions")
          .select("id")
          .eq("session_code", code)
          .maybeSingle();
        if (!existing) break;
        code = generateSessionCode();
      }

      const { error } = await supabase
        .from("iit_sessions")
        .insert({ session_code: code });

      if (error) throw error;
      setCreatedCode(code);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't create a session. Try again in a moment.");
    } finally {
      setCreating(false);
    }
  };

  const joinSession = async () => {
    const code = joinCode.trim().toUpperCase();
    if (code.length < 4) {
      toast.error("Enter a valid session code.");
      return;
    }
    setJoining(true);
    try {
      const { data, error } = await supabase
        .from("iit_sessions")
        .select("session_code")
        .eq("session_code", code)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        toast.error("Session not found.");
        return;
      }
      navigate(`/invisible-inheritance/test/${code}/b`);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="The Invisible Inheritance Test — A Pre-Marriage Mirror"
        description="A cinematic emotional-readiness test for couples before marriage. Surface the inherited patterns, triggers and templates that usually surface too late."
        canonicalUrl="https://voyce-x.lovable.app/invisible-inheritance/test"
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-12 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
            A VOYCE INITIATIVE · THE INVISIBLE INHERITANCE
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-6 leading-tight">
            The test you take <em>before</em> the wedding,<br className="hidden sm:inline" />
            not the therapy you book after.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
            Two of you. Sixty quiet questions. Ten dimensions of the patterns
            you each inherited without noticing. One shared map that shows where
            you align, where you'll clash, and where one of you will unknowingly
            trigger the other's oldest wound.
          </p>

          {!createdCode && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={createSession} disabled={creating} className="min-w-[200px]">
                {creating ? "Opening a session…" : "Start as a couple"}
              </Button>
              <Link to="/invisible-inheritance">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Read the vision first
                </Button>
              </Link>
            </div>
          )}
        </section>

        {/* Created code */}
        {createdCode && (
          <section className="px-4 pb-16 max-w-2xl mx-auto">
            <SessionCodeCard
              code={createdCode}
              partnerALink={`/invisible-inheritance/test/${createdCode}/a`}
              partnerBLink={`/invisible-inheritance/test/${createdCode}/b`}
              reportLink={`/invisible-inheritance/test/${createdCode}/report`}
            />
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={`/invisible-inheritance/test/${createdCode}/a`}>
                <Button size="lg" className="min-w-[200px]">Begin as Partner A</Button>
              </Link>
              <Link to={`/invisible-inheritance/test/${createdCode}/b`}>
                <Button size="lg" variant="outline" className="min-w-[200px]">Begin as Partner B</Button>
              </Link>
            </div>
          </section>
        )}

        {/* Join existing */}
        <section className="px-4 pb-20 max-w-md mx-auto">
          <div className="border-t border-border pt-10">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground text-center mb-4">
              YOUR PARTNER ALREADY STARTED?
            </p>
            <div className="flex gap-2">
              <Input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                maxLength={8}
                className="font-mono tracking-[0.3em] text-center"
                aria-label="Session code"
              />
              <Button onClick={joinSession} disabled={joining}>
                {joining ? "…" : "Join"}
              </Button>
            </div>
          </div>
        </section>

        {/* Dimensions teaser */}
        <section className="px-4 pb-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-foreground mb-8 text-center">
            What this test surfaces
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
            {[
              "Conflict Inheritance",
              "Love Language Origin",
              "Money Memory",
              "Emotional Vocabulary",
              "Parenting Template",
              "Silence vs Confrontation",
              "Roles & Gender Scripts",
              "Triggers & Wounds",
              "Boundary Architecture",
              "Vision of Home",
            ].map((d) => (
              <div key={d} className="border border-border rounded-md px-4 py-3 bg-card/20">
                {d}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-10 leading-relaxed">
            A reflection tool, not a clinical assessment. This is not a predictor of marriage success
            or failure. It is a mirror for the conversations that usually arrive too late.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

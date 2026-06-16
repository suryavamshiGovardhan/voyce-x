import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import CompatibilityMap from "@/components/iit/CompatibilityMap";
import ConversationPrompts from "@/components/iit/ConversationPrompts";
import { Button } from "@/components/ui/button";
import { generateReport, IITReport, PartnerAnswerMap } from "@/lib/iit/scoring";

interface SessionRow {
  id: string;
  session_code: string;
  partner_a_completed_at: string | null;
  partner_b_completed_at: string | null;
}

export default function InvisibleInheritanceReportPage() {
  const { sessionCode = "" } = useParams();
  const code = sessionCode.toUpperCase();
  const [session, setSession] = useState<SessionRow | null>(null);
  const [report, setReport] = useState<IITReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data: s, error: se } = await supabase
          .from("iit_sessions")
          .select("id, session_code, partner_a_completed_at, partner_b_completed_at")
          .eq("session_code", code)
          .maybeSingle();
        if (cancelled) return;
        if (se || !s) { setError("Session not found."); setLoading(false); return; }
        setSession(s as SessionRow);

        if (!s.partner_a_completed_at || !s.partner_b_completed_at) {
          setLoading(false);
          return;
        }

        const { data: rows, error: re } = await supabase
          .from("iit_responses")
          .select("partner, question_id, answer_value")
          .eq("session_id", s.id);
        if (cancelled) return;
        if (re) { setError("Couldn't load responses."); setLoading(false); return; }

        const answersA: PartnerAnswerMap = {};
        const answersB: PartnerAnswerMap = {};
        (rows ?? []).forEach((r: any) => {
          if (r.partner === "a") answersA[r.question_id] = r.answer_value;
          else if (r.partner === "b") answersB[r.question_id] = r.answer_value;
        });
        setReport(generateReport(answersA, answersB));
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Something went wrong.");
          setLoading(false);
        }
      }
    })();
    return () => { cancelled = true; };
  }, [code]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Your Reflection — The Invisible Inheritance Test"
        description="A shared compatibility map for the patterns you each inherited. Conversations to have before vows."
        canonicalUrl={`https://voyce-x.lovable.app/invisible-inheritance/test/${code}/report`}
      />
      <Navbar />

      <main className="flex-1 px-4 py-12 max-w-4xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground text-center mb-4">
          SESSION {code} · YOUR SHARED REFLECTION
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif text-foreground text-center mb-3 leading-tight">
          What you each brought into the room.
        </h1>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10 text-sm leading-relaxed">
          This is not a score. It is a mirror — pointed gently at the patterns
          you each inherited before you ever met.
        </p>

        {loading && <p className="text-center text-muted-foreground">Composing your reflection…</p>}

        {!loading && error && (
          <div className="text-center">
            <p className="text-rose-500 mb-4">{error}</p>
            <Link to="/invisible-inheritance/test"><Button variant="outline">Back to the test</Button></Link>
          </div>
        )}

        {!loading && session && !report && (
          <div className="border border-border rounded-lg p-8 text-center bg-card/30 max-w-lg mx-auto">
            <h2 className="text-xl font-serif mb-3">Waiting for the other half.</h2>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>Partner A: {session.partner_a_completed_at ? "complete" : "not yet"}</li>
              <li>Partner B: {session.partner_b_completed_at ? "complete" : "not yet"}</li>
            </ul>
            <p className="text-xs text-muted-foreground mb-6">
              The report opens automatically once both partners finish. Share this page link with them.
            </p>
            <Link to="/invisible-inheritance/test"><Button variant="outline">Back</Button></Link>
          </div>
        )}

        {!loading && report && (
          <div className="space-y-12">
            {/* Overall */}
            <section className="text-center">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground mb-3">OVERALL ALIGNMENT</p>
              <p className="text-6xl sm:text-7xl font-serif text-foreground mb-4">{report.overallAlignment}<span className="text-3xl text-muted-foreground">%</span></p>
              <div className="flex justify-center gap-6 text-xs text-muted-foreground">
                <span><span className="text-emerald-500 font-medium">{report.resonanceCount}</span> resonance</span>
                <span><span className="text-amber-500 font-medium">{report.tensionCount}</span> tension</span>
                <span><span className="text-rose-500 font-medium">{report.blindSpotCount}</span> blind spot</span>
              </div>
            </section>

            {/* Map */}
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">The constellation</h2>
              <CompatibilityMap dimensions={report.dimensions} />
            </section>

            {/* Per-dimension insights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-foreground mb-4">Dimension by dimension</h2>
              {report.dimensions.map((d) => (
                <div key={d.dimensionId} className="border border-border rounded-md p-5 bg-card/20">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-base font-serif text-foreground">{d.title}</h3>
                      <p className="text-xs text-muted-foreground">{d.subtitle}</p>
                    </div>
                    <span className={[
                      "text-[10px] uppercase tracking-widest px-2 py-1 rounded border",
                      d.zone === "resonance" && "text-emerald-600 border-emerald-500/30",
                      d.zone === "tension" && "text-amber-600 border-amber-500/30",
                      d.zone === "blind_spot" && "text-rose-600 border-rose-500/30",
                    ].filter(Boolean).join(" ")}>
                      {d.zone.replace("_", " ")}
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                    <span>A: <span className="text-foreground">{d.partnerA.archetype}</span></span>
                    <span>B: <span className="text-foreground">{d.partnerB.archetype}</span></span>
                    <span className="ml-auto">{d.alignment}% aligned</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.insight}</p>
                </div>
              ))}
            </section>

            {/* Conversations */}
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-2">The {report.topConversations.length} conversations to have before vows</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Don't try them all tonight. One per week. No fixing. Just listening.
              </p>
              <ConversationPrompts prompts={report.topConversations} />
            </section>

            <section className="border-t border-border pt-8 text-center">
              <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                This is a reflection tool, not a clinical assessment, prediction, or therapy.
                Carry it gently. The patterns you inherited were not chosen — but what you do
                with them now, you can choose together.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Link to="/invisible-inheritance"><Button variant="outline">The vision</Button></Link>
                <Link to="/invisible-inheritance/test"><Button variant="outline">Start another session</Button></Link>
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEOHead from "@/components/SEOHead";
import QuestionStage from "@/components/iit/QuestionStage";
import DimensionIntro from "@/components/iit/DimensionIntro";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  IIT_DIMENSIONS,
  IIT_QUESTIONS,
  TOTAL_QUESTIONS,
} from "@/data/invisibleInheritanceQuestions";

type Step = { kind: "intro"; dimensionIndex: number } | { kind: "question"; questionIndex: number };

function buildSteps(): Step[] {
  const steps: Step[] = [];
  let lastDim = "";
  IIT_QUESTIONS.forEach((qq, i) => {
    if (qq.dimension !== lastDim) {
      const dimIndex = IIT_DIMENSIONS.findIndex((d) => d.id === qq.dimension);
      steps.push({ kind: "intro", dimensionIndex: dimIndex });
      lastDim = qq.dimension;
    }
    steps.push({ kind: "question", questionIndex: i });
  });
  return steps;
}

export default function InvisibleInheritanceTestTakePage() {
  const { sessionCode = "", partner = "a" } = useParams();
  const navigate = useNavigate();
  const partnerKey = partner === "b" ? "b" : "a";

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [saving, setSaving] = useState(false);

  const steps = useMemo(buildSteps, []);
  const current = steps[stepIdx];
  const questionStepsTotal = TOTAL_QUESTIONS;
  const questionNumber = steps.slice(0, stepIdx + 1).filter((s) => s.kind === "question").length;

  // Load session
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("iit_sessions")
        .select("id, partner_a_completed_at, partner_b_completed_at")
        .eq("session_code", sessionCode.toUpperCase())
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        toast.error("Session not found.");
        navigate("/invisible-inheritance/test");
        return;
      }
      setSessionId(data.id);
      const done = partnerKey === "a" ? !!data.partner_a_completed_at : !!data.partner_b_completed_at;
      setAlreadyDone(done);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [sessionCode, partnerKey, navigate]);

  const handleAnswer = async (value: number) => {
    if (!sessionId || current.kind !== "question") return;
    const q = IIT_QUESTIONS[current.questionIndex];
    setSaving(true);
    try {
      const { error } = await supabase
        .from("iit_responses")
        .upsert(
          {
            session_id: sessionId,
            partner: partnerKey,
            dimension: q.dimension,
            question_id: q.id,
            answer_value: value,
          },
          { onConflict: "session_id,partner,question_id" }
        );
      if (error) throw error;

      const isLast = stepIdx === steps.length - 1;
      if (isLast) {
        // Mark partner complete
        const updates: Record<string, string> =
          partnerKey === "a"
            ? { partner_a_completed_at: new Date().toISOString() }
            : { partner_b_completed_at: new Date().toISOString() };
        await supabase.from("iit_sessions").update(updates).eq("id", sessionId);
        navigate(`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`);
      } else {
        setStepIdx((i) => i + 1);
      }
    } catch (err) {
      console.error(err);
      toast.error("Couldn't save that answer. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
        Opening your session…
      </div>
    );
  }

  if (alreadyDone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <SEOHead title="Already Completed — The Invisible Inheritance Test" description="You've already completed this test." canonicalUrl={`https://voyce-x.lovable.app/invisible-inheritance/test/${sessionCode}`} />
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground mb-6">ALREADY COMPLETED</p>
        <h1 className="text-3xl font-serif text-foreground mb-4">You've finished your half.</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          When your partner finishes theirs, the shared reflection opens.
        </p>
        <Link to={`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`}>
          <Button size="lg">Open the report</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Partner ${partnerKey.toUpperCase()} — The Invisible Inheritance Test`}
        description="Sixty quiet questions. Ten dimensions. Take your half privately."
        canonicalUrl={`https://voyce-x.lovable.app/invisible-inheritance/test/${sessionCode}/${partnerKey}`}
      />

      {/* progress */}
      <div className="h-1 w-full bg-muted">
        <div
          className="h-1 bg-emerald-500/80 transition-all"
          style={{ width: `${(questionNumber / questionStepsTotal) * 100}%` }}
        />
      </div>

      <div className="px-4 py-6 flex items-center justify-between text-xs text-muted-foreground max-w-2xl mx-auto">
        <span className="font-mono tracking-widest">{sessionCode.toUpperCase()} · Partner {partnerKey.toUpperCase()}</span>
        <span>{questionNumber} / {questionStepsTotal}</span>
      </div>

      {current.kind === "intro" ? (
        <DimensionIntro
          dimension={IIT_DIMENSIONS[current.dimensionIndex]}
          number={current.dimensionIndex + 1}
          total={IIT_DIMENSIONS.length}
          onContinue={() => setStepIdx((i) => i + 1)}
        />
      ) : (
        <QuestionStage
          key={IIT_QUESTIONS[current.questionIndex].id}
          question={IIT_QUESTIONS[current.questionIndex]}
          index={questionNumber - 1}
          total={questionStepsTotal}
          onAnswer={handleAnswer}
        />
      )}

      {saving && (
        <p className="text-center text-xs text-muted-foreground py-4">saving…</p>
      )}
    </div>
  );
}

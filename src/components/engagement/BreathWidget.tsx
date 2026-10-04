import { useEffect, useRef, useState } from "react";
import { Wind } from "lucide-react";

const CYCLE_SECONDS = 8; // 4s in, 4s out
const TOTAL_SECONDS = 60;

/**
 * Sixty seconds of stillness — a slow circle to breathe with.
 * Respects prefers-reduced-motion by holding a steady circle with text cues.
 */
export default function BreathWidget() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    if (!running) return;
    const started = performance.now() - elapsed * 1000;
    const tick = () => {
      const e = (performance.now() - started) / 1000;
      if (e >= TOTAL_SECONDS) {
        setElapsed(TOTAL_SECONDS);
        setRunning(false);
        return;
      }
      setElapsed(e);
      timerRef.current = requestAnimationFrame(tick);
    };
    timerRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(timerRef.current);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  const phase = Math.floor(elapsed % CYCLE_SECONDS) < CYCLE_SECONDS / 2 ? "Breathe in" : "Breathe out";
  const phaseT = (elapsed % CYCLE_SECONDS) / CYCLE_SECONDS; // 0..1
  // Smooth scale: 1 → 1.35 on the inhale half, back on the exhale half
  const scale = phaseT < 0.5 ? 1 + 0.35 * (phaseT * 2) : 1.35 - 0.35 * ((phaseT - 0.5) * 2);
  const done = !running && elapsed >= TOTAL_SECONDS;

  return (
    <section
      aria-label="Sixty seconds of stillness"
      className="rounded-2xl border border-border bg-surface p-8 text-center"
    >
      <Wind className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
      <h2 className="mt-3 font-display text-xl">Sixty seconds of stillness</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Before you go — or whenever it feels heavy — breathe with the circle for one minute.
      </p>

      <div className="mx-auto mt-8 flex h-40 items-center justify-center">
        <div
          aria-hidden="true"
          className="flex h-28 w-28 items-center justify-center rounded-full border border-primary/30 bg-primary/10 motion-reduce:transition-none"
          style={{
            transform: running ? `scale(${scale.toFixed(3)})` : "scale(1)",
            transition: running ? "none" : "transform 600ms ease",
          }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {running ? phase : done ? "Done" : "Ready"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          if (running) {
            setRunning(false);
          } else {
            setElapsed(0);
            setRunning(true);
          }
        }}
        className="mt-4 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
      >
        {running ? "Rest early" : done ? "Once more" : "Begin"}
      </button>
      {running && (
        <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
          {Math.max(0, Math.ceil(TOTAL_SECONDS - elapsed))} seconds remaining
        </p>
      )}
      {done && (
        <p className="mt-3 text-sm text-muted-foreground">That was enough. Well done for pausing.</p>
      )}
    </section>
  );
}

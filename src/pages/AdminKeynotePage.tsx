import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "@/components/admin/AdminGate";
import { SEOHead } from "@/components/SEOHead";
import { ScaledSlide } from "@/components/keynote/ScaledSlide";
import { keynoteSlides } from "@/data/keynote/slides";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Maximize,
  NotebookPen,
  Printer,
  ArrowLeft,
} from "lucide-react";
import "@/components/keynote/keynote.css";

function Deck() {
  const [index, setIndex] = useState(0);
  const [grid, setGrid] = useState(false);
  const [notes, setNotes] = useState(true);

  const total = keynoteSlides.length;
  const slide = keynoteSlides[index];

  const go = useCallback(
    (delta: number) => setIndex((i) => Math.min(total - 1, Math.max(0, i + delta))),
    [total],
  );

  useEffect(() => {
    document.title = `${index + 1}/${total} — ${slide.label} | Exposure Is All You Need`;
  }, [index, total, slide.label]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key.toLowerCase() === "g") {
        setGrid((g) => !g);
      } else if (e.key.toLowerCase() === "n") {
        setNotes((n) => !n);
      } else if (e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (grid) {
    return (
      <div className="kn-root min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">All slides</h1>
            <Button variant="secondary" size="sm" onClick={() => setGrid(false)}>
              Back to deck
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {keynoteSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setIndex(i);
                  setGrid(false);
                }}
                className="text-left rounded-xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition-colors"
              >
                <div className="relative aspect-video bg-black">
                  <ScaledSlide>{s.render()}</ScaledSlide>
                </div>
                <div className="px-4 py-3 text-sm opacity-80">
                  {i + 1}. {s.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="kn-root min-h-screen flex flex-col">
      <div className="kn-no-print flex flex-wrap items-center gap-2 px-4 py-3 border-b border-white/10">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/admin">
            <ArrowLeft className="h-4 w-4 mr-2" /> Admin
          </Link>
        </Button>
        <span className="text-sm opacity-70 mr-auto">Exposure Is All You Need</span>
        <Button variant="secondary" size="sm" onClick={() => setGrid(true)}>
          <Grid3X3 className="h-4 w-4 mr-2" /> Grid
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setNotes((n) => !n)}>
          <NotebookPen className="h-4 w-4 mr-2" /> Notes
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link to="/admin/keynote/print" target="_blank">
            <Printer className="h-4 w-4 mr-2" /> PDF handout
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => document.documentElement.requestFullscreen?.()}
        >
          <Maximize className="h-4 w-4 mr-2" /> Present
        </Button>
      </div>

      <div className="relative flex-1 min-h-[46vh] bg-black">
        <ScaledSlide gutter={16}>{slide.render()}</ScaledSlide>
        <div className="kn-no-print absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-black/70 px-4 py-2 backdrop-blur">
          <button aria-label="Previous slide" onClick={() => go(-1)} disabled={index === 0}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm tabular-nums">
            {index + 1} / {total}
          </span>
          <button aria-label="Next slide" onClick={() => go(1)} disabled={index === total - 1}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {notes && (
        <div className="kn-no-print border-t border-white/10 px-6 py-5 max-h-[34vh] overflow-y-auto">
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed">
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-xs mb-2">Speaker notes</p>
              <p className="opacity-90">{slide.notes}</p>
            </div>
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-xs mb-2">Visual direction</p>
              <p className="opacity-70">{slide.visual}</p>
            </div>
            {slide.activity && (
              <div>
                <p className="text-amber-400 uppercase tracking-widest text-xs mb-2">Activity</p>
                <p className="opacity-90">{slide.activity}</p>
              </div>
            )}
            <p className="opacity-50 text-xs">
              Keyboard: ← → navigate · G grid · N notes · F5 fullscreen
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminKeynotePage() {
  return (
    <>
      <SEOHead title="Keynote — Exposure Is All You Need" description="Private admin keynote." noindex />
      <AdminGate title="Keynote access">
        <Deck />
      </AdminGate>
    </>
  );
}

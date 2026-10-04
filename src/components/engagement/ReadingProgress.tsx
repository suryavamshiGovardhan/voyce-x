import { useEffect, useState } from "react";

/**
 * A hairline reading-progress bar fixed to the top of the viewport.
 * Purely decorative; aria-hidden so it never distracts screen readers.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent">
      <div
        className="h-full bg-primary/70 transition-[width] duration-150 ease-out"
        style={{ width: `${(progress * 100).toFixed(2)}%` }}
      />
    </div>
  );
}

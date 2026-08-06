import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  /** Extra padding around the slide inside its container, in px */
  gutter?: number;
  className?: string;
}

/**
 * Renders a fixed 1920x1080 slide scaled to fit its parent container.
 * Parent must be position:relative with overflow hidden.
 */
export function ScaledSlide({ children, gutter = 0, className = "" }: ScaledSlideProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min((width - gutter * 2) / 1920, (height - gutter * 2) / 1080);
      setScale(s > 0 ? s : 0.01);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [gutter]);

  return (
    <div ref={wrapRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="kn-slide kn-grain"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

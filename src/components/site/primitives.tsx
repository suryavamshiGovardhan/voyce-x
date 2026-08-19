import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Reveal — gentle scroll-in animation (respects reduced motion)       */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className,
  containerClassName,
  tone = "default",
  id,
  as: Tag = "section",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "ink" | "primary";
  id?: string;
  as?: ElementType;
  ariaLabel?: string;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    muted: "bg-surface text-foreground",
    ink: "bg-ink text-ink-foreground",
    primary: "bg-primary/5 text-foreground",
  };
  return (
    <Tag id={id} aria-label={ariaLabel} className={cn("py-20 sm:py-28", tones[tone], className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", containerClassName)}>{children}</div>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary", className)}>
      {children}
    </p>
  );
}

export function StatementHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={cn(
        "font-display text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-[2.9rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", className)}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* StepRail — numbered sequence                                        */
/* ------------------------------------------------------------------ */

export type Step = { number: string; title: string; body: string };

export function StepRail({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <li key={step.number} className="bg-background">
          <Reveal delay={i * 70} className="h-full">
            <div className="flex h-full flex-col gap-3 p-7">
              <span className="font-display text-sm text-primary">{step.number}</span>
              <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Quiet card                                                          */
/* ------------------------------------------------------------------ */

export function QuietCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_hsl(var(--foreground)/0.04)]",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)] motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

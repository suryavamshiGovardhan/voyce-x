import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Optional accent tint key — default "spectrum" */
  variant?: "spectrum" | "ember" | "ocean";
}

/**
 * Maximalist cinematic backdrop for the Invisible Inheritance ecosystem.
 * Layered aurora gradients + drifting orbs + fine grain. Scoped to IIT.
 * Respects prefers-reduced-motion (handled in index.css).
 */
export default function AuroraBackground({ children, variant = "spectrum" }: Props) {
  return (
    <div className={`ii-aurora-root ii-aurora-${variant}`}>
      <div className="ii-aurora-layer ii-aurora-1" aria-hidden />
      <div className="ii-aurora-layer ii-aurora-2" aria-hidden />
      <div className="ii-aurora-layer ii-aurora-3" aria-hidden />
      <div className="ii-aurora-orb ii-orb-a" aria-hidden />
      <div className="ii-aurora-orb ii-orb-b" aria-hidden />
      <div className="ii-aurora-orb ii-orb-c" aria-hidden />
      <div className="ii-aurora-grain" aria-hidden />
      <div className="ii-aurora-vignette" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

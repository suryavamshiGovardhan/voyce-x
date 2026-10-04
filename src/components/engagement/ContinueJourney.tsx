import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface JourneyLink {
  to: string;
  label: string;
  hint: string;
}

interface ContinueJourneyProps {
  links: JourneyLink[];
  heading?: string;
  dark?: boolean;
}

/**
 * A calm "where to go next" strip placed at the end of long reads so the
 * journey never dead-ends.
 */
export default function ContinueJourney({ links, heading = "Continue your journey", dark = false }: ContinueJourneyProps) {
  return (
    <nav aria-label="Continue your journey" className="mt-14">
      <p
        className={`text-xs font-medium uppercase tracking-[0.25em] ${
          dark ? "text-[#2dd4bf]" : "text-muted-foreground"
        }`}
      >
        {heading}
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`group rounded-xl border p-5 transition-colors ${
              dark
                ? "border-border bg-[#13131f] hover:border-[#2dd4bf]/40"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <span
              className={`flex items-center justify-between text-sm font-medium ${
                dark ? "text-[#f9f6f0]" : "text-foreground"
              }`}
            >
              {link.label}
              <ArrowRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                  dark ? "text-[#2dd4bf]" : "text-primary"
                }`}
                aria-hidden="true"
              />
            </span>
            <span className={`mt-2 block text-xs leading-relaxed ${dark ? "text-[#8888a8]" : "text-muted-foreground"}`}>
              {link.hint}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS: { title: string; links: { label: string; to: string; external?: boolean }[] }[] = [
  {
    title: "VOYCE",
    links: [
      { label: "About", to: "/about" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Features", to: "/features" },
      { label: "Safety", to: "/safety" },
    ],
  },
  {
    title: "For people",
    links: [
      { label: "Students", to: "/students" },
      { label: "Teachers", to: "/teachers" },
      { label: "Parents", to: "/parents" },
      { label: "Schools", to: "/schools" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", to: "/resources" },
      { label: "The Unheard Mind", to: "/series" },
      { label: "Library", to: "/library" },
      { label: "Blog", to: "/blog" },
      { label: "Stories", to: "/stories" },
      { label: "Tools", to: "/tools" },
      { label: "VOYCE Path", to: "/path" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Stress", to: "/stress" },
      { label: "Trauma", to: "/trauma" },
      { label: "ADHD", to: "/adhd" },
      { label: "Brain & neuroscience", to: "/brain" },
      { label: "ACEs impact", to: "/aces" },
      { label: "DSM-5 guide", to: "/dsm5" },
      { label: "ICD-9 hub", to: "/icd9" },
      { label: "Psychology theories", to: "/theories" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Start here", to: "/start-here" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms of use", to: "/terms-of-use" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner with VOYCE", to: "/partners" },
      { label: "VOYCE for Schools", to: "/schools" },
      { label: "AI4Schools", to: "/ai4schools" },
      { label: "Workbook", to: "/workbook" },
      { label: "Invisible Inheritance", to: "/invisible-inheritance" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link to="/" className="font-display text-xl tracking-tight">
              VOYCE
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A calm place to notice what you feel, understand it, and find the next small step.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/suryavamshiiii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VOYCE on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:voycexx@gmail.com"
                aria-label="Email VOYCE"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {col.title}
                </h2>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            VOYCE is a reflective, educational wellbeing space. It does not provide therapy, diagnosis, or emergency
            support. If you or someone else is in immediate danger, contact local emergency services or a crisis
            helpline.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} VOYCE-X. Founded by Suryavamshi Govardhan.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link to="/terms-of-use" className="hover:text-primary">
                Terms
              </Link>
              <Link to="/safety" className="hover:text-primary">
                Safety
              </Link>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

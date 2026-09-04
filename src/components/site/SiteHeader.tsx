import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

type NavItem = { label: string; to: string; description?: string };

const PRIMARY: { label: string; to?: string; items?: NavItem[]; wide?: boolean }[] = [
  { label: "How it works", to: "/how-it-works" },
  {
    label: "For people",
    items: [
      { label: "Students", to: "/students", description: "Understand yourself, one small step at a time" },
      { label: "Teachers", to: "/teachers", description: "Notice patterns, start better conversations" },
      { label: "Parents", to: "/parents", description: "Understand the signals behind the silence" },
      { label: "Schools", to: "/schools", description: "Build a culture where wellbeing is noticed" },
      { label: "AI4Schools", to: "/ai4schools", description: "Programs for future-ready classrooms" },
    ],
  },
  { label: "Features", to: "/features" },
  {
    label: "Learn",
    wide: true,
    items: [
      { label: "Stress", to: "/stress", description: "Understanding stress responses" },
      { label: "Trauma", to: "/trauma", description: "Healing and recovery" },
      { label: "ADHD", to: "/adhd", description: "Attention and focus" },
      { label: "Brain", to: "/brain", description: "How your brain works" },
      { label: "Neuroscience", to: "/neuroscience", description: "Research explained simply" },
      { label: "Mind, heart, gut", to: "/mind-heart-gut", description: "The whole-body connection" },
      { label: "ACEs impact", to: "/aces", description: "Childhood experiences" },
      { label: "CDS research", to: "/cds", description: "Cognitive disengagement" },
      { label: "Psychology theories", to: "/theories", description: "Foundational frameworks" },
      { label: "DSM-5 guide", to: "/dsm5", description: "Reference material" },
      { label: "DSM-5 Academy", to: "/dsm5-academy", description: "Study modules" },
      { label: "ICD-9 hub", to: "/icd9", description: "Classification reference" },
      { label: "Diagnostics library", to: "/diagnostics", description: "Cross-referenced knowledge" },
      { label: "Quizzes", to: "/quizzes", description: "Check your understanding" },
    ],
  },
  {
    label: "Resources",
    wide: true,
    items: [
      { label: "Guides & articles", to: "/resources", description: "Editorial library on wellbeing" },
      { label: "The Unheard Mind", to: "/series", description: "Eight-part narrative series" },
      { label: "Library", to: "/library", description: "Long-form deep dives" },
      { label: "Blog", to: "/blog", description: "Essays and reflections" },
      { label: "Stories", to: "/stories", description: "Real experiences, shared with consent" },
      { label: "Tools", to: "/tools", description: "Practices you can try today" },
      { label: "VOYCE Path", to: "/path", description: "A guided sequence" },
      { label: "Workbook", to: "/workbook", description: "Write it out" },
      { label: "Journal", to: "/journal", description: "Your private entries" },
      { label: "Newsletters", to: "/newsletters", description: "Occasional letters" },
      { label: "Thoughts", to: "/thoughts", description: "Short reflections" },
      { label: "Invisible Inheritance", to: "/invisible-inheritance", description: "For couples" },
    ],
  },
  {
    label: "Trust",
    items: [
      { label: "Safety", to: "/safety", description: "What VOYCE is and is not" },
      { label: "Privacy", to: "/privacy", description: "What we collect and why" },
      { label: "FAQ", to: "/faq", description: "Real questions, plain answers" },
      { label: "Partners", to: "/partners", description: "Work with VOYCE" },
      { label: "Contact", to: "/contact", description: "Reach the team" },
    ],
  },
  { label: "About", to: "/about" },
];


export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2" aria-label="VOYCE home">
          <span className="font-display text-xl tracking-tight">VOYCE</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">wellbeing</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {PRIMARY.map((entry) => (
            <li key={entry.label} className="relative">
              {entry.to ? (
                <NavLink
                  to={entry.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "text-foreground",
                    )
                  }
                >
                  {entry.label}
                </NavLink>
              ) : (
                <div
                  onMouseEnter={() => setOpenMenu(entry.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === entry.label}
                    onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {entry.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {openMenu === entry.label && entry.items && (
                    <div className="absolute left-0 top-full w-72 pt-2">
                      <ul className="rounded-2xl border border-border bg-popover p-2 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.45)]">
                        {entry.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                            >
                              <span className="block text-sm font-medium">{item.label}</span>
                              {item.description && (
                                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <Button asChild size="sm" className="rounded-full px-5">
              <Link to="/dashboard">My VOYCE</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="rounded-full">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="rounded-full px-5">
                <Link to="/signup">Get started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 pb-8 pt-4">
            <ul className="space-y-1">
              {PRIMARY.map((entry) => (
                <li key={entry.label}>
                  {entry.to ? (
                    <Link to={entry.to} className="block rounded-xl px-3 py-3 text-base font-medium">
                      {entry.label}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <p className="px-3 pb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {entry.label}
                      </p>
                      <ul>
                        {entry.items?.map((item) => (
                          <li key={item.to}>
                            <Link to={item.to} className="block rounded-xl px-3 py-2.5 text-base">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              {user ? (
                <Button asChild className="h-12 rounded-full">
                  <Link to="/dashboard">My VOYCE</Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" className="h-12 rounded-full">
                    <Link to="/login">Sign in</Link>
                  </Button>
                  <Button asChild className="h-12 rounded-full">
                    <Link to="/signup">Get started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "voyce_invisible_inheritance_seen_v1";

export default function InvisibleInheritancePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
  };

  if (!open) return null;

  return (
    <>
      {/* Bullet notification (top-right) */}
      <div
        role="dialog"
        aria-labelledby="invisible-inheritance-title"
        className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 max-w-sm animate-fade-in"
      >
        <div className="relative bg-background border border-border shadow-2xl rounded-lg p-5 backdrop-blur-sm">
          <button
            onClick={dismiss}
            aria-label="Dismiss notification"
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <div className="pr-4">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-1">NEW · A VOYCE INITIATIVE</p>
              <h3 id="invisible-inheritance-title" className="text-base font-serif text-foreground mb-1.5 leading-snug">
                The Invisible Inheritance
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Society trains us for everything — except marriage, parenting, and emotional responsibility.
                A new readiness ecosystem from VOYCE.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  to="/invisible-inheritance"
                  onClick={dismiss}
                  className="text-xs font-medium text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  Read the vision
                </Link>
                <button
                  onClick={dismiss}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

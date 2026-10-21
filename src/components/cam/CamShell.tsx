import { ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SEOHead from "@/components/SEOHead";
import { cam } from "@/data/cam";
import "./cam.css";

interface Props { title: string; description: string; canonical: string; children: ReactNode }

export default function CamShell({ title, description, canonical, children }: Props) {
  return (
    <>
      <SEOHead title={title} description={description} canonicalUrl={`https://voyce-x.lovable.app${canonical}`} />
      <SiteHeader />
      <main id="main-content" className="cam min-h-screen">
        <div className="border-b" style={{ borderColor: "var(--cam-line)" }}>
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
            <Link to="/cam" className="cam-kicker">{cam.meta.brand}</Link>
            <span className="cam-mono hidden text-[11px] uppercase tracking-[0.2em] cam-dim sm:inline">{cam.meta.tagline}</span>
          </div>
        </div>
        {children}
        <section className="border-t" style={{ borderColor: "var(--cam-line)" }}>
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="cam-muted">{cam.meta.fullName}. {cam.meta.tagline}.</p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${cam.meta.email}`} className="cam-muted hover:text-[color:var(--cam-fg)]">{cam.meta.email}</a>
              <a href={cam.meta.instagram.url} target="_blank" rel="noopener noreferrer" className="cam-muted hover:text-[color:var(--cam-fg)]">Instagram {cam.meta.instagram.handle}</a>
              <a href={cam.meta.x.url} target="_blank" rel="noopener noreferrer" className="cam-muted hover:text-[color:var(--cam-fg)]">X {cam.meta.x.handle}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/** Abstract cut-paper cover, deterministic per slug. Decorative only. */
export function CamCover({ slug, className = "" }: { slug: string; className?: string }) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const r = (n: number) => ((h >> n) & 15) / 15;
  return (
    <div className={`cam-cover ${className}`} aria-hidden="true">
      <div className="slip s" style={{ left: `${8 + r(1) * 20}%`, top: "18%", width: "38%", height: "52%", transform: `rotate(${-4 + r(3) * 3}deg)` }} />
      <div className="slip" style={{ left: `${38 + r(5) * 18}%`, top: `${22 + r(7) * 14}%`, width: "26%", height: "38%", transform: `rotate(${2 + r(9) * 5}deg)` }} />
      <div className="slip k" style={{ left: `${20 + r(11) * 40}%`, bottom: "14%", width: "7%", aspectRatio: "1", borderRadius: "999px" }} />
    </div>
  );
}

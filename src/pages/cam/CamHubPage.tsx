import { Link, useSearchParams } from "react-router-dom";
import CamShell, { CamCover } from "@/components/cam/CamShell";
import { cam } from "@/data/cam";

const articles = [...cam.articles].sort((a, b) => a.order - b.order);

export default function CamHubPage() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") ?? "All";
  const list = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <CamShell
      title={`${cam.meta.fullName}: ${cam.meta.tagline}`}
      description="CAM is VOYCE's career-exposure reading series for Classes 8–12: thirteen articles on the exposure gap, real jobs, six lenses for choosing and thirty days of looking."
      canonical="/cam"
    >
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
        <p className="cam-kicker">{cam.meta.fullName}</p>
        <h1 className="cam-serif mt-4 max-w-3xl text-[40px] leading-[1.05] sm:text-6xl">{cam.meta.tagline}</h1>
        <p className="cam-muted mt-5 max-w-2xl text-lg leading-relaxed">
          Thirteen pieces to read slowly. Start at the beginning, or pick a lens below.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...cam.categories].map((c) => (
            <button
              key={c}
              type="button"
              className="cam-chip"
              aria-pressed={active === c}
              onClick={() => (c === "All" ? setParams({}) : setParams({ category: c }))}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <Link key={a.slug} to={`/cam/articles/${a.slug}`} className="cam-card group flex flex-col overflow-hidden p-3">
            <CamCover slug={a.slug} />
            <div className="flex flex-1 flex-col p-3">
              <div className="flex items-center justify-between">
                <span className="cam-kicker">{String(a.order).padStart(2, "0")} · {a.category}</span>
                <span className="cam-mono text-[11px] cam-dim">{a.readingMinutes} min</span>
              </div>
              <h2 className="cam-serif mt-3 text-2xl leading-tight">{a.title}</h2>
              <p className="cam-muted mt-2 flex-1 text-sm leading-relaxed">{a.dek}</p>
            </div>
          </Link>
        ))}
      </section>
    </CamShell>
  );
}

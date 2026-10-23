import { Children, isValidElement, ReactNode, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CamShell, { CamCover } from "@/components/cam/CamShell";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import CamVisual from "@/components/cam/CamVisual";
import { cam } from "@/data/cam";

const articles = [...cam.articles].sort((a, b) => a.order - b.order);

function textOf(node: ReactNode): string {
  return Children.toArray(node)
    .map((c) => (typeof c === "string" || typeof c === "number" ? String(c) : isValidElement(c) ? textOf((c.props as { children?: ReactNode }).children) : ""))
    .join("");
}
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const mdComponents = {
  h2: ({ children }: { children?: ReactNode }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
  h3: ({ children }: { children?: ReactNode }) => <h3 id={slugify(textOf(children))}>{children}</h3>,
  a: ({ href = "", children }: { href?: string; children?: ReactNode }) =>
    href.startsWith("/") ? <Link to={href}>{children}</Link> : <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
};

export default function CamArticlePage() {
  const { slug } = useParams();
  const idx = articles.findIndex((a) => a.slug === slug);
  const article = articles[idx];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <CamShell title="Article not found | CAM" description="This CAM article does not exist." canonical="/cam">
        <section className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="cam-kicker">404</p>
          <h1 className="cam-serif mt-4 text-4xl">This page isn't on the map yet.</h1>
          <Link to="/cam" className="cam-btn mt-8">Back to all CAM articles</Link>
        </section>
      </CamShell>
    );
  }

  const prev = articles[idx - 1];
  const next = articles[idx + 1];

  return (
    <CamShell title={`${article.title} | CAM`} description={article.dek} canonical={`/cam/articles/${article.slug}`}>
      <ReadingProgress />
      <article className="mx-auto max-w-3xl px-5 pb-16 pt-12 sm:pt-16">
        <Link to={`/cam?category=${encodeURIComponent(article.category)}`} className="cam-kicker">{article.category}</Link>
        <h1 className="cam-serif mt-4 text-[38px] leading-[1.05] sm:text-6xl">{article.title}</h1>
        <p className="cam-muted mt-5 text-lg leading-relaxed">{article.dek}</p>
        <p className="cam-mono mt-4 text-[11px] uppercase tracking-[0.2em] cam-dim">
          {article.readingMinutes} min read · {article.wordCount.toLocaleString("en-IN")} words
        </p>
        <figure className="mt-10">
          <CamCover slug={article.slug} />
          <figcaption className="sr-only">{article.cover.alt}</figcaption>
        </figure>

        <div className="cam-prose mt-12">
          {(() => {
            const parts = article.body.split(/\n(?=## )/);
            const visuals: { id: string; kind: string; alt: string }[] = [...(article.inlineVisuals ?? [])];
            const slots = new Map<number, { id: string; kind: string; alt: string }[]>();
            visuals.forEach((v, k) => {
              const at = Math.min(parts.length - 1, Math.max(1, Math.round(((k + 1) * (parts.length - 1)) / (visuals.length + 1))));
              slots.set(at, [...(slots.get(at) ?? []), v]);
            });
            return parts.map((part, i) => (
              <div key={i}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>{part}</ReactMarkdown>
                {(slots.get(i) ?? []).map((v) => <CamVisual key={v.id} visual={v} />)}
              </div>
            ));
          })()}
        </div>
      </article>

      <nav aria-label="More CAM articles" className="mx-auto grid max-w-3xl gap-4 px-5 pb-20 sm:grid-cols-2">
        {prev ? (
          <Link to={`/cam/articles/${prev.slug}`} className="cam-card p-5">
            <span className="cam-kicker inline-flex items-center gap-2"><ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous</span>
            <p className="cam-serif mt-2 text-xl leading-tight">{prev.title}</p>
          </Link>
        ) : <Link to="/cam" className="cam-card p-5"><span className="cam-kicker">All articles</span><p className="cam-serif mt-2 text-xl">Back to CAM</p></Link>}
        {next ? (
          <Link to={`/cam/articles/${next.slug}`} className="cam-card p-5 sm:text-right">
            <span className="cam-kicker inline-flex items-center gap-2">Next <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
            <p className="cam-serif mt-2 text-xl leading-tight">{next.title}</p>
          </Link>
        ) : <Link to="/cam" className="cam-card p-5 sm:text-right"><span className="cam-kicker">All articles</span><p className="cam-serif mt-2 text-xl">Back to CAM</p></Link>}
      </nav>
    </CamShell>
  );
}

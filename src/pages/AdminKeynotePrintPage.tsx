import { AdminGate } from "@/components/admin/AdminGate";
import { SEOHead } from "@/components/SEOHead";
import { keynoteSlides } from "@/data/keynote/slides";
import "@/components/keynote/keynote.css";

function PrintDeck() {
  return (
    <div className="kn-root">
      <div className="kn-no-print p-6 text-sm">
        Press <strong>Ctrl/Cmd + P</strong> and choose “Save as PDF”, landscape, no margins.
      </div>
      {keynoteSlides.map((s) => (
        <div key={s.id} className="kn-print-slide kn-slide kn-grain" style={{ margin: "0 auto" }}>
          {s.render()}
        </div>
      ))}
    </div>
  );
}

export default function AdminKeynotePrintPage() {
  return (
    <>
      <SEOHead title="Keynote handout" description="Printable keynote handout." noindex />
      <AdminGate title="Keynote access">
        <PrintDeck />
      </AdminGate>
    </>
  );
}

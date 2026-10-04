import { useState } from "react";
import { Link } from "react-router-dom";
import { Feather } from "lucide-react";

interface ReflectPauseProps {
  prompt?: string;
  dark?: boolean;
}

/**
 * A gentle mid-article pause: one breath, one optional line of reflection.
 * Signed-in users can carry the thought into their journal; everyone else
 * can simply sit with it. Nothing is required, nothing blocks reading.
 */
export default function ReflectPause({
  prompt = "Take a breath. What in these words stayed with you?",
  dark = false,
}: ReflectPauseProps) {
  const [note, setNote] = useState("");
  const [rested, setRested] = useState(false);

  return (
    <aside
      className={`my-12 rounded-2xl border p-7 text-center ${
        dark
          ? "border-[#2dd4bf]/20 bg-gradient-to-br from-[#2dd4bf]/5 to-transparent"
          : "border-border bg-surface"
      }`}
    >
      <Feather className={`mx-auto h-5 w-5 ${dark ? "text-[#2dd4bf]" : "text-primary"}`} aria-hidden="true" />
      <p className={`mt-4 font-display text-lg italic leading-relaxed ${dark ? "text-[#f9f6f0]" : "text-foreground"}`}>
        {prompt}
      </p>

      {!rested ? (
        <div className="mx-auto mt-5 max-w-md">
          <label htmlFor="reflect-note" className="sr-only">
            A one-line reflection (optional)
          </label>
          <textarea
            id="reflect-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="One line, only if you wish…"
            className={`w-full resize-none rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 ${
              dark ? "border-border text-[#f9f6f0] placeholder:text-[#8888a8]" : "border-border text-foreground placeholder:text-muted-foreground"
            }`}
          />
          <div className="mt-3 flex items-center justify-center gap-3 text-sm">
            {note.trim() && (
              <Link
                to="/journal"
                state={{ prefill: note.trim() }}
                className={`rounded-full px-4 py-2 font-medium transition-colors ${
                  dark ? "bg-[#2dd4bf]/15 text-[#2dd4bf] hover:bg-[#2dd4bf]/25" : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Keep this in my journal
              </Link>
            )}
            <button
              type="button"
              onClick={() => setRested(true)}
              className={`rounded-full px-4 py-2 transition-colors ${
                dark ? "text-[#8888a8] hover:text-[#2dd4bf]" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {note.trim() ? "Let it go" : "Continue reading"}
            </button>
          </div>
        </div>
      ) : (
        <p className={`mt-4 text-sm ${dark ? "text-[#8888a8]" : "text-muted-foreground"}`}>
          Good. Carry that with you as you read on.
        </p>
      )}
    </aside>
  );
}

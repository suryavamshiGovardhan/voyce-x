import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  code: string;
  partnerALink: string;
  partnerBLink: string;
  reportLink: string;
}

export default function SessionCodeCard({ code, partnerALink, partnerBLink, reportLink }: Props) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    }).catch(() => { /* ignore */ });
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="border border-border rounded-lg p-6 sm:p-8 bg-card/30 backdrop-blur-sm space-y-6">
      <div className="text-center">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground mb-3">YOUR SESSION CODE</p>
        <p className="text-4xl sm:text-5xl font-mono tracking-[0.5em] text-foreground select-all">
          {code}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <LinkRow
          label="Partner A — your link"
          url={`${origin}${partnerALink}`}
          onCopy={() => copy(`${origin}${partnerALink}`, "a")}
          copied={copied === "a"}
        />
        <LinkRow
          label="Partner B — their link"
          url={`${origin}${partnerBLink}`}
          onCopy={() => copy(`${origin}${partnerBLink}`, "b")}
          copied={copied === "b"}
        />
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-3">
          When both of you finish, the shared reflection opens here:
        </p>
        <LinkRow
          label="Shared reflection (unlocks when both complete)"
          url={`${origin}${reportLink}`}
          onCopy={() => copy(`${origin}${reportLink}`, "r")}
          copied={copied === "r"}
        />
      </div>
    </div>
  );
}

function LinkRow({
  label, url, onCopy, copied,
}: { label: string; url: string; onCopy: () => void; copied: boolean }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 uppercase">{label}</p>
      <div className="flex items-center gap-2">
        <code className="flex-1 text-xs bg-muted/40 border border-border rounded px-3 py-2 truncate">
          {url}
        </code>
        <Button size="sm" variant="outline" onClick={onCopy} aria-label={`Copy ${label}`}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}

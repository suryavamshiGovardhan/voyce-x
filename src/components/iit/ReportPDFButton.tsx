import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateReportPdf } from "@/lib/iit/generatePdf";
import { toast } from "sonner";

interface Props {
  targetRef: React.RefObject<HTMLElement>;
  sessionCode: string;
  disabled?: boolean;
}

export default function ReportPDFButton({ targetRef, sessionCode, disabled }: Props) {
  const [working, setWorking] = useState(false);

  const handle = async () => {
    if (!targetRef.current) return;
    setWorking(true);
    try {
      await generateReportPdf(targetRef.current, sessionCode);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't generate the PDF. Try again.");
    } finally {
      setWorking(false);
    }
  };

  return (
    <Button onClick={handle} disabled={disabled || working} className="ii-pill" variant="outline" size="sm">
      {working ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
      <span>{working ? "Composing PDF…" : "Download PDF"}</span>
    </Button>
  );
}

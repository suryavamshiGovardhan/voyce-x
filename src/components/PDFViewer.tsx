import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

interface PDFViewerProps {
  url: string;
  title?: string;
  height?: string;
}

export function PDFViewer({ url, title = 'Document', height = '600px' }: PDFViewerProps) {
  const [error, setError] = useState(false);

  const handleDownload = () => {
    window.open(url, '_blank');
  };

  if (error) {
    return (
      <div className="w-full p-8 bg-muted/50 rounded-lg border border-border text-center">
        <p className="text-muted-foreground mb-4">Unable to display PDF in browser</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={handleDownload} variant="outline">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden border border-border">
      <div className="bg-muted p-2 flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={handleDownload}>
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" onClick={handleDownload}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <iframe
        src={`${url}#view=FitH`}
        title={title}
        style={{ width: '100%', height }}
        className="border-0"
        onError={() => setError(true)}
      />
    </div>
  );
}

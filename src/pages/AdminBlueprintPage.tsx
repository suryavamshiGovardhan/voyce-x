import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, Share2, ExternalLink, Pencil, Copy } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const STORAGE_KEY = "voyce_admin_blueprint_passkey";

export default function AdminBlueprintPage() {
  const [passkey, setPasskey] = useState("");
  const [urls, setUrls] = useState<{ embed_url: string; view_url: string; edit_url: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPasskey(stored);
      verify(stored, true);
    }
  }, []);

  async function verify(key: string, silent = false) {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("admin-blueprint", {
      body: { action: "verify", passkey: key },
    });
    setLoading(false);
    if (error || !data?.ok) {
      if (!silent) toast.error("Invalid passkey");
      sessionStorage.removeItem(STORAGE_KEY);
      setUrls(null);
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, key);
    setUrls({ embed_url: data.embed_url, view_url: data.view_url, edit_url: data.edit_url });
    if (!silent) toast.success("Access granted");
  }

  async function sendPasskeyEmail() {
    const { error } = await supabase.functions.invoke("admin-blueprint", {
      body: { action: "send_passkey" },
    });
    if (error) toast.error("Could not send passkey");
    else toast.success("Passkey emailed to 4igroupss@gmail.com");
  }

  function share() {
    if (!urls) return;
    const shareUrl = urls.view_url;
    if (navigator.share) {
      navigator.share({ title: "VOYCE-X Neural Blueprint", url: shareUrl }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Share link copied");
    }
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEY);
    setUrls(null);
    setPasskey("");
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Admin — Neural Blueprint | VOYCE"
        description="Private admin access to the VOYCE-X Neural Blueprint."
        noindex
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-semibold">Neural Blueprint — Admin</h1>
        </div>

        {!urls ? (
          <Card className="p-6 max-w-md">
            <p className="text-sm text-muted-foreground mb-4">
              Enter the admin passkey to view, edit, or share the Neural Blueprint.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                verify(passkey);
              }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="passkey">Passkey</Label>
                <Input
                  id="passkey"
                  type="password"
                  autoComplete="off"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Enter admin passkey"
                />
              </div>
              <Button type="submit" disabled={loading || !passkey} className="w-full">
                {loading ? "Verifying..." : "Unlock"}
              </Button>
              <button
                type="button"
                onClick={sendPasskeyEmail}
                className="text-xs text-muted-foreground hover:text-primary underline w-full text-center"
              >
                Email the passkey to 4igroupss@gmail.com
              </button>
            </form>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={share}>
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={urls.edit_url} target="_blank" rel="noopener">
                  <Pencil className="h-4 w-4 mr-2" /> Edit in Canva
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={urls.view_url} target="_blank" rel="noopener">
                  <ExternalLink className="h-4 w-4 mr-2" /> Open
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(urls.view_url);
                  toast.success("Link copied");
                }}
              >
                <Copy className="h-4 w-4 mr-2" /> Copy link
              </Button>
              <Button variant="ghost" size="sm" onClick={logout} className="ml-auto">
                Lock
              </Button>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <iframe
                loading="lazy"
                title="VOYCE-X Neural Blueprint"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                }}
                src={urls.embed_url}
                allowFullScreen
                allow="fullscreen"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              VOYCE-X_Neural_Blueprint.pptx — by S Suryavamshi
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

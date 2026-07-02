import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const CANVA_EMBED_URL = "https://www.canva.com/design/DAHOPRcSnco/nEL8G9piivf4W7u6usyp9Q/view?embed";
const CANVA_VIEW_URL = "https://www.canva.com/design/DAHOPRcSnco/nEL8G9piivf4W7u6usyp9Q/view?utm_content=DAHOPRcSnco&utm_campaign=designshare&utm_medium=embeds&utm_source=link";
const CANVA_EDIT_URL = "https://www.canva.com/design/DAHOPRcSnco/nEL8G9piivf4W7u6usyp9Q/edit";
const ADMIN_EMAIL = "4igroupss@gmail.com";

function b64url(s: string) {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sendPasskeyEmail(passkey: string) {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const gmailKey = Deno.env.get("GOOGLE_MAIL_API_KEY");
  if (!lovableKey || !gmailKey) throw new Error("Gmail connector not configured");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#0f172a;color:#e2e8f0;border-radius:12px;">
      <h2 style="color:#fbbf24;margin:0 0 12px;">VOYCE Admin — Neural Blueprint Passkey</h2>
      <p>Use this passkey to unlock the private Neural Blueprint page on your website.</p>
      <div style="font-size:22px;letter-spacing:2px;font-family:ui-monospace,monospace;background:#1e293b;padding:16px;border-radius:8px;text-align:center;margin:16px 0;color:#fbbf24;">${passkey}</div>
      <p style="color:#94a3b8;font-size:13px;">Keep this private. Anyone with this passkey can view, edit link, or share the blueprint.</p>
      <p style="color:#94a3b8;font-size:13px;">Access URL: <a href="https://voyce-x.lovable.app/admin/blueprint" style="color:#60a5fa;">/admin/blueprint</a></p>
    </div>`;

  const raw = [
    `To: ${ADMIN_EMAIL}`,
    `Subject: VOYCE Admin Blueprint Passkey`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset="UTF-8"',
    '',
    html,
  ].join('\r\n');

  const res = await fetch("https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": gmailKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw: b64url(raw) }),
  });
  if (!res.ok) throw new Error(`Gmail send failed: ${res.status} ${await res.text()}`);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const passkey = Deno.env.get("ADMIN_BLUEPRINT_PASSKEY") ?? "";
    const { action, passkey: submitted } = await req.json().catch(() => ({}));

    if (action === "send_passkey") {
      await sendPasskeyEmail(passkey);
      return new Response(JSON.stringify({ ok: true, sent_to: ADMIN_EMAIL }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "verify") {
      const ok = typeof submitted === "string" && submitted.length > 0 && submitted === passkey;
      if (!ok) {
        return new Response(JSON.stringify({ ok: false, error: "Invalid passkey" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({
        ok: true,
        embed_url: CANVA_EMBED_URL,
        view_url: CANVA_VIEW_URL,
        edit_url: CANVA_EDIT_URL,
      }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String((e as Error).message ?? e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_mail/gmail/v1';
const NOTIFY_TO = '4igroupss@gmail.com, voycexx@gmail.com';

function b64url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function buildRaw(to: string, subject: string, html: string, text: string): string {
  const boundary = `b_${Math.random().toString(36).slice(2)}`;
  const msg = [
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    text,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    '',
    html,
    '',
    `--${boundary}--`,
    '',
  ].join('\r\n');
  return b64url(msg);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const lovableKey = Deno.env.get('LOVABLE_API_KEY');
    const gmailKey = Deno.env.get('GOOGLE_MAIL_API_KEY');
    if (!lovableKey || !gmailKey) {
      return new Response(JSON.stringify({ error: 'Gmail connector not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? '').trim().slice(0, 120);
    const email = String(body?.email ?? '').trim().slice(0, 200);
    const story = String(body?.story ?? '').trim().slice(0, 20000);
    const link = String(body?.link ?? '').trim().slice(0, 500);

    if (!name || !email || story.length < 20) {
      return new Response(JSON.stringify({ error: 'invalid_input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'invalid_email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const esc = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const subject = `[VOYCE Workshop] New story from ${name}`;
    const html = `
      <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#111">
        <h2 style="margin:0 0 16px;font-weight:600">New VOYCE Workshop story</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(name)}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${esc(email)}</p>
        ${link ? `<p style="margin:0 0 4px"><strong>Link:</strong> ${esc(link)}</p>` : ''}
        <p style="margin:0 0 16px"><strong>Time (UTC):</strong> ${new Date().toISOString()}</p>
        <div style="white-space:pre-wrap;border-top:1px solid #eee;padding-top:16px;font-size:14px;line-height:1.6">${esc(story)}</div>
      </div>`;
    const text = `Name: ${name}\nEmail: ${email}\nLink: ${link || '—'}\n\n${story}`;

    const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        'X-Connection-Api-Key': gmailKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: buildRaw(NOTIFY_TO, subject, html, text) }),
    });

    const respText = await res.text();
    if (!res.ok) {
      console.error('Gmail send failed', res.status, respText);
      return new Response(
        JSON.stringify({ error: 'gmail_send_failed', status: res.status, detail: respText }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

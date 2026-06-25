import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_mail/gmail/v1';
const NOTIFY_TO = '4igroupss@gmail.com';

function b64url(str: string): string {
  // UTF-8 safe base64url
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
    const {
      event = 'event',
      sessionCode = '',
      partner = '',
      name = '',
      email = '',
      reportUrl = '',
      answersCount,
    } = body ?? {};

    const safe = (s: string) => String(s).replace(/[<>]/g, '');
    const subject = `[Invisible Inheritance] ${event} — ${safe(sessionCode)} (Partner ${safe(String(partner)).toUpperCase()})`;

    const rows = [
      ['Event', event],
      ['Session code', sessionCode],
      ['Partner', String(partner).toUpperCase()],
      ['Name', name || '—'],
      ['Email', email || '—'],
      ['Answers', answersCount ?? '—'],
      ['Report', reportUrl || '—'],
      ['Time (UTC)', new Date().toISOString()],
    ];

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
        <h2 style="margin:0 0 16px;font-weight:600">Invisible Inheritance — ${safe(event)}</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 10px;color:#666;border-bottom:1px solid #eee;width:140px">${k}</td><td style="padding:6px 10px;border-bottom:1px solid #eee">${safe(String(v))}</td></tr>`
            )
            .join('')}
        </table>
      </div>`;
    const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

    const raw = buildRaw(NOTIFY_TO, subject, html, text);

    const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        'X-Connection-Api-Key': gmailKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw }),
    });

    const respText = await res.text();
    if (!res.ok) {
      console.error('Gmail send failed', res.status, respText);
      return new Response(JSON.stringify({ error: 'gmail_send_failed', status: res.status, detail: respText }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
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

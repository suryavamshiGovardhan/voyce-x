import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'
import DOMPurify from 'https://esm.sh/isomorphic-dompurify@2.18.0'

// DOMPurify configuration for safe HTML
const DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'a', 'code', 'pre', 'img', 'hr',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'span'
  ],
  ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'class'],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
}

const MAX_CONTENT_LENGTH = 100000 // 100KB max content

Deno.serve(async (req) => {
  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    // Verify user
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    const { content, summary, footer } = await req.json()

    // Validate content length
    if (content && content.length > MAX_CONTENT_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Content exceeds maximum length of ${MAX_CONTENT_LENGTH} characters` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Sanitize HTML content
    const sanitizedContent = content ? DOMPurify.sanitize(content, DOMPURIFY_CONFIG) : content
    const sanitizedSummary = summary ? DOMPurify.sanitize(summary, DOMPURIFY_CONFIG) : summary
    const sanitizedFooter = footer ? DOMPurify.sanitize(footer, DOMPURIFY_CONFIG) : footer

    return new Response(
      JSON.stringify({
        content: sanitizedContent,
        summary: sanitizedSummary,
        footer: sanitizedFooter
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Sanitization error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to sanitize content' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

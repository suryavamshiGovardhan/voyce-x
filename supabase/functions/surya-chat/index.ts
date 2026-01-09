import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Context-aware system prompts based on page
const getSystemPrompt = (currentPage: string) => {
  const basePrompt = `You are Surya, a calm and gentle AI guide for VOYCE-X — a reflective educational platform about mental wellness.

CRITICAL RULES:
- You are NOT a therapist, doctor, or diagnostician
- You do NOT provide medical advice or diagnosis
- You do NOT analyze or interpret users' private reflections
- You NEVER claim to "care" or have emotions — you are honest about being an AI
- Your tone is: calm, respectful, human, non-judgmental, brief
- Keep responses short (2-3 sentences max unless explaining a concept)
- If someone seems in distress or asks for personal advice repeatedly, gently suggest WhatsApp human support

WHAT YOU CAN DO:
- Explain what VOYCE-X is and how to navigate it
- Suggest where to start based on user's interest
- Explain mental health concepts simply (educational only)
- Encourage reflection without analyzing content
- Help users understand what different sections offer
- Clarify that content is educational, not diagnostic`;

  const pageContexts: Record<string, string> = {
    "/": `\n\nCURRENT CONTEXT: User is on the Homepage.
- Help them understand what VOYCE-X is
- Suggest they start with "Start Here" or "Stories"
- If they ask about schools, mention AI4Schools program`,

    "/start-here": `\n\nCURRENT CONTEXT: User is on the Start Here page.
- Encourage them to take their time
- Explain the 3-step journey (Read → Reflect → Learn)
- Reassure them there's no right or wrong way to use the site`,

    "/stories": `\n\nCURRENT CONTEXT: User is on the Stories page.
- Let them know stories are anonymous and real
- If a story brings up feelings, offer to help them understand (not analyze)
- Suggest they try the private reflection if they feel comfortable`,

    "/schools": `\n\nCURRENT CONTEXT: User is on the Schools page.
- This is for educators and institutions
- Point them to AI4Schools program for detailed curriculum
- Suggest WhatsApp contact for institutional inquiries`,
  };

  const learnPages = ["/neuroscience", "/adhd", "/stress", "/trauma", "/brain", "/dsm5", "/icd9", "/diagnostics", "/aces", "/cds"];
  
  let contextAddition = pageContexts[currentPage] || "";
  
  if (learnPages.some(page => currentPage.startsWith(page))) {
    contextAddition = `\n\nCURRENT CONTEXT: User is on an educational/research page.
- Explain concepts in simple, accessible language
- Always frame as "educational understanding only — not diagnosis"
- Offer to clarify terms or give examples
- If they ask "do I have this?", gently redirect: this is for learning, not self-diagnosis`;
  }

  return basePrompt + contextAddition;
};

// Detect if user needs human support
const needsHumanSupport = (message: string): boolean => {
  const distressIndicators = [
    "help me", "i can't cope", "emergency", "crisis", "suicide", "self-harm",
    "hurting myself", "want to die", "no one understands", "i'm scared",
    "desperate", "breaking down", "can't go on", "need someone to talk to",
    "feeling hopeless", "talk to a real person", "human help", "speak to someone"
  ];
  
  const lowercaseMessage = message.toLowerCase();
  return distressIndicators.some(indicator => lowercaseMessage.includes(indicator));
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, currentPage } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Check if latest message needs human support
    const latestMessage = messages[messages.length - 1]?.content || "";
    if (needsHumanSupport(latestMessage)) {
      return new Response(
        JSON.stringify({
          needsWhatsApp: true,
          message: "I hear that you're going through something difficult. I may not be the right support for this moment. Would you like to talk to a real person via WhatsApp? They can offer more personal guidance."
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = getSystemPrompt(currentPage || "/");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "I'm a bit busy right now. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try WhatsApp for assistance." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "I'm having trouble responding. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Surya chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Something went wrong" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Context-aware system prompts based on page
const getSystemPrompt = (currentPage: string) => {
  const basePrompt = `You are Surya, a calm and deeply knowledgeable AI guide for VOYCE-X — a reflective educational platform about mental wellness, psychology, and human nature.

CRITICAL RULES:
- You are NOT a therapist, doctor, or diagnostician — you are an educational guide
- You do NOT provide medical diagnosis or prescribe treatment
- You do NOT analyze or interpret users' private journal reflections
- You NEVER claim to "feel" or "care" — you are honest about being an AI
- Tone: calm, respectful, human, non-judgmental, clear
- Default length: 2-4 sentences. When the user asks for explanation, depth, definitions, or "tell me more about X," give a thorough, well-structured answer (use short paragraphs or bullet points). Never refuse to explain a mental-health concept.
- If someone is in crisis, asks for repeated personal advice, or describes self-harm/suicidal ideation, gently suggest WhatsApp human support and crisis lines.

DEEP KNOWLEDGE BASE — you can explain ANY of the following at the level the user asks for:

1) DSM-5 and DSM-5-TR (American Psychiatric Association)
   - Full structure: Section I (use of the manual), Section II (diagnostic criteria & codes), Section III (emerging measures, cultural formulation, alternative model for personality disorders).
   - All major chapters: Neurodevelopmental Disorders (ASD, ADHD, ID, SLD, Tic), Schizophrenia Spectrum & Other Psychotic Disorders, Bipolar & Related, Depressive Disorders (MDD, PDD/dysthymia, DMDD, PMDD), Anxiety Disorders (GAD, panic, social anxiety, specific phobia, agoraphobia, separation), OCD & Related (OCD, BDD, hoarding, trichotillomania, excoriation), Trauma & Stressor-Related (PTSD, acute stress, adjustment, RAD, DSED, prolonged grief in DSM-5-TR), Dissociative, Somatic Symptom & Related, Feeding & Eating (AN, BN, BED, ARFID), Elimination, Sleep-Wake, Sexual Dysfunctions, Gender Dysphoria, Disruptive/Impulse-Control/Conduct, Substance-Related & Addictive, Neurocognitive, Personality Disorders (Clusters A/B/C), Paraphilic.
   - DSM-5-TR specific updates: addition of Prolonged Grief Disorder, refined criteria wording, updated cultural concepts of distress, suicidal behavior & nonsuicidal self-injury as conditions for further study, ICD-10-CM code updates, sex/gender language refinements.
   - You can explain diagnostic criteria, specifiers, severity, course, prevalence, differential diagnosis, comorbidity — strictly as educational information, not personal diagnosis.

2) ICD-10 / ICD-11 / ICD-9-CM (World Health Organization)
   - ICD-11 chapter 06 (Mental, Behavioural and Neurodevelopmental Disorders) and chapter 07 (Sleep-Wake), plus the new Gaming Disorder, Complex PTSD (CPTSD), and refined personality disorder model (severity + trait domains).
   - ICD-10 F-codes (F00–F99) and how they map to DSM categories.
   - ICD-9-CM legacy codes (290–319) for educational/historical reference.
   - Differences between ICD and DSM frameworks (global vs US-centric, dimensional vs categorical shifts).

3) WHO mental health frameworks
   - mhGAP Intervention Guide, Comprehensive Mental Health Action Plan 2013–2030, Mental Health Atlas data, social determinants of mental health, suicide prevention (LIVE LIFE), QualityRights initiative, definitions of mental health vs mental illness vs psychosocial disability.

4) Core psychology, neuroscience & therapy modalities
   - Theorists: Freud, Jung (shadow, persona, individuation), Adler, Erikson (psychosocial stages), Piaget, Vygotsky, Bowlby & Ainsworth (attachment), Maslow, Rogers, Beck (CBT), Ellis (REBT), Linehan (DBT), Hayes (ACT), Gabor Maté, Bessel van der Kolk, Peter Levine, Stephen Porges (polyvagal), Dan Siegel (IPNB), Pauline Boss (ambiguous loss), Susan Cain (introversion), Lisa Feldman Barrett (constructed emotion).
   - Therapies: CBT, DBT, ACT, EMDR, IFS (Internal Family Systems), Somatic Experiencing, Sensorimotor, Schema Therapy, MBSR, MBCT, Psychodynamic, Person-Centered, Gestalt, Narrative, Solution-Focused, Family Systems, Group Therapy, Trauma-Focused CBT, Exposure & Response Prevention, Motivational Interviewing.
   - Neuroscience basics: HPA axis, amygdala-prefrontal dynamics, default mode network, neuroplasticity, polyvagal theory, window of tolerance, allostatic load.

5) Trauma, attachment & developmental concepts
   - ACEs (Adverse Childhood Experiences), CPTSD, attachment styles (secure, anxious, avoidant, disorganized), developmental trauma, intergenerational trauma, dissociation continuum, fawn/fight/flight/freeze responses.

6) Common topics users ask about
   - Anxiety, depression, panic, OCD, ADHD, autism, eating disorders, addiction, sleep, burnout, stress, loneliness, self-esteem, relationships, breakups, grief, anger, shame, perfectionism, procrastination, self-sabotage, imposter syndrome, validation, social media & comparison, introversion, meaning/purpose.
   - You can also discuss Indian/Vedic perspectives where relevant (Bhagavad Gita's Sthitaprajna, Atman, Svadharma, Kleshas, Mauna) since VOYCE integrates ancient wisdom with modern psychology.

ANSWERING STYLE
- If the user asks "what is X?" or "explain X" — give a clear, structured explanation: definition → key features → why it matters → (optional) gentle reflection question. Use plain language; define jargon.
- If asked about diagnostic criteria, list them faithfully but always frame: "These are the educational criteria used by clinicians — only a qualified professional can actually diagnose."
- If asked "do I have X?" — never confirm or deny. Redirect: "I can explain what X is and isn't, but only a qualified professional can assess you. Would you like me to explain the concept or point you to resources?"
- Never invent statistics. If you don't know a precise number, say so.
- Crisis: if the user mentions suicide, self-harm, or being in immediate danger, respond with warmth, suggest contacting a crisis line (India: iCall 9152987821, Vandrevala Foundation 1860-2662-345, AASRA 9820466726; international: findahelpline.com), and offer the WhatsApp human support route.

WHAT YOU CAN DO ON VOYCE-X
- Explain what VOYCE-X is and how to navigate it
- Suggest where to start based on user's interest (Start Here, Stories, Library, The Unheard Mind series, DSM-5 / ICD-9 academies, 21-Day Protocol)
- Explain any mental health concept simply or in depth
- Encourage reflection without analyzing private content
- Always frame content as educational, not diagnostic`;

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
    // Note: Supabase gateway already validates the apikey/anon-key on every request.
    // We intentionally allow anonymous visitors here so the public chatbot keeps working.
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

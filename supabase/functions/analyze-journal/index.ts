import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { journalData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Analyzing journal entry:", JSON.stringify(journalData).slice(0, 200));

    const prompt = `You are a compassionate, insightful wellness coach analyzing a user's daily self-reflection journal entry from a 21-day mental reboot protocol. Based on the data below, create a warm, personalized analysis in 2-3 paragraphs.

Journal Entry Data:
- Emotions felt: ${journalData.emotions?.join(", ") || "Not specified"}
- Emotion intensity: ${journalData.emotionIntensity}/10
- Tasks completed: Identity Routine: ${journalData.completedTasks?.identity ? "Yes" : "No"}, Thinking Drill: ${journalData.completedTasks?.thinking ? "Yes" : "No"}, Speaking Exercise: ${journalData.completedTasks?.speaking ? "Yes" : "No"}, Action Challenge: ${journalData.completedTasks?.action ? "Yes" : "No"}
- Hardest part: ${journalData.hardestPart || "Not specified"}
- Why it was hard: ${journalData.whyHard || "Not specified"}
- Object analyzed: ${journalData.objectAnalyzed || "Not specified"}
- Insights from object: ${journalData.insights?.filter((i: string) => i).join("; ") || "None provided"}
- PRE Speaking Drill - Point: ${journalData.prePoint || "Not specified"}, Reason: ${journalData.preReason || "Not specified"}, Example: ${journalData.preExample || "Not specified"}
- Action task completed: ${journalData.actionTask || "Not specified"}
- Time spent: ${journalData.timeSpent || "Not specified"} minutes
- Satisfied with effort: ${journalData.satisfied === true ? "Yes" : journalData.satisfied === false ? "No" : "Not specified"}
- Learning category: ${journalData.inputCategory || "Not specified"}
- Learning source: ${journalData.inputSource || "Not specified"}
- Key takeaway: ${journalData.inputTakeaway || "Not specified"}
- Showed discipline in: ${journalData.disciplineShown || "Not specified"}
- Struggled with: ${journalData.struggled || "Not specified"}
- Thought for tomorrow: ${journalData.carryForward || "Not specified"}
- Self-compassion statement: ${journalData.selfCompassion || "Not specified"}
- Self-rating: ${journalData.selfRating}/10
- Signature thought: ${journalData.signatureThought || "Not specified"}

Your response should:
1. Acknowledge their emotional state and validate their feelings
2. Highlight their wins and progress (even small ones)
3. Gently address areas of struggle with encouragement
4. Connect patterns you notice (e.g., if thinking drills are hard, what does that reveal?)
5. End with a motivating, forward-looking statement

Write in a warm, supportive tone. Be specific to THEIR data, not generic. Keep it under 300 words.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are a compassionate wellness coach who provides personalized, insightful feedback on daily reflection journals. Your tone is warm, encouraging, and psychologically informed." },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || "Unable to generate analysis at this time.";
    
    console.log("Analysis generated successfully");

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in analyze-journal function:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to analyze journal entry" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

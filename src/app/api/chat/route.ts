import { NextResponse } from "next/server";

const HUGGINGFACE_TOKEN = process.env.HUGGINGFACE_TOKEN;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!HUGGINGFACE_TOKEN) {
      throw new Error("HUGGINGFACE_TOKEN is not configured");
    }

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          model: "Qwen/Qwen2.5-7B-Instruct",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful, professional, and sophisticated AI assistant for MINT Care Dentistry. Your goal is to help patients with their dental inquiries, explain why MINT Care is the best choice (boutique offices, massage chairs, world-class doctors, affordable luxury), and encourage them to book an appointment. Keep your tone premium, friendly, and concise.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 250,
          temperature: 0.7,
        }),
      }
    );

    const result = await response.json();
    console.log("HF Response:", JSON.stringify(result));

    if (!response.ok) {
      throw new Error(result.error?.message || result.error || `HTTP ${response.status}`);
    }

    const content = result.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response right now.";

    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("Chatbot Error:", error);
    return NextResponse.json(
      { content: "I'm having a little trouble connecting with my MINT-brain right now. Please try again or call us at our office!" },
      { status: 500 }
    );
  }
}

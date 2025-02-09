import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { chatHistory } = await req.json();
    const openai = new OpenAI({ apiKey: process.env.API_KEY });

    try {
        const messages = chatHistory.map(chat => ({
            role: chat.sender === "AI" ? "system" : "user",
            content: chat.message
        }));

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: messages, 
            max_tokens: 150
        });

        return NextResponse.json({ message: response.choices[0].message.content.trim() });
    } catch (error) {
        console.error("OpenAI Error:", error);
        return NextResponse.json({ message: "Error generating response" }, { status: 500 });
    }
}

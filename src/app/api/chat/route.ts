import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  const openai = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  const result = await streamText({
    model: openai("llama-3.1-8b-instant"),
    prompt: prompt,
  });

  return result.toDataStreamResponse();
}

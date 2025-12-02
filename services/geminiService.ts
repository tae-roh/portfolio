import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_DATA } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${RESUME_DATA.name}, a ${RESUME_DATA.role}.
You are embedded in their personal portfolio website.
Answer questions from recruiters or visitors as if you are ${RESUME_DATA.name}, using the following resume data.
Be polite, professional, yet friendly. If a question is not covered by the resume data, say you can discuss it in an interview.

Resume Data:
${JSON.stringify(RESUME_DATA)}
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "API Key is missing. Please configure the environment.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't generate a response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the server right now.";
  }
};
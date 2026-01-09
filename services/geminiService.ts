
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getShoppingAssistance = async (prompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  try {
    const productListContext = PRODUCTS.map(p => 
      `${p.name} (${p.category}): $${p.price}. Description: ${p.description}`
    ).join('\n');

    const systemInstruction = `
      You are an expert Islamic bookstore assistant for "Al-Noor Quran Shop". 
      Your goal is to help customers find the right Quran based on their needs (learning Tajweed, gifts, translation, etc.).
      
      Available Products:
      ${productListContext}
      
      Rules:
      1. Be polite and use respectful Islamic greetings like "Assalamu Alaikum".
      2. If a user asks for a recommendation, suggest specific products from the list.
      3. Explain the differences between categories (e.g., what is a Tajweed Quran).
      4. Keep responses concise and helpful.
      5. If they ask about something we don't have, offer the closest alternative or politely say we don't stock it.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `System: ${systemInstruction}` }] },
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I'm having trouble connecting to my knowledge base. How else can I help you today?";
  }
};

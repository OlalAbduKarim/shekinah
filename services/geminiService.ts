
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Devotional } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const systemInstruction = `You are a wise and compassionate theologian writing for a church's daily devotional blog. Your tone should be encouraging, biblically grounded, and accessible to a general Christian audience.
Your task is to generate a short devotional.
You MUST return a single, valid JSON object with the following structure: { "title": "string", "scripture": "string", "body": "string" }.
The 'title' should be concise and engaging.
The 'scripture' should be a relevant Bible verse (e.g., "John 3:16").
The 'body' should be a 3-4 paragraph reflection on the scripture, offering encouragement and a practical application for daily life.
Do not include any other text, greetings, or markdown formatting outside of the JSON object.
`;

export const generateDevotional = async (): Promise<Devotional> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: "Please generate a new devotional.",
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                temperature: 0.8,
            },
        });

        let jsonStr = response.text.trim();
        
        // Sanitize the response to ensure it's valid JSON
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData = JSON.parse(jsonStr);

        if (parsedData.title && parsedData.scripture && parsedData.body) {
            return parsedData as Devotional;
        } else {
            throw new Error("Invalid devotional structure received from API.");
        }
    } catch (error) {
        console.error("Error generating devotional:", error);
        throw new Error("Failed to generate a new devotional. Please check your API key and try again.");
    }
};

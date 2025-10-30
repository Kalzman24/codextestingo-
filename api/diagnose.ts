
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { context, answers, diagnosisQuestions } = req.body;

    if (!context || !answers || !diagnosisQuestions) {
        return res.status(400).json({ error: 'Missing required fields in request body.' });
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
    const formattedAnswers = diagnosisQuestions.map((q: { question: string }, i: number) => {
        return `- ${q.question}: ${answers[i] || "Not answered"}`;
    }).join('\n');

    const prompt = `
      System Instruction: You are a world-class AI strategy consultant from a firm called 'Whitespace Inc.'. Your goal is to analyze a potential client's AI readiness based on their answers to a questionnaire and their stated business context. Your analysis should be concise, insightful, and intriguing, encouraging them to book a follow-up call. Do not provide a complete solution. Your tone should be expert and confident. The analysis should create a sense of urgency and opportunity, making them feel understood and eager to know the 'how'.

      Client Context:
      - Industry: ${context.industry}
      - Primary Goal/Challenge: ${context.goal}

      Questionnaire Answers:
      ${formattedAnswers}

      Task: Analyze the client's AI readiness and provide a headline, a brief analysis, a readiness score, and a readiness category based on the provided information.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    headline: {
                        type: Type.STRING,
                        description: "A compelling, short headline identifying their single most impactful AI opportunity or risk. (e.g., 'Unlocking Growth by Automating Lead Qualification').",
                    },
                    analysis: {
                        type: Type.STRING,
                        description: "A brief, 2-3 sentence paragraph explaining WHY this is their key area of focus. Connect their specific answers to the opportunity. Use professional and insightful language.",
                    },
                    readinessScore: {
                        type: Type.INTEGER,
                        description: "A single integer score from 0 to 100 representing their overall AI readiness, calculated from their answers.",
                    },
                    readinessCategory: {
                        type: Type.STRING,
                        description: "A category based on the score: 'Foundational' (0-29), 'Explorer' (30-59), 'Accelerator' (60-79), or 'Leader' (80-100).",
                    },
                },
            }
        }
    });

    let jsonText = response.text.trim();
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.slice(7, -3).trim();
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.slice(3, -3).trim();
    }
    
    const resultJson = JSON.parse(jsonText);
    return res.status(200).json(resultJson);

  } catch (error) {
    console.error('Error in /api/diagnose:', error);
    return res.status(500).json({ error: 'Failed to fetch AI analysis.' });
  }
}

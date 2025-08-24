
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

const systemInstruction = `
あなたはALCS株式会社の事業内容について回答する専門のアシスタントです。
ALCS株式会社は日本のIT企業で、以下の3つの主要な事業を展開しています。

1.  **システム開発**: 顧客のニーズに合わせたカスタムシステムの企画、設計、開発、導入を行います。
2.  **システム保守・運用**: 既存システムの安定稼働をサポートし、障害対応やパフォーマンス改善を行います。
3.  **IT基盤構築**: サーバー、ネットワーク、クラウド環境の設計と構築を行い、堅牢なITインフラを提供します。

ユーザーからの質問に対して、上記の情報に基づいて、プロフェッショナルかつ簡潔に回答してください。
不明な点や、上記事業内容と関係のない質問には「申し訳ありませんが、そのご質問にはお答えできません。ALCSの事業内容に関するご質問をお願いします。」と回答してください。
`;

export const generateBusinessInquiryResponse = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 1,
        topK: 32,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to get response from AI assistant.");
  }
};

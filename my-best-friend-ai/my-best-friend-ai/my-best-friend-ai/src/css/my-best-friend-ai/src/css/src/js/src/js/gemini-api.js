const apiKey = "AIzaSyAK9GdB9DL1lvqSAefY6_Bvj0Hg97LeS88"; 
const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=';

export const callGeminiAPI = async (chatHistory, systemPrompt) => {
    try {
        const payload = {
            contents: chatHistory,
            systemInstruction: { parts: [{ text: systemPrompt }] },
            tools: [{ "google_search": {} }]
        };
        const response = await fetch(`${apiUrl}${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
};

export const getSystemPrompt = (aiName) => {
    return `You are a warm, empathetic, and supportive friend named '${aiName}'. Your purpose is to listen, understand, and offer thoughtful, constructive suggestions for problems and concerns. Your tone is always positive and non-judgmental. Do not reveal that you are an AI or language model. Respond as a trusted human friend would. Keep your responses concise and action-oriented.`;
};

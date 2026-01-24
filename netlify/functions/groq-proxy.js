const OpenAI = require("openai");

exports.handler = async (event) => {
  const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY, // Set in Netlify dashboard
    baseURL: "https://api.groq.com/openai/v1",
  });

  try {
    const { messages, model } = JSON.parse(event.body);
    const response = await groq.chat.completions.create({
      messages,
      model,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Groq API" }),
    };
  }
};

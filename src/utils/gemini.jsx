import OpenAI from "openai";
import { GROG_API_KEY } from "./constants"; // Must use { } for named exports

// Debugging: This will show in your console if the key is failing to load
// if (!GROG_API_KEY) {
//   console.error("GROG_API_KEY is undefined. 1. Check .env file has VITE_GROG_API_KEY. 2. Restart your npm run dev.");
// }

const groq = new OpenAI({
  apiKey: GROG_API_KEY, 
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default groq;
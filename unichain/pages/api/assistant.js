import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import stringSimilarity from "string-similarity";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function fetchAnswer(query) {
  try {
    // Fetch all stored questions from the knowledge base
    const { data, error } = await supabase
      .from("knowledge_base")
      .select("question, answer");

    if (error || !data) {
      console.error("Error fetching knowledge base:", error);
      throw new Error("Error fetching knowledge base.");
    }

    // Log the fetched data for debugging
    console.log("Fetched knowledge base data:", data);

    // Find the closest matching question
    const questions = data.map((item) => item.question);
    const { bestMatch } = stringSimilarity.findBestMatch(query, questions);

    // Accept the best match only if similarity is high enough (e.g., 0.6+)
    if (bestMatch.rating >= 0.6) {
      return { answer: data.find((item) => item.question === bestMatch.target).answer };
    }

    // If no good match, ask Gemini (handles greetings too)
    return await fetchFromGemini(query);
  } catch (error) {
    console.error("Error in fetchAnswer:", error);
    return { answer: "Something went wrong, please try again later." };
  }
}

async function fetchFromGemini(query) {
  try {
    console.log("Requesting Gemini with query:", query);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: query,
              },
            ],
          },
        ],
      }
    );

    console.log("Gemini API response:", response.data);

    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0
    ) {
      return { answer: response.data.candidates[0].content };
    } else {
      // More informative fallback message
      return { answer: "I couldn't find an answer for that. Can you try rephrasing your question?" };
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { answer: "I'm unable to process your request right now." };
  }
}


export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { message } = req.body;
  const response = await fetchAnswer(message);

  // Send the response to the client
  res.json({ response: response.answer });
}

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { question, answer } = req.body;

  const { error } = await supabase
    .from("knowledge_base")
    .insert([{ question, answer }]);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
}

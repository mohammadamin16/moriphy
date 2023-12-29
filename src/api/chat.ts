import { redirect } from "react-router-dom";

const API_TOKEN = "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";
export async function query(prompt: string) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
      method: "POST",
      body: JSON.stringify(prompt),
    }
  );
  const result = await response.json();
  const { generated_text } = result[0];

  return generated_text;
}

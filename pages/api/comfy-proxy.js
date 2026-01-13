export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: messages,   // Gemini expects EXACTLY this key
        }),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error("Proxy Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

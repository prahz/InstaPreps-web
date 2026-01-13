import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const base = process.env.NEXT_PUBLIC_BASE_API_URL || "https://staging.instapreps.com";
  const url = `${base}/api/stud_detail`; // endpoint using from PDF

  try {
    const response = await axios.post(url, req.body, {
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
    res.status(200).json(response.data);
  } catch (err) {
    const status = err?.response?.status || 500;
    const data = err?.response?.data || { success: false, message: "Proxy failed" };
    res.status(status).json(data);
  }
}

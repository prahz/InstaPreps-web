export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://instapreps.com/api/testpaper/forstudent/${id}`,
      {
        headers: {
          Authorization: req.headers.authorization || "",
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Testpaper proxy error:", err);
    res.status(500).json({ error: "Testpaper fetch failed" });
  }
}

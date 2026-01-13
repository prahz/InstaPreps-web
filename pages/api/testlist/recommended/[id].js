export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const r = await fetch(
      `https://instapreps.com/api/testlist/recommended/${id}`,
      {
        headers: {
          cookie: req.headers.cookie || '',
        },
      }
    );

    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch recommended tests' });
  }
}

export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://instapreps.com/api/postfeed',
      {
        headers: {
          cookie: req.headers.cookie || '',
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Postfeed proxy failed' });
  }
}

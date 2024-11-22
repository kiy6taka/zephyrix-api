// pages/api/say.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ 
        error: 'Query parameter is required' 
      });
    }

    return res.status(200).json({
      message: `You said: ${q}`,
      response: `Hello, ${q}!`
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
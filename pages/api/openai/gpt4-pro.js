// pages/api/openai/gpt4-pro.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ 
        error: 'Query parameter is required' 
      });
    }

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: q }]
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      return res.status(200).json({
        success: true,
        response: response.data.choices[0].message.content
      });
    } catch (error) {
      return res.status(500).json({ 
        error: 'Failed to generate response',
        details: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
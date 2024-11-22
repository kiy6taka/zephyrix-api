// pages/api/talker/npmstalk.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ 
        error: 'Package name is required' 
      });
    }

    try {
      const response = await axios.get(`https://registry.npmjs.org/${text}`);
      
      return res.status(200).json({
        success: true,
        package: {
          name: response.data.name,
          version: response.data['dist-tags'].latest,
          description: response.data.description,
          homepage: response.data.homepage,
          author: response.data.author?.name || 'Unknown',
          license: response.data.license,
          dependencies: Object.keys(response.data.versions[response.data['dist-tags'].latest].dependencies || {})
        }
      });
    } catch (error) {
      return res.status(500).json({ 
        error: 'Failed to fetch NPM package information',
        details: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
// pages/api/downloader/tiktokdl.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ 
        error: 'TikTok video URL is required' 
      });
    }

    try {
      const response = await axios.get(`https://tiktok-video-no-watermark2.p.rapidapi.com/video/download`, {
        params: { url: url },
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
      });
      
      return res.status(200).json({
        success: true,
        data: {
          video: response.data.video_url,
          thumbnail: response.data.cover_url,
          title: response.data.title
        }
      });
    } catch (error) {
      return res.status(500).json({ 
        error: 'Failed to download TikTok video',
        details: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
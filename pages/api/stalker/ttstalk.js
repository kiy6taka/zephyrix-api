// pages/api/talker/ttstalk.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ 
        error: 'TikTok username is required' 
      });
    }

    try {
      const response = await axios.get(`https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts`, {
        params: { username: username },
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
      });
      
      return res.status(200).json({
        success: true,
        profile: {
          username: response.data.user.uniqueId,
          nickname: response.data.user.nickname,
          signature: response.data.user.signature,
          followerCount: response.data.user.stats.followerCount,
          followingCount: response.data.user.stats.followingCount,
          heartCount: response.data.user.stats.heartCount
        }
      });
    } catch (error) {
      return res.status(500).json({ 
        error: 'Failed to fetch TikTok profile',
        details: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
// pages/api/talker/igstalk.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ 
        error: 'Instagram username is required' 
      });
    }

    try {
      const response = await axios.get(`https://instagram-profile-scraper.p.rapidapi.com/profile/${username}`, {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'instagram-profile-scraper.p.rapidapi.com'
        }
      });
      
      return res.status(200).json({
        success: true,
        profile: {
          username: response.data.username,
          fullName: response.data.full_name,
          biography: response.data.biography,
          followerCount: response.data.follower_count,
          followingCount: response.data.following_count,
          profilePicture: response.data.profile_pic_url
        }
      });
    } catch (error) {
      return res.status(500).json({ 
        error: 'Failed to fetch Instagram profile',
        details: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
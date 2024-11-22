# Zephyrix APIs

## Overview

Zephyrix APIs is a REST API project developed using Next.js, providing various services such as:  
- TikTok Downloader  
- Social Media Stalking (Instagram, TikTok)  
- NPM Package Information  
- OpenAI GPT Integration  

## Features

- TikTok Video Downloader  
- Instagram Profile Stalker  
- TikTok Username Stalker  
- NPM Package Information  
- OpenAI GPT Integration  

## Prerequisites

- Node.js (version 18+)  
- npm/yarn/pnpm  

## Installation

1. Clone the repository:  
```bash
git clone https://github.com/username/ZephyrixAPIs.git
cd ZephyrixAPIs
```

2. Install dependencies:  
```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in the API keys:  
```bash
cp .env.example .env
```

## Running the Project

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## API Documentation

Endpoints are available at `/public/swg.json` with OpenAPI 3.0.0 specifications.

### Available Endpoints

- `/api/downloader/tiktokdl` - Download TikTok videos  
- `/api/talker/ttstalk` - TikTok profile information  
- `/api/talker/npmstalk` - NPM package information  
- `/api/talker/igstalk` - Instagram profile information  
- `/api/openai/gpt4-pro` - OpenAI GPT integration  
- `/api/say` - Testing endpoint  

## Technologies

- Next.js 15  
- Axios  
- Cheerio  
- Node Fetch  

## Contribution

1. Fork the repository  
2. Create a feature branch (`git checkout -b new-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin new-feature`)  
5. Open a Pull Request  

## License

This project is licensed under [LICENSE] - see the LICENSE file for details.

## Contact

- GitHub: [github.com/kiy6taka]  

---

**Note**:  
- Make sure to keep API keys confidential  
- Use rate limiting in production  
- Regularly update dependencies  


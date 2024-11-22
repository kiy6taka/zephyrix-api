export const metadata = {
  title: "Zephyrix Docs",
  description: "Comprehensive API Documentation for Zephyrix",
  keywords: "API, Documentation, Zephyrix, REST API",
  openGraph: {
    title: "Zephyrix - REST API Documentation",
    description: "Zephyrix: A free, simple REST API designed for developers. Robust, reliable, and ready to use.",
    url: "https://api.zephyrix.xyz/docs",
    type: "website",
    images: [
      {
        url: "https://files.catbox.moe/a2xazc.jpg",
        width: 800,
        height: 600,
        alt: "Zephyrix Official Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': 300
    }
  },
  verification: {
    google: 'your-google-site-verification-code', // Optional
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

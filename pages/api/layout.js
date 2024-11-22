export const metadata = {
  title: {
    default: "Zephyrix API",
    template: "%s | Zephyrix"
  },
  description: "Powerful and Simple API Platform",
  keywords: ["API", "Documentation", "Zephyrix"],
  openGraph: {
    title: "Zephyrix API",
    description: "Your Gateway to Seamless API Integration",
    url: "https://api.zephyrix.my.id",
    siteName: "Zephyrix",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
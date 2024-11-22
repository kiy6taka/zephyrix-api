import './globals.css'

export const metadata = {
  title: {
    default: "Zephyrix API",
    template: "%s | Zephyrix"
  },
  description: "Powerful and Simple API Platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
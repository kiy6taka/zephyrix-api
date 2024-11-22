// app/layout.js
// https://nextjs.org/docs/app/getting-started/installation

export const metadata = {
  title: "Comming Soon!",
  description: "Comming Soon!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
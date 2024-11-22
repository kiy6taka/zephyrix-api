import Link from "next/link"

export const metadata = {
  title: "Home",
  description: "Welcome to Zephyrix API Platform"
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Zephyrix!</h1>
        <p className="mb-6 text-gray-600">Explore our powerful API documentation</p>
        <Link 
          href="/docs" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Go to Docs
        </Link>
      </div>
    </div>
  )
}
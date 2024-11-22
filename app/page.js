import Link from "next/link"

export const metadata = {
  title: "Home",
  description: "Welcome to Zephyrix API Platform"
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-zephyrix-blue">
          Zephyrix API
        </h1>
        <p className="mb-6 text-gray-600">
          Unlock the power of seamless API integration
        </p>
        <Link 
          href="/docs" 
          className="btn-primary"
        >
          Explore Docs
        </Link>
      </div>
    </div>
  )
}
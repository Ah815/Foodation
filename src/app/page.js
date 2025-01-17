import Image from "next/image"
import Link from "next/link"

export default function RepresentationChoice() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <Image src="/image1.png" alt="logo" height={200} width={200}/>  
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <p className="text-center text-base sm:text-lg lg:text-xl text-black">
            Are you representing yourself as an individual or an organization?
          </p>
          <div className="space-y-4">
            <Link href="/Organization-login">
              <button className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700 text-sm sm:text-base lg:text-lg">
                Organization
              </button>
            </Link>

            <Link href="/login">
              <button className="w-full border border-green-500 text-green-700 py-2 rounded-md hover:bg-green-50 mt-2 text-sm sm:text-base lg:text-lg">
                Individual
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

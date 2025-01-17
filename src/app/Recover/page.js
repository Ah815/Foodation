"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AccountRecovery() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending OTP to:', email)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-white">
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 lg:p-10 z-60">
        <div className="h-12 sm:h-16 pl-6 sm:pl-9">
          <Image
            src="/image.png"
            alt="Logo"
            className="h-full"
            width={64}
            height={64}
          />
        </div>
      </div> 
      <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 sm:mx-8 lg:mx-0 relative">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-black">Recover your Account</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email for which you want to recover your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2 text-black"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            <Link href="/Verify">
            Send OTP
            </Link>
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">or</span>
        </div>
        <div className="mt-2 text-center">
          <Link href="/" className="text-green-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

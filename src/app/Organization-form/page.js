"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false); // Define showPassword state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Define showConfirmPassword state

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 lg:p-10 z-60">
        <div className="h-12 sm:h-16 pl-4 sm:pl-9">
          <Image
            src="/image.png"
            alt="Logo"
            className="h-full"
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className="w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-white p-6 sm:p-8 rounded-lg mt-20">
        <div className="flex flex-col items-center space-y-2 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-black">Sign Up</h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="org-name" className="block text-sm sm:text-base font-medium text-gray-700">Organization Name</label>
            <input 
              id="org-name" 
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              placeholder="Enter Organization Name" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="org-email" className="block text-sm sm:text-base font-medium text-gray-700">Organization Email</label>
            <input 
              id="org-email" 
              type="email" 
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              placeholder="Enter Email" 
            />
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"} // Use showPassword state
                placeholder="Enter Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm sm:text-base font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input 
                id="confirm-password" 
                type={showConfirmPassword ? "text" : "password"}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                placeholder="Re-enter Password" 
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle showConfirmPassword
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
            <label htmlFor="remember" className="text-sm sm:text-base text-gray-700">Remember Me</label>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Sign Up</button>
          <div className="text-center text-sm sm:text-base mt-4">
            <span className="text-gray-600">or</span>
          </div>
          <div className="text-center mt-2">
            <Link href="/Organization-login">
              <p className="text-green-600 hover:underline">Already have an account? Log in here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 lg:p-10 z-60">
        {/* Logo */}
        <div className="h-12 sm:h-16 pl-4 sm:pl-9 -mt-2">
          <Image
            src="/image.png"
            alt="Logo"
            className="h-full"
            width={64}  
            height={64} 
          />
        </div>
      </div>
      <div className="w-full max-w-md p-6 sm:p-8 lg:p-10 bg-white rounded-lg">
        <h2 className="mb-6 text-xl sm:text-2xl font-bold text-center text-black">Login</h2>
        
        <form>
          <div className="mb-4 text-black">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 text-black">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <Link href="/Recover" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Link href="/Organization-Dashboard">
            <button
              type="submit"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
              Login
            </button>
          </Link>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">or</p>
          <Link href="/Organization-form" className="text-sm text-green-600 hover:underline">
            New to Foodation? Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

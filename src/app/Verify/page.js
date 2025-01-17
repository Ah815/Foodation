"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(9) // Initial timer value (can be modified)
  const [resendEnabled, setResendEnabled] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) return prevTimer - 1
        else {
          setResendEnabled(true) // Enable resend when the timer hits 0
          return 0
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']) // Clear OTP inputs (optional)
    setTimer(30) // Reset timer
    setResendEnabled(false) // Disable the resend button
    // Logic for resending the OTP goes here (e.g., API call)
    console.log("Resend OTP logic triggered")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-white">
      <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 sm:mx-6 lg:mx-8">
        <div className="flex justify-center mb-6">
          <Image src='/image.png' alt="Logo" width={64} height={64} />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-black text-center mb-6">Verify your OTP</h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Enter the code we've sent you at your email mu************.com
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl border border-gray-300 text-black"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        {/* Timer and Resend button logic */}
        {timer > 0 ? (
          <p className="text-center text-xs sm:text-sm text-gray-500 mb-4">
            Didn't receive OTP? Try in 0:{timer.toString().padStart(2, '0')} sec
          </p>
        ) : (
          <div className="text-center text-xs sm:text-sm text-gray-500 mb-4">
            Didn't receive OTP?&nbsp;
            <button
              className={`text-green-500 ${resendEnabled ? 'hover:underline' : 'text-gray-500'}`}
              onClick={handleResend}
              disabled={!resendEnabled}
            >
              Resend OTP
            </button>
          </div>
        )}

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
          Verify Now
        </button>
      </div>
    </div>
  )
}

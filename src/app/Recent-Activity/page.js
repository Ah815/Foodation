"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Search, MoreVertical} from 'lucide-react'
import DonationModal from '../Component/DonationModal'
const notifications = [
  {
    id: 1,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago'
  },
  {
    id: 2,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago'
  },
  {
    id: 3,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago'
  },
  {
    id: 4,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago'
  },
  {
    id: 5,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago'
  },
]
const recentActivity = [
  { id: 1, donorName: 'Alan Coin', foodList: 'Biryani', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 2, donorName: 'Alan Coin', foodList: 'Pulao', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 3, donorName: 'Alan Coin', foodList: 'Chicken nihari', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 4, donorName: 'Alan Coin', foodList: 'Kabab', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 5, donorName: 'Alan Coin', foodList: 'Fruits', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 6, donorName: 'Alan Coin', foodList: 'Fruit Basket', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 7, donorName: 'Alan Coin', foodList: 'Rice', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 8, donorName: 'Alan Coin', foodList: 'Biryani', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 9, donorName: 'Alan Coin', foodList: 'Karahi', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 10, donorName: 'Alan Coin', foodList: 'Daal Chawal', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 11, donorName: 'Alan Coin', foodList: 'Bakra', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 12, donorName: 'Alan Coin', foodList: 'Chicken', date: '04 April, 2021 | 04:00 pm', points: 44 },
]

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) 

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div>
              <Image src="/image.png" width={32} height={32}/>
            </div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <Link href="/dashBoard" className="flex items-center px-4 py-2 font-semibold text-green-500">
            <Image src="/Icons 1.png" width={20} height={20} className="mr-2"/>
            Dashboard
          </Link>
          <Link href="/Listing" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/user.png" width={20} height={20} className="mr-2"/>
            My Listing
          </Link>

          <Link href="Recievers" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/donors.png" width={20} height={20} className="mr-2"/>
            My Receivers
          </Link>

          <Link href="Goals" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/goals.png" width={20} height={20} className="mr-2"/>
            My Goals
          </Link>

          <div className="mt-6">
            <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
             <Image src="/setting.png" width={20} height={20} className="mr-2"/>
             Settings
            </Link>
          </div> 

          <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" width={20} height={20} className="mr-2"/>
            Sign Out
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4">
            <h1 className="text-2xl font-semibold text-black mb-4 lg:mb-0">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={openModal}
              >
                Start Donating
              </button>
              <Image src="/coin.png" width={40} height={40} alt="Coin" />
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-gray-500 hover:text-gray-700"
              >
                <Image src="/Ring.png" width={40} height={40} alt="Notification bell" />
              </button>
              <Image src="/logo.png" width={200} height={200} alt="Logo" className="hidden lg:block" />
            </div>
          </div>
        </header>

        {/* Notifications */}
        {showNotifications && (
          <div className="absolute top-16 right-4 lg:right-16 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 border-b border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image src="/donor.png" alt="Fruit basket" width={40} height={40} className="rounded-md" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  <button className="ml-2 text-gray-400 hover:text-gray-500">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <main className="p-4 lg:p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 lg:p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Activity</h2>
              <div className="flex flex-col lg:flex-row items-center mb-6">
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-4 flex items-center text-sm text-gray-500">
                  Sort By <Image src="/sort.png" width={15} height={15} alt="Sort" />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="pb-4 font-bold text-green-500">Image</th>
                      <th className="pb-4 font-bold text-green-500">Donor Name</th>
                      <th className="pb-4 font-bold text-green-500">Food List</th>
                      <th className="pb-4 font-bold text-green-500">Date & Time</th>
                      <th className="pb-4 font-bold text-green-500">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity) => (
                      <tr key={activity.id} className="border-t">
                        <td className="py-4">
                          <Image src="/donor.png" width={40} height={40} alt="Donor" />
                        </td>
                        <td className="py-4 font-semibold text-black">{activity.donorName}</td>
                        <td className="py-4 font-semibold text-black">{activity.foodList}</td>
                        <td className="py-4 font-semibold text-black">{activity.date}</td>
                        <td className="py-4 font-semibold text-green-500">{activity.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
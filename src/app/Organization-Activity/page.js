"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, PlusCircle, MoreVertical} from 'lucide-react'
import GoalCreationModal from '../Component/CreationModal'

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
  }
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

export default function GoalsDashboard() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div><Image src="/image.png" width={40} height={40}/></div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <center>
          <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
           onClick={openModal}
          >
           <PlusCircle className="w-5 h-5"/>
            Create Goal
          </button>
        </center>
        <nav className="mt-8">
          <Link href="/Organization-Dashboard" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/dash.png" className="mr-2" width={20} height={20}/>
            Dashboard
          </Link>
          <a href="Organization-Listing" className="flex items-center px-4 py-2 text-gray-400">
          <Image src="/user.png" className="mr-2" width={20} height={20}/>
            User Listing
          </a>
          <a href="Organization-Donor" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/donors.png" className="mr-2" width={20} height={20}/>
            My Donors
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-green-500">
          <Image src="/Icons 2.png" className="mr-2" width={20} height={20}/>
            Goals
          </a>
          <div className="mt-6">
          <a href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/setting.png" className="mr-2" width={20} height={20}/>
            Settings
          </a>
          </div>
          <a href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" className="mr-2" width={20} height={20}/>
            Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Goals</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Start Receiving
              </button>
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
               <Image src="/Ring.png" alt="Notifications" width={50} height={50} />
              </button>
              <div className="flex items-center space-x-2">
                <div><Image src="/logo.png" width={200} height={200}/></div>
              </div>
            </div>
          </div>
        </header>

        {/* Notifications */}
        {showNotifications && (
          <div className="absolute top-0 right-0 mt-16 mr-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 border-b border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src="/donor.png"
                      alt="Fruit basket"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-500">{notification.content}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500 ml-3">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Activity</h2>
              <div className="flex items-center mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  Sort By <Image src="/sort.png" width={15} height={15}/>
                </div>
              </div>
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
                        <div><Image src="/donor.png" width={40} height={40}/></div>
                      </td>
                      <td className="py-4 text-black">{activity.donorName}</td>
                      <td className="py-4 text-black">{activity.foodList}</td>
                      <td className="py-4 text-black">{activity.date}</td>
                      <td className="py-4 text-green-500">{activity.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <GoalCreationModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  )
}
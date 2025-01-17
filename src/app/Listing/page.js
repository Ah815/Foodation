'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, MoreVertical, Search, Filter } from 'lucide-react'
import DonationModal from '../Component/DonationModal'

const notifications = [
  {
    id: 1,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago',
  },
  {
    id: 2,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago',
  },
  {
    id: 3,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago',
  },
  {
    id: 4,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago',
  },
  {
    id: 5,
    title: 'Malesuada tellus tincidunt fringilla enim, id mauris.',
    time: '3 mins ago',
  },
]

const donationsList = [
  { id: 1, donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 2, donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 3, donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 4, donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
]

const leaderboard = [
  { id: 1, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 2, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 3, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 4, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
]

const recentActivity = [
  { id: 1, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 2, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 3, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 4, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
]

export default function MyReceiversDashboard() {
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
              <Image src="/image.png" width={40} height={40} />
            </div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <Link href="/dashBoard" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/dash.png" width={20} height={20} className="mr-2" />
            Dashboard
          </Link>
          <Link href="/Listing" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/user.png" width={20} height={20} className="mr-2" />
            My Listing
          </Link>
          <Link href="/Recievers" className="flex items-center px-4 py-2  text-green-500">
            <Image src="/Icons 3.png" width={20} height={20} className="mr-2" />
            My Receivers
          </Link>
          <Link href="Goals" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/goals.png" width={20} height={20} className="mr-2" />
            My Goals
          </Link>
          <div className="mt-6">
            <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
              <Image src="/setting.png" width={20} height={20} className="mr-2" />
              Settings
            </Link>
          </div>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" width={20} height={20} className="mr-2" />
            Sign Out
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">My Receivers</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
               onClick={openModal}
              >
                Start Donating
              </button>
              <div>
                <Image src="/coin.png" width={40} height={40} />
              </div>
              <button onClick={() => setShowNotifications(!showNotifications)}>
                <Image src="/Ring.png" width={40} height={40} />
              </button>
              <div className="flex items-center space-x-2">
                <div>
                  <Image src="/logo.png" width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Notifications */}
        {showNotifications && (
          <div className="absolute top-16 right-8 w-80 bg-white rounded-lg shadow-xl z-10">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 border-b border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src="/donor.png"
                      alt="Notification image"
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
                  <button className="ml-2 text-gray-400 hover:text-gray-500">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <main className="p-8 flex">
          {/* Donations List */}
          <div className="flex-1 mr-8">
            <div className="flex items-center mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search user"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded-full flex items-center">
                 Apply Filter
                <Filter className="w-4 h-4 mr-2" />
              </button>
            </div>
            <div className="space-y-4">
              {donationsList.map((donation) => (
                <div key={donation.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start">
                    <Image src="/Daal.png" width={300} height={300} className="mr-6" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Image src="/profile.png" width={32} height={32} />
                          <div>
                            <h3 className="font-semibold text-black">{donation.donorName}</h3>
                            <p className="text-sm text-gray-500">{donation.time}</p>
                          </div>
                        </div>
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </div>
                      <h2 className="text-lg font-semibold mt-2">{donation.foodName} ({donation.weight})</h2>
                      <p className="text-sm text-gray-600 mt-1">{donation.description}</p>
                      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full">
                        Accept Donation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-96">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Leader board</h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between shadow-lg rounded-half">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-green-500">{index + 1}</span>
                        <Image src="/Amirah.png" width={40} height={40} />
                        <div>
                          <div className="font-semibold text-black">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.donations}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                       <Image src="/coin2.png" width={20} height={20}/>
                       <span className="text-green-500 font-bold">{user.points}</span>
                      </div> 
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/leaderboard" 
                   className="text-green-500 font-semibold flex items-center justify-center shadow-white rounded-s-lg">
                   View All<Image src="/view.png" width={30} height={30}/>
                  </Link>
                 </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 shadow-lg rounded-half">
                      <Image src="/donor.png" width={40} height={40} />
                      <div>
                        <div className="font-semibold text-black">{activity.name}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/Recent-Avtivity" 
                   className="text-green-500 font-semibold flex items-center justify-center shadow-white rounded-s-lg">
                   View All<Image src="/view.png" width={30} height={30}/>
                  </Link>
                </div>
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

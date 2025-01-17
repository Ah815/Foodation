"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Bell, MoreVertical} from 'lucide-react'
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
  }
]
const goalsList = [
  { id: 1, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
  { id: 2, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
  { id: 3, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
  { id: 4, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
  { id: 5, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
  { id: 6, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas', enrolled: '20/40', points: 200 },
]

const leaderboard = [
  { id: 1, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 2, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 3, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
  { id: 4, name: 'Amirah', donations: 'Donations 4.5k', points: 44 },
]

const recentActivity = [
  { id: 1, name: 'Donator Name', date: '04 April 2023 | 04:00 PM' },
  { id: 2, name: 'Donator Name', date: '04 April 2023 | 04:00 PM' },
  { id: 3, name: 'Donator Name', date: '04 April 2023 | 04:00 PM' },
  { id: 4, name: 'Donator Name', date: '04 April 2023 | 04:00 PM' },
]

export default function Completed() {
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
                <Image src="/image.png" width={40} height={40}/>
            </div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <Link href="/dashBoard" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/dash.png" width={20} height={20} className="mr-2"/>
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

          <a href="Goals" className="flex items-center px-4 py-2 text-green-500">
            <Image src="/Icons 2.png" width={20} height={20} className="mr-2"/>
            My Goals
          </a>

          <div className="mt-6"> 
           <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
             <Image src="/setting.png" width={20} height={20} className="mr-2"/>
             Settings
           </Link>

           <Link href="#" className="flex items-center px-4 py-2 text-gray-400">
             <Image src="/out.png" width={20} height={20} className="mr-2"/>
             Sign Out
           </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Goals</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded :bg-green-600"
               onClick={openModal} 
              >
                Start Donating
              </button>
              <Image src="/coin.png" width={40} height={40} alt="Coin"/>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-gray-500 hover:text-gray-700"
              >
                <Image src="/Ring.png" width={40} height={40}/>
              </button>
              <Image src="/logo.png" width={200} height={200} alt="Logo"/>
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
          {/* Goals List */}
          <div className="flex-1 bg-white rounded-lg shadow-sm mr-8">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                </div>
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  Sort By <Image src="/sort.png" width={15} height={15}/>
                </div>
              </div>
              <div className="flex space-x-4 mb-6">
                  <button className="flex space-x-4 mt-2 text-gray-400 hover:text-green-500 font-medium">
                    <Link href="Goals">
                     <p className="hover:underline">New Goals</p>
                    </Link>
                    <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>

                  <button className="flex space-x-4 mt-2 text-gray-400 hover:text-green-500 font-medium">
                    <Link href="My-Goals">
                      <p className="hover:underline">My Goals</p>
                    </Link>
                    <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>

                  <button className="flex space-x-4 mt-2 text-green-500 font-medium">
                    <p className="underline">Completed Goal</p>
                    <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>
              </div>
              <div className="space-y-4">
                {goalsList.map((goal) => (
                  <div key={goal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div>
                        <Image src="/donor.png" width={40} height={40}/>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{goal.title}</h3>
                        <p className="text-sm text-gray-500">{goal.description}</p>
                        <div className="flex items-center mt-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-500">{goal.enrolled} enrolled</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center space-x-2 bg-green-100 text-green-500 font-semibold rounded px-5 py-2">
                        Earned<Image src="/coin2.png" width={15} height={15} className="ml-2 mb-1 text-green-500 font-semibold"/>+{goal.points}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Leader board</h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between shadow-lg rounded-half">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-green-500">{index + 1}</span>
                        <div className="w-8 h-8 bg-yellow-500 rounded-full">
                            <Image src="/Amirah.png" width={40} height={40}/>
                        </div>
                        <div>
                          <div className="font-semibold text-black">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.donations}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                       <Image src="/coin2.png" width={20} height={20}/>
                       <div className="text-green-500 font-bold">{user.points}</div>
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
                      <div>
                        <Image src="/donor.png" width={40} height={40}/>
                      </div>
                      <div>
                        <div className="font-semibold text-black">{activity.name}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/Recent-Activity" 
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
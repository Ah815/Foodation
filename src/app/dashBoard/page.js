"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@radix-ui/react-tabs';
import {MoreVertical } from 'lucide-react'
import DonationModal from '../Component/DonationModal';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.7749, // Default latitude
  lng: -122.4194, // Default longitude (San Francisco in this case)
};

const markers = [
  { id: 1, position: { lat: 37.7749, lng: -122.4194 } }, // Example marker 1
  { id: 2, position: { lat: 37.7849, lng: -122.4094 } }, // Example marker 2
];

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

export default function Dashboard() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZuKju7LJeSILF3UoypuWd2dnuqoZWawA",
  });

  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const [activeTab, setActiveTab] = useState('unfinished')
  const [fruitQuantities, setFruitQuantities] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) 

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const menuItems = ['Create Goal', 'Dashboard', 'User Listing', 'My Donors', 'Goals', 'Settings', 'Sign Out']
  const stats = [
    { title: "Today's Receiving", bgColor: "bg-blue-100", value: '7,222', subtext: '+20% from yesterday' },
    { title: "Last Week's Receiving", bgColor: "bg-green-100", value: '7,222', subtext: '+15% from previous week' },
    { title: "Last Month's Receiving", bgColor: "bg-purple-100", value: '7,222', subtext: '+10% from previous month' },
  ]
  const leaderboard = [
    { name: 'Amirah', position: 1, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 2, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 3, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 3, points: 44, donations: '4.5k' },
  ]
  const recentActivity = [
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
  ]
  
  const unfinishedGoals = [
    { title: 'Donate a basket of fruit', description: '2 apples, 4 bananas...', enrolled: '22/40', points: +200 },
    { title: 'Donate a basket of fruit', description: '2 apples, 4 bananas...', enrolled: '22/40', points: +200 },
  ]

  const completedGoals = [
    { title: 'Donate a basket of fruit', progress: 100, target: +200 },
    { title: 'Donate a basket of vegetables', progress: 100, target: +300 },
  ]

  const unfinishedCount = unfinishedGoals.length;
  const completedCount = completedGoals.length;

  const goals = activeTab === 'unfinished' ? unfinishedGoals : completedGoals;

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image src="/image.png" alt="Logo" width={32} height={32}/>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2  text-green-500">
            <Image src="/Icons 1.png" width={20} height={20} className="mr-2"/>
            Dashboard
          </a>
          <a href="/Listing" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/user.png" width={20} height={20} className="mr-2"/>
            My Listing
          </a>
          <a href="/Recievers" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/donors.png" width={20} height={20} className="mr-2"/>         
            My Receivers
          </a>
          <a href="/Goals" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/goals.png" width={20} height={20} className="mr-2"/>
            My Goals
          </a>

          <div className="mt-6">
            <a href="#" className="flex items-center px-4 py-2 text-gray-400">
             <Image src="/setting.png" width={20} height={20} className="mr-2"/>
             Settings
            </a>
          </div>  
          <a href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" width={20} height={20} className="mr-2"/>
            Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 lg:mb-0">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={openModal}
              >
              Start Donating
            </button>
            <div><Image src="/coin.png" alt="Coin" width={40} height={40}/></div>
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
             <Image src="/Ring.png" alt="Notifications" width={50} height={50} />
            </button>
            <div className="flex items-center space-x-2 text-green-500">
              <Image src="/logo.png" alt="User avatar" width={200} height={200}/>
            </div>
          </div>
        </div>

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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`p-4 rounded-lg ${stat.bgColor}`}>
              <p className="text-3xl font-bold mb-1 text-black">{stat.value}</p>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">{stat.title}</h3>
              <p className="text-sm text-green-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Map and Leaderboard */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mb-8">
          <div className="relative flex-grow bg-white p-4">
            <GoogleMap
             mapContainerStyle={mapContainerStyle}
             zoom={12}
             center={center}
            >
             {/* Add markers */}
             {markers.map((marker) => (
             <Marker key={marker.id} position={marker.position} />
             ))}
            </GoogleMap>
          </div>
          <div className="w-1/3 bg-white p-4">
            <h3 className="text-lg font-semibold text-black">Leader board</h3>
            {leaderboard.map((leader, index) => (
              <div key={index} className="flex items-center justify-between mb-4 shadow-lg rounded-half gap-4 mt-3">
                <div className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">{index + 1}.</span>
                  <Image src="/Amirah.png" width={40} height={40} alt={leader.name} className="rounded-full mr-2" />
                  <div>
                    <p className="font-semibold text-black">{leader.name}</p>
                    <p className="text-sm text-gray-500">Donations {leader.donations}</p>
                  </div>
                </div>
                <div className="flex items-center -space-x-1">
                  <Image src="/coin2.png" width={20} height={20}/>
                  <span className="font-bold text-green-700 px-2 py-1 rounded-full">{leader.points}</span>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
              <Link href="/leaderboard" 
               className="text-green-500 font-semibold flex items-center justify-center shadow-white rounded-s-lg">
                View All<Image src="/view.png" width={30} height={30}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Goals and Recent Activity */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-black font-bold">
          <div className="flex-grow bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black">Goals</h3>
            </div>

            {/* Tabs for Unfinished and Completed Goals */}
            <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
                <div className="grid w-full grid-cols-3 mb-6">
                  <button className="flex space-x-4 mt-2 text-green-500 font-medium">
                   <p className="underline">Unfinished Goals</p>    
                   <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>

                  <button className="flex space-x-4 mt-2 text-gray-400 hover:text-green-500 font-medium">
                   <p className="hover:underline">My Goals</p>    
                   <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>

                  <button className="flex space-x-4 mt-2 text-gray-400 hover:text-green-500 font-medium">
                   <p className="hover:underline -ml-12">Completed Goals</p>    
                   <span><Image src="/no.png" width={25} height={25}/></span>
                  </button>
                </div>
                <div value="new">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4 p-4 rounded-lg">
                      <Image
                        src="/donor.png"
                        alt="Fruit basket"
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg">{goal.title}</h3>
                        <p className="text-sm text-gray-500">{goal.description}</p>
                        <div className="flex items-center mt-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-500">{goal.enrolled} enrolled</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Image src="/coin2.png" width={15} height={20} className="-mr-2"/>
                        <div className="text-green-500">+{goal.points}</div>
                          <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                           <Image src="/plus2.png" width={15} height={15}/>
                            <span>
                              Enroll Now
                            </span>
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black">Recent Activity</h3>
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center mb-4 text-black shadow-xl rounded-half">
                <Image src="/donor.png" alt="Activity icon" width={40} height={40} className="mr-4" />
                <div>
                  <p className="font-semibold">{activity.name}</p>
                  <p className="text-sm text-gray-500">{activity.action} • {activity.time}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
              <button className="text-green-500 font-semibold flex items-center mx-auto">
                <Link href="/Recent-Activity">
                  View All
                </Link><Image src="/view.png" width={30} height={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  )
}
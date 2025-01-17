"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GoalCreationModal from '../Component/CreationModal';
import { MoreVertical } from 'lucide-react';
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
];

const stats = [
  { title: "Today's Receiving", value: '7,222', change: '+5% from yesterday', color: 'bg-blue-100' },
  { title: "Last Week's Receiving", value: '7,222', change: '+5% from yesterday', color: 'bg-green-100' },
  { title: "Last Month's Receiving", value: '7,222', change: '+5% from yesterday', color: 'bg-purple-100' },
];

const goal = [
  { id: 1, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas, ...', enrolled: '32/40', points: 200 },
  { id: 2, title: 'Donate a basket of fruit', description: '2 apples, 4 bananas, ...', enrolled: '32/40', points: 200 },
];

const leaderboard = [
  { id: 1, name: 'Amirah', donations: '4.5k', points: 44 },
  { id: 2, name: 'Amirah', donations: '4.5k', points: 44 },
  { id: 3, name: 'Amirah', donations: '4.5k', points: 44 },
  { id: 4, name: 'Amirah', donations: '4.5k', points: 44 },
];

const recentActivity = [
  { id: 1, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 2, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 3, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 4, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
];

export default function DashboardOrg() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZuKju7LJeSILF3UoypuWd2dnuqoZWawA",
  });
 
  const [activeTab, setActiveTab] = useState('unfinished');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goals, setGoals] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateGoal = (newGoal) => {
    const goalWithId = { ...newGoal, id: Date.now() };
    setGoals([...goals, goalWithId]);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center space-x-2">
          <Image src="/image.png" width={32} height={32} alt="Foodation logo" />
          <span className="text-xl font-semibold text-green-500">Foodation</span>
        </div>
        <button className="flex items-center justify-center gap-2 bg-green-500 ml-4 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
          onClick={openModal}
        >
          <Image src="/plus.png" width={15} height={15} className="w-5 h-5" />
          Create Goal
        </button>
        <nav className="mt-8">
          <a href="/Organization-Dashboard" className="flex items-center px-4 py-2 text-green-500">
            <Image src="/Icons 1.png" className="mr-2" width={20} height={20} />Dashboard
          </a>
          <a href="/Organization-Listing" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/user.png" className="mr-2" width={20} height={20} />User Listing
          </a>
          <a href="Organization-Donor" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/donors.png" className="mr-2" width={20} height={20} />My Donors
          </a>
          <a href="/Organization-Goals" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/goals.png" width={20} height={20} className="mr-2" />Goals
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-400 mt-6">
            <Image src="/setting.png" width={20} height={20} className="mr-2" />Settings
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" width={20} height={20} className="mr-2" />Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded"
             onClick={openModal}
            >Start Receiving</button>
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
             <Image src="/Ring.png" alt="Notifications" width={50} height={50} />
            </button>
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" width={200} height={200} alt="User avatar" className="rounded-full"/>
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
            <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
              <p className="text-3xl font-bold mb-1 text-black">{stat.value}</p>
              <h3 className="text-sm text-gray-400">{stat.title}</h3>
              <p className="text-sm font-semibold text-green-500">{stat.change}</p>
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
              <div key={index} className="flex items-center justify-between mb-4 shadow rounded-half gap-4 mt-3">
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
              <Link href="/Organization-Leaderboard" 
               className="text-green-500 font-semibold flex items-center justify-center shadow-white rounded-s-lg">
                View All<Image src="/view.png" width={30} height={30}/>
              </Link>
            </div>
          </div>
        </div>
 
        {/* Goals and Recent Activity */}
        <div className="flex space-x-8">
          <div className="flex-grow bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black">Goals</h3>
              <button className="bg-green-600 text-white px-2 py-1 rounded"
               onClick={openModal}
              >
                Create New goal</button>
            </div>
              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={() => setActiveTab("unfinished")}
                 className="flex space-x-4 mt-2 text-green-500 font-medium">
                 <p className="underline">Unfinished Goals</p>    
                 <span><Image src="/no.png" width={25} height={25}/></span>
                </button>
                <button 
                   onClick={() => setActiveTab("completed")} 
                  className="flex space-x-4 mb-4 px-4 py-2 text-gray-500 hover:text-green-500 font-medium">
                  <p className="hover:underline">Completed Goals</p>
                  <span className="gap-2"><Image src="/no.png" width={25} height={25}/></span>
                </button>
              </div>  
            {goal.map((goal) => (
              <div key={goal.id} className="flex items-center space-x-4 mb-4 p-4 shadow rounded-lg">
                <Image src="/donor.png" width={80} height={80} alt="Fruit basket" className="rounded-lg" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-black">{goal.title}</h3>
                  <p className="text-sm text-gray-500">{goal.description}</p>
                  <div className="flex items-center mt-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">{goal.enrolled} enrolled</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src="/coin2.png" width={20} height={20} alt="Coin" />
                  <span className="text-green-500 font-semibold">+{goal.points}</span>
                </div>
              </div>
            ))}

              {goals.map((goal) => (
                <div 
                  key={goal.id} 
                  className="flex items-center space-x-4 mb-4 p-4 border rounded-lg">
                  <Image src="/Apple.png" width={80} height={80} alt="Goal image" className="rounded-lg"/>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-black">{goal.goalTitle}</h3>
                    <p className="text-sm text-gray-500">{goal.description} 2 apples, 4 bananas, ...</p>
                    <div className="flex items-center mt-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                        <div className= "w-4/5 h-full bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">{goal.enrolled} 32/40 enrolled</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src="/coin2.png" width={20} height={20} alt="Coin icon" />
                    <span className="text-green-500 font-semibold">+{goal.earnPoints}</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-1/3 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black">Recent Activity</h3>
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center mb-4 shadow rounded-half">
                <Image src="/donor.png" width={40} height={40} alt="Activity icon" className="mr-4" />
                <div>
                  <p className="font-semibold text-black">{activity.name}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
              <Link href="/Organization-Activity" className="text-green-500 font-semibold flex items-center justify-center">
                View All
                <Image src="/view.png" width={30} height={30}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GoalCreationModal isOpen={isModalOpen} onClose={closeModal} onCreate={handleCreateGoal}/>
    </div>
  )
}
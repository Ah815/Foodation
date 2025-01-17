"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MoreVertical } from "lucide-react";
import DonationModal from "../Component/DonationModal"; // Import the DonationModal component

const notifications = [
  {
    id: 1,
    title: "Malesuada tellus tincidunt fringilla enim, id mauris.",
    time: "3 mins ago",
  },
  {
    id: 2,
    title: "Malesuada tellus tincidunt fringilla enim, id mauris.",
    time: "3 mins ago",
  },
  {
    id: 3,
    title: "Malesuada tellus tincidunt fringilla enim, id mauris.",
    time: "3 mins ago",
  },
  {
    id: 4,
    title: "Malesuada tellus tincidunt fringilla enim, id mauris.",
    time: "3 mins ago",
  },
  {
    id: 5,
    title: "Malesuada tellus tincidunt fringilla enim, id mauris.",
    time: "3 mins ago",
  },
];
const leaderboardData = [
  { rank: 1, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 2, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 3, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 4, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 5, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 6, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 7, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 8, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 9, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 10, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 11, name: "Alan Coin", donations: "34.5k", points: 44 },
  { rank: 12, name: "Alan Coin", donations: "34.5k", points: 44 },
];

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image src="/image.png" width={32} height={32} />
            <span className="text-xl font-semibold text-green-500">
              Foodation
            </span>
          </div>
        </div>
        <nav className="mt-8">
          <Link href="#" className="flex items-center px-4 py-2 text-green-500">
            <Image src="/Icons 1.png" width={20} height={20} className="mr-2" />
            Dashboard
          </Link>

          <Link href="/Listing" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/user.png" width={20} height={20} className="mr-2" />
            My Listing
          </Link>

          <Link href="Recievers" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/donors.png" width={20} height={20} className="mr-2" />
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
          <a href="#" className="flex items-center px-4 py-2 text-gray-400">
            <Image src="/out.png" width={20} height={20} className="mr-2" />
            Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={openModal} // Open modal on button click
              >
                Start Donating
              </button>
              <Image src="/coin.png" width={40} height={40} alt="Coin" />
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-gray-500 hover:text-gray-700"
              >
                <Image src="/Ring.png" width={40} height={40} />
              </button>
              <Image src="/logo.png" width={200} height={200} alt="Logo" />
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
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
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

        {/* Leaderboard */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Leader board</h2>
              <div className="flex items-center mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"/>
                </div>
                <div className="ml-4 flex items-center text-sm text-black">
                  Sort By <Image src="/sort.png" width={15} height={15} />
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-green-500">
                    <th className="pb-4 font-bold">Rank</th>
                    <th className="pb-4 font-bold">Image</th>
                    <th className="pb-4 font-bold">Name</th>
                    <th className="pb-4 font-bold">Donations</th>
                    <th className="pb-4 font-bold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user) => (
                    <tr key={user.rank} className="border-t">
                      <td className="py-4 text-black">{user.rank}</td>
                      <td className="py-4">
                        <Image src="/Amirah.png" width={32} height={32} />
                      </td>
                      <td className="py-4 text-black">{user.name}</td>
                      <td className="py-4 text-black">{user.donations}</td>
                      <td className="py-4 text-black">{user.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={closeModal} /> {/* Render DonationModal */}
    </div>
  );
}

import Link from 'next/link'
import Image from 'next/image'
import { Bell, ChevronDown, Upload } from 'lucide-react'

const leaderboard = [
  { id: 1, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 2, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 3, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 4, name: 'Amirah', donations: '34.5k', points: 44 },
]

const recentActivity = [
  { id: 1, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 2, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 3, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
  { id: 4, name: 'Donor Name', date: '04 April, 2023 | 04:00 PM' },
]

export default function MyDonorsDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white ">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div><Image src="/image.png" width={40} height={40}/></div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <center>
          <button className="w-[200px] mt-4 px-4 py-2 bg-green-500 text-white rounded">
          <div className="-mb-[19px]"><Image src="/plus.png" width={15} height={15}/></div>
           Create Goal
          </button>
        </center>  
        <nav className="mt-8">
          <a href="/Organization-Dashboard" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            <span className="mr-2">◯</span>
            Dashboard
          </a>
          <a href="Organization-Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            <span className="mr-2">≡</span>
            User Listing
          </a>
          <a href="Organization-Donor" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <span className="mr-2">⊙</span>
            My Donors
          </a>
          <a href="Organization-Goals" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            <span className="mr-2">◎</span>
            Goals
          </a>

          <div className="mt-6">
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            <span className="mr-2">⚙</span>
            Settings
          </a>
          </div>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            <span className="mr-2">↪</span>
            Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">My Donors</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Start Receiving
              </button>
              <div><Image src="/Ring.png" width={40} height={40}/></div>
              <div className="flex items-center space-x-2">
                <div><Image src="/logo.png" width={200} height={200}/></div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 flex">
          {/* Goal Creation Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg mr-8 p-6">
            <h2 className="text-xl font-semibold mb-6 text-black">Goal Title</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="goalTitle" className="block text-sm font-medium text-gray-700">Goal Title</label>
                <input type="text" id="goalTitle" name="goalTitle" className="text-black mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="limitNumber" className="block text-sm font-medium text-gray-700">Limit Number of Individual</label>
                <input type="number" id="limitNumber" name="limitNumber" className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Item 1</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                        <span>Click to upload</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drop file here</p>
                    </div>
                    <p className="text-xs text-gray-500">Supported: .png, .jpg</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="foodItem" className="block text-sm font-medium text-gray-700">Food Item 1</label>
                <input type="text" id="foodItem" name="foodItem" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">Food Quantity</label>
                <input type="number" id="foodQuantity" name="foodQuantity" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <button type="button" className="text-green-600 hover:text-green-500">+ Add More</button>
              <div>
                <label htmlFor="earnPoints" className="block text-sm font-medium text-gray-700">Earn Points</label>
                <input type="number" id="earnPoints" name="earnPoints" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <p className="text-xs text-green-500">* These are the points that individuals will earn after they complete this goal and it has been given approval from the admin.</p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Leader board</h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-green-500">{index + 1}</span>
                        <div><Image src="/Amirah.png" width={40} height={40}/></div>
                        <div>
                          <div className="font-semibold text-black">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.donations}</div>
                        </div>
                      </div>
                      <div className="text-green-500">{user.points}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center text-green-500 mt-4">
                    <Link href="/Organization-Leaderboard">
                    View All
                    </Link>    
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div><Image src="/donor.png" width={40} height={40}/></div>
                      <div>
                        <div className="font-semibold text-black">{activity.name}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center text-green-500 mt-4">
                    <Link href="Organization-Activity">
                      View All
                    </Link>               
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
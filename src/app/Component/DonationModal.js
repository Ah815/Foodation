import React, { useState } from 'react';
import Image from 'next/image';

const DonationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    listingTitle: '',
    cnic: '',
    pickupLocation: '',
    item1: '',
    quantity: '',
    expirationDate: '',
    storageDetails: '',
    shortDescription: ''
  });

  const [storageDetails, setStorageDetails] = useState(['']);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStorageDetailsChange = (index, value) => {
    const newStorageDetails = [...storageDetails];
    newStorageDetails[index] = value;
    setStorageDetails(newStorageDetails);
  };

  const addStorageDetail = () => {
    setStorageDetails([...storageDetails, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ ...formData, storageDetails });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            On every donation you will earn 5 points. These points will help you to improve your rank on leaderboard. You can also earn point by completing goals.
            <span className="text-green-500 font-semibold"> View goals now</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Listing Title</label>
              <input
                type="text"
                name="listingTitle" 
                placeholder="Ex: Bread Loafs"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.listingTitle}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Enter CNIC</label>
              <input
                type="text"
                name="cnic"
                placeholder="Ex: 33100-2045687-0"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.cnic}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Enter Pick-up Location</label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Ex: Gulshan, Karachi"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.pickupLocation}
              />
              <button
                type="button"
                className="text-green-600 hover:text-green-800 font-medium mt-2"
              >
                Auto Detect
              </button>
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Item 1</label>
              <input
                type="text"
                name="item1"
                placeholder="Ex: Tomatos"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.item1}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Upload Food Image</label>
              <div className="mt-1 flex items-center justify-center px-6 border-2 border-gray-300 border-dashed bg-[#EAFAEB7D] rounded-md h-40">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                    >
                      <span>Click to upload</span>
                      <input id="image-upload" name="image-upload" type="file" accept="image/*" className="sr-only" />
                    </label>
                    <p className="text-sm text-gray-600 mt-1">or drop file here</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Supported: .png , .jpg</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Upload Food Video</label>
              <div className="mt-1 flex items-center justify-center px-6 border-2 border-gray-300 border-dashed bg-[#EAFAEB7D] rounded-md h-40">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="video-upload"
                      className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                    >
                      <span>Click to upload</span>
                      <p className="text-sm text-gray-600">or drop file here</p>

                      <input id="video-upload" name="video-upload" type="file" accept="video/*" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Supported: mp4, m4v, mkv</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Quantity</label>
              <input
                type="text"
                name="quantity"
                placeholder="Ex: 2 dozens"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.quantity}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Expiration Date</label>
              <input
                type="date"
                name="expirationDate"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={handleChange}
                value={formData.expirationDate}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Storage Details</label>
              {storageDetails.map((detail, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Short Description about your food..."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                  value={detail}
                  onChange={(e) => handleStorageDetailsChange(index, e.target.value)}
                />
              ))}
              <button
                type="button"
                onClick={addStorageDetail}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                + Add More
              </button>
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Short Description</label>
              <textarea
                name="shortDescription"
                placeholder="Ex: Fresh vegetables from my garden..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="3"
                onChange={handleChange}
                value={formData.shortDescription}
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
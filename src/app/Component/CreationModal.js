import React, { useState } from "react";

const GoalCreationModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    goalTitle: '',
    limitNumber: '',
    earnPoints: '',
    description: '', // Add description field
  });

  const [foodItems, setFoodItems] = useState([{ name: '', quantity: '' }]);
  const [image, setImage] = useState(null); // State for image upload
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFoodItemChange = (index, field, value) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index][field] = value;
    setFoodItems(updatedFoodItems);
  };

  const addFoodItem = () => {
    setFoodItems([...foodItems, { name: '', quantity: '' }]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save the base64 string in state
      };
      reader.readAsDataURL(file); // Read the file and convert to base64
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.goalTitle) errors.goalTitle = "Goal Title is required.";
    if (!formData.limitNumber || formData.limitNumber <= 0) errors.limitNumber = "Limit Number must be a positive number.";
    if (!formData.earnPoints || formData.earnPoints <= 0) errors.earnPoints = "Earn Points must be a positive number.";
    foodItems.forEach((item, index) => {
      if (!item.name) errors[`foodItemName${index}`] = `Food Item ${index + 1} is required.`;
      if (!item.quantity) errors[`foodItemQuantity${index}`] = `Food Quantity for item ${index + 1} is required.`;
    });
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Pass the image along with the form data to onCreate
    onCreate({ ...formData, foodItems, image });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto p-4">
      <div className="bg-white rounded-2xl w-full max-w-md my-8 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Goal Title</label>
              <input
                type="text"
                name="goalTitle"
                placeholder="Ex: Fight Hunger"
                className={`mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 ${errorMessages.goalTitle ? 'border-red-500' : ''}`}
                onChange={handleChange}
                value={formData.goalTitle}
              />
              {errorMessages.goalTitle && <p className="text-red-500 text-xs">{errorMessages.goalTitle}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Limit Number of Individuals</label>
              <input
                type="number"
                name="limitNumber"
                placeholder="Ex:40"
                className={`mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 ${errorMessages.limitNumber ? 'border-red-500' : ''}`}
                onChange={handleChange}
                value={formData.limitNumber}
              />
              {errorMessages.limitNumber && <p className="text-red-500 text-xs">{errorMessages.limitNumber}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Item 1</label>
              <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {image ? (
                    <img
                      src={image}
                      alt="upload"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Click to upload</span>
                          <input
                            id="file-upload"
                            type="file"
                            onChange={handleImageUpload}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drop file here</p>
                      </div>
                      <p className="text-xs text-gray-500">Supported .png, .jpg</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {foodItems.map((item, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-black">Food Item {index + 1}</label>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Ex: Banana"
                    className={`mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 ${errorMessages[`foodItemName${index}`] ? 'border-red-500' : ''}`}
                    value={item.name}
                    onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">Food Quantity</label>
                  <input
                    type="number"
                    placeholder="Ex: 2 dozen"
                    className={`mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 ${errorMessages[`foodItemQuantity${index}`] ? 'border-red-500' : ''}`}
                    value={item.quantity}
                    onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                  />
                </div>
                {errorMessages[`foodItemName${index}`] && <p className="text-red-500 text-xs">{errorMessages[`foodItemName${index}`]}</p>}
                {errorMessages[`foodItemQuantity${index}`] && <p className="text-red-500 text-xs">{errorMessages[`foodItemQuantity${index}`]}</p>}
              </div>
            ))}
            <button type="button" onClick={addFoodItem} className="text-green-500 hover:underline mb-4">
              + Add More
            </button>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Earn Points</label>
              <input
                type="number"
                name="earnPoints"
                placeholder="Ex: 5"
                className={`mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 ${errorMessages.earnPoints ? 'border-red-500' : ''}`}
                onChange={handleChange}
                value={formData.earnPoints}
              />
              {errorMessages.earnPoints && <p className="text-red-500 text-xs">{errorMessages.earnPoints}</p>}
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="text-gray-500 hover:underline">
                Cancel
              </button>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">
                Create Goal
              </button>
            </div>
          </form>
        </div >
      </div>
    </div>
  );
};

export default GoalCreationModal;

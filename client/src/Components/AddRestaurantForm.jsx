import React, { useState } from 'react';

const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., send the data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add a New Restaurant</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-600">Contact Info:</label>
            <input
              type="tel"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddRestaurantForm;

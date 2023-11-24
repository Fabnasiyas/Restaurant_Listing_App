
import React, { useState } from 'react';
import axios from '../Utils/axios.js';

const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Address: '',
    Contact_info: '',
  });

  const [formErrors, setFormErrors] = useState({
    Name: '',
    Address: '',
    Contact_info: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateForm(formData);
    if (Object.values(errors).some((error) => error !== '')) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('/addRestaurants', formData);
      console.log('Form submission successful:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    console.log('Form submitted:', formData);
  };

  const validateForm = (data) => {
    let errors = {
      Name: '',
      Address: '',
      Contact_info: '',
    };

    if (!data.Name.trim()) {
      errors.Name = 'Name is required';
    }

    if (!data.Address.trim()) {
      errors.Address = 'Address is required';
    }

    if (!data.Contact_info.trim()) {
      errors.Contact_info = 'Contact Info is required';
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              required
              className={`mt-1 p-2 border rounded-md w-full ${
                formErrors.Name ? 'border-red-500' : ''
              }`}
            />
            {formErrors.Name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              required
              className={`mt-1 p-2 border rounded-md w-full ${
                formErrors.Address ? 'border-red-500' : ''
              }`}
            />
            {formErrors.Address && (
              <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-600">
              Contact Info:
            </label>
            <input
              type="text"
              id="contactInfo"
              name="Contact_info"
              value={formData.Contact_info}
              onChange={handleInputChange}
              required
              className={`mt-1 p-2 border rounded-md w-full ${
                formErrors.Contact_info ? 'border-red-500' : ''
              }`}
            />
            {formErrors.Contact_info && (
              <p className="text-red-500 text-sm mt-1">{formErrors.contactInfo}</p>
            )}
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


import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UpdateRestaurantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Form has errors. Update cancelled.');
      return;
    }

    try {
      const response = await axios.put(`/updateRestaurant/${id}`, formData);
      console.log('Partial Update response:', response);

      if (!response.data.err) {
        navigate('/');
      } else {
        console.error('Error updating restaurant:', response.data.err);
      }
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`/getRestaurant/${id}`);
        if (!response.data.err) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurantData();
  }, [id]);

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

    if (typeof data.Contact_info === 'string' && !data.Contact_info.trim()) {
      errors.Contact_info = 'Contact Info is required';
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Update Restaurant</h2>
      <form onSubmit={handleUpdate}>
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
            className={`mt-1 p-2 border rounded-md w-full ${formErrors.Name ? 'border-red-500' : ''}`}
          />
          {formErrors.Name && <p className="text-red-500 text-sm mt-1">{formErrors.Name}</p>}
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
            className={`mt-1 p-2 border rounded-md w-full ${formErrors.Address ? 'border-red-500' : ''}`}
          />
          {formErrors.Address && <p className="text-red-500 text-sm mt-1">{formErrors.Address}</p>}
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
            className={`mt-1 p-2 border rounded-md w-full ${formErrors.Contact_info ? 'border-red-500' : ''}`}
          />
          {formErrors.Contact_info && <p className="text-red-500 text-sm mt-1">{formErrors.Contact_info}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateRestaurantForm;

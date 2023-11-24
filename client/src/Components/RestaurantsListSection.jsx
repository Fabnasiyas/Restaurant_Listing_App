import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from '../assets/Banner2.jpg';
import axios from '../Utils/axios.js';
const RestaurantsListSection = () => {
  const restaurants = [
    {
      _id: '1',
      name: 'Restaurant 1',
      cuisine: 'Italian',
      rating: 4.5,
      isBooked: false,
    },
    {
      _id: '2',
      name: 'Restaurant 2',
      cuisine: 'Mexican',
      rating: 3.8,
      isBooked: true,
    },
  ];
  const [restaurant, setRestaurant] = useState({});

  const fetchRestaurantDetails = async () => {
    try {
      const response = await axios.get('/getAllRestaurant'); 
      if (!response.data.err) {
        setRestaurant(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-semibold mt-10 mb-10 text-blue-900">Our Restaurants</h1>
      <div className="flex flex-wrap justify-center mt-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="flex flex-col items-center max-w-xs bg-white shadow-md rounded-lg overflow-hidden mx-4 my-4">
            <img src={restaurantImage} alt={`restaurantImage`} className="object-cover w-full h-40" />
            <div className="flex flex-col items-center p-4 mb-4">
              <h2 className="text-lg font-semibold text-center text-blue-900">{restaurant.name}</h2>
              <p className="mt-2 text-blue-900">Cuisine: {restaurant.cuisine}</p>
              <p className="mt-2 text-blue-900">Rating: {restaurant.rating}</p>
              <div className="mt-4 flex">
               
                
                  <Link to={`/update/${restaurant._id}`}>
                    <button className="px-4 py-1 bg-blue-900 hover:bg-blue-600 text-white">
                      Update
                    </button>
                  </Link>
                
                <Link to={`/delete/${restaurant._id}`}>
                  <button className="px-4 py-1 bg-yellow-400 hover:bg-yellow-500 text-white">
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/allrestaurantsPage">
          <p className='text-blue-900'>View more...</p>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantsListSection;

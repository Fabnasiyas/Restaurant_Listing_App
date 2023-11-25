import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from '../assets/b2.jpg';
import axios from '../Utils/axios.js';
const RestaurantsListSection = () => {

  const [restaurants, setRestaurants] = useState([]);
 
  const deleteRestaurant=async(restaurantId)=>{
    try {
      const response = await axios.delete(`/deleteRestaurant/${restaurantId}`);
          console.log('Delete response:', response);
          if (!response.data.err) {
            setRestaurants((prevRestaurants) =>
              prevRestaurants.filter((restaurant) => restaurant._id !== restaurantId)
            );
          }
          window.location.reload();
        } catch (error) {
          console.error('Error deleting restaurant:', error);
        }
    }
  const fetchRestaurantDetails = async () => {
    try {
      const response = await axios.get('/getAllRestaurant');
      let restaurants = response.data
      console.log(restaurants, '......................');
      if (!response.data.err) {
        setRestaurants(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails()
  }, []);

  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-semibold mt-10 mb-10 text-[#352F44]">Our Restaurants</h1>
      <div className="flex flex-wrap justify-center mt-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="flex flex-col items-center max-w-xs bg-white shadow-md rounded-lg overflow-hidden mx-4 my-4">
            <img src={restaurantImage} alt={`restaurantImage`} className="object-cover w-full h-40" />
            <div className="flex flex-col items-center p-4 mb-4">
              <h2 className="text-lg font-semibold text-center text-[#352F44]">{restaurant.Name}</h2>
              <p className="mt-2 text-[#352F44]">Address: {restaurant.Address}</p>
              <p className="mt-2 text-[#352F44]">Contact Info: {restaurant.Contact_info}</p>
              <div className="mt-4 flex ">


                <Link to={`/update/${restaurant.id}`}>
                  <button className="px-4 py-1 bg-[#5C5470] hover:bg-[#352F44] hover:text-white text-[#FAF0E6] mr-2">
                    Update
                  </button>
                </Link>

                  <button className="px-4 py-1 bg-[#B9B4C7] hover:bg-[#352F44] hover:text-white text-[#352F44]" onClick={()=>deleteRestaurant(restaurant.id)}>
                    Delete
                  </button>

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

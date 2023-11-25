import React from 'react';
import Image from '../assets/Banner2.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
  const bannerHeight = "600px"; 

  return (
    <div className="relative mt-1" >

      <div
        className="h-full bg-cover bg-center"
        style={{
          height: bannerHeight,
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
          <h1 className="text-6xl text-[#FAF0E6] mb-4 font-bold">Bringing class to cuisine</h1>
          <p className="text-lg text-[#FAF0E6] font-bold">We are always here to serve you</p>
          <Link to='/addRestaurant'>
          <button className="bg-[#5C5470] text-[#faf0e6] px-4 py-2 mt-4 rounded transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800">Add Restaurant</button>
          </Link>
        </div>
      </div>

    </div>

  );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="shadow-md" style={{ height: '100px', backgroundColor: '#352F44', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center mt-10">
              <div className="flex-shrink-0">
                <Link to="/">
                  {/* <img src={logo} alt="Logo" className="h-12 w-auto" /> */}
                </Link>
              </div>
            </div>
            <div className="hidden md:block mt-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-[#FAF0E6]">
                  <span className="py-2.5 px-5 text-sm font-medium hover:bg-gray-600  rounded-full">
                    Home
                  </span>
                </Link>
                <Link to="/" className="text-[#FAF0E6]">
                  <span className="py-2.5 px-5 text-sm font-medium hover:bg-gray-600  rounded-full">
                    About Us
                  </span>
                </Link>
                <Link to="/" className="text-[#FAF0E6]">
                  <span className="py-2.5 px-5 text-sm font-medium hover:bg-gray-600  rounded-full">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

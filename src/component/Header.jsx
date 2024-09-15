import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { AiOutlineDown, AiOutlineUp, AiOutlineRight } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { FaGlobe } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDropdown = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
  className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-transform transform ${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } md:hidden`}
>
  <div className="bg-white h-full w-64 p-6 shadow-lg relative">
    {/* Sidebar Close Button */}
   

    {/* Sidebar Top Section with Globe and Cart */}
    <div className="flex justify-around items-center gap-4 mt-8">
    <button
      className=" text-gray-600"
      onClick={toggleSidebar}
    >
      <RxCross2 className="text-2xl font-bold" />
    </button>
      <a href="#" className="flex items-center gap-2 hover:underline font-bold">
        <FaGlobe className="text-lg" />
        <p>IN/INR</p>
      </a>
      <hr className='flex-col '/>
      <a href="#" className="flex items-center gap-2 hover:underline font-bold">
        <FaShoppingCart className="text-lg" />
        <p>Cart</p>
      </a>
    </div>

    <hr className="my-6" />

    {/* Sign In and Sign Up Section */}
    <div className="flex gap-4 mb-8 justify-around">
      <a href="#" className="flex items-center gap-2 hover:underline">
        <FaUser className="text-[12px]" />
        <p>Sign in</p>
      </a>
      <a href="#" className="bg-black text-white py-1 px-4 hover:bg-gray-700 text-center text-[12px] rounded-full font-bold">
        Sign up for free
      </a>
    </div>

    <hr className="my-6" />

    {/* Sidebar Links */}
   
    <ul className="space-y-6">
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Products</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Start Selling</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Tools and Apps</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Pricing</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Resources</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">Pro Sellers</a>
      </li>
      <li className="text-lg font-medium text-gray-700">
        <a href="#" className="hover:underline">GelatoConnect</a>
      </li>
    </ul>
  </div>
</div>


      {/* Top bar with the free shipping banner */}
      <div className="bg-black text-white text-sm flex justify-center py-1">
        <a href="#" className="hover:underline">
          FREE SHIPPING for orders over $300. Order today
        </a>
      </div>

      {/* Main header section */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Sidebar Toggle Button */}
        <button className="text-xl md:hidden" onClick={toggleSidebar}>
          <FaBars />
        </button>

        {/* Logo */}
        <div>
          <img src='/image/logo.svg' alt='logo' className='w-[130px]' />
        </div>

        {/* Right section icons */}
        <div className='hidden md:flex items-center gap-10 font-bold'>
          <a href="#" className='flex items-center gap-2 hover:underline'>
            <RiCustomerServiceFill  className='text-lg' />
            <p>Contact us</p>
          </a>
          <a href="#" className='flex items-center gap-2 hover:underline font-bold'>
            <FaGlobe  className='text-lg' />
            <p>IN/INR</p>
          </a>
          <a href="#" className='flex items-center gap-2 hover:underline font-bold'>
            <FaShoppingCart className='text-lg' />
            <p>Cart</p>
          </a>
          <a href="#" className='flex items-center gap-2 hover:underline'>
            <FaUser className='text-lg' />
            <p>Sign in</p>
          </a>
          <a href="#" className="bg-black text-white py-1 px-4 rounded hover:bg-gray-700">
            Sign up for free
          </a>
        </div>
      </div>
      <hr />

      {/* Navigation links section */}
      <div className="hidden md:flex justify-start ml-[150px] font-bold items-center gap-8 text-sm py-4 relative text-lg whitespace-nowrap">
        {/* Dropdown Navigation Menu */}
        <div
          className="relative"
          onMouseEnter={() => handleDropdown(1)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#" className="hover:underline flex items-center gap-[4px]">
            Products {openDropdown === 1 ? <AiOutlineUp /> : <AiOutlineDown />}
          </a>
          {openDropdown === 1 && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-6 w-[200px]">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Bestsellers
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Mens clothing
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Womens clothing
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Kids & baby clothing
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Wall art
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Calendars
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Cards
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Photo books
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Hats
                  <AiOutlineRight />
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Start Selling Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleDropdown(2)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#" className="hover:underline flex items-center gap-[4px]">
            Start selling {openDropdown === 2 ? <AiOutlineUp /> : <AiOutlineDown />}
          </a>
          {openDropdown === 2 && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-6 w-[200px]">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Print on demand
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Setup your business
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Sell custom products
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Integrations
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Shipping and delivery
                  <AiOutlineRight />
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Partner service
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Custom packaging
                </li>
                <li className="flex items-center justify-between hover:bg-gray-100 p-4 rounded cursor-pointer">
                  Move your products
                </li>
              </ul>
            </div>
          )}
        </div>

       

        {/* Pricing Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdown(3)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#" className="hover:underline flex items-center gap-[4px]">
            Pricing {openDropdown === 3 ? <AiOutlineUp /> : <AiOutlineDown />} 
          </a>
          {openDropdown === 3 && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-6 w-[200px]">
              <ul className="flex flex-col gap-4">
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Pricing details</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Bulk pricing</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Custom pricing</li>
              </ul>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdown(4)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#" className="hover:underline flex items-center gap-[4px]">
            Resources {openDropdown === 4 ? <AiOutlineUp /> : <AiOutlineDown />} 
          </a>
          {openDropdown === 4 && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-6 w-[200px]">
              <ul className="flex flex-col gap-4">
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Blog</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Community</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Events</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Help center</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">API documentation</li>
                <li className="hover:bg-gray-100 p-4 rounded cursor-pointer">Support</li>
              </ul>
            </div>
          )}
        </div>

        <a href="#" className="hover:underline">
          Help
        </a>
      </div>
    </div>
  );
}

export default Header;

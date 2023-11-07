import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 w-screen mx-auto px-6 bg-white text-[#6939bb]">
      <Link to="/" className="flex items-center hover">
        <span className=" flex flex-row-reverse mt-0 mr-4 pb-0 items-center hover self-center font-poppins text-4xl font-semi-bold whitespace-nowrap dark:text-[#0D124B]">
          <span><img
            src="images/scan.png"
            className="h-16 pl-2 mt-1 md:h-32 sm:h-22"
            alt="logo"
          /></span>
        </span>
      </Link>
     
      <ul className="hidden md:flex">
        <ul className="flex flex-col p-4 mt-4 bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium dark:border-gray-700">
          <li>
            <Link
              to="/ourfood"
              className="block py-2 pl-3 pr-4 mt-2  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Our food
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block py-2 pl-3 pr-4 mt-2  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </Link>
          </li>
       
          <li>
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 mt-2  text-gray-700 rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 mt-2  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <ul className={
        nav
          ? "fixed left-0 top-0 w-[70%] mt-0  px-4 h-auto rounded-r-md b-[#6939bb] bg-white ease-in-out duration-500 md:hidden z-50 "
          : "fixed left-[-100%] z-50"
      }
      >

        <Link to="/" className="flex items-center hover ml-4">
          <span className=" flex flex-row-reverse items-center mt-6 mr-4 hover self-center font-poppins text-4xl font-semi-bold whitespace-nowrap dark:text-[#0D124B]">
            <span> <img
              src="images/scan.png"
              className="h-24 pl-2 mt-2 sm:h-32"
              alt="logo"
            /></span>
          </span>
        </Link>
        <ul className="flex flex-col p-4 mt-4 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-[#FFFFFF] dark:border-gray-700">
          <li className='border-[#6939bb]'>
            <Link
              to="/consulting"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Our food
            </Link>
          </li>
          <li className='border-[#6939bb]'>
            <Link
              to="/services"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </Link>
          </li>
          <li className='border-[#6939bb]'>
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About us
            </Link>
          </li>
          <li className='border-[#6939bb]'>
            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;


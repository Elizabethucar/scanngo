import React from "react"
import { Link } from "react-router-dom"
import {FaInstagram, FaLinkedinIn} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="w-full pt-2 pb-12 px-8 grid relative lg:grid-cols-3 md:grid-cols-3 gap-8 text-gray-300 bg-green-700 bottom-0">
      <div>
        <div className="flex items-center hover pt-2 ">

          <span className=" flex flex-row-reverse mt-2 mb-8  items-center hover self-center font-poppins text-4xl font-semi-bold whitespace-nowrap dark:text-[#f9fafb]">
            <span> <img
              src="./images/scan.png"
              className="h-12  md:h-32"
              alt="logo"
            /></span>
          </span>

        </div>

        <p className="pb-8 flex flex-row">Scan, Swish, Eat!</p>


        <div className="flex mt-2">
          <Link to="https://www.linkedin.com/in/scanngo-p%C3%A5-jobbet-bb4a62188/">
            <FaLinkedinIn size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
          <Link to="https://www.instagram.com/scaneatgo">
            <FaInstagram size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
          <Link to="https://twitter.com/Scanngo_sthlm">
            <FaXTwitter size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
         
        </div>
      </div>

       <div className="md:grid grid-flow-row-dense grid-cols-5 my-auto text-start md:ml-12">

        <div>
          <Link to='/ourfood'>
            <h6 className="font-medium text-white md:hover:text-slate-200">Meny</h6>
          </Link> 
        </div>

        <div>
          <Link to="services">
            <h6 className="font-medium text-white hover:text-slate-200 ">Tjänster</h6>
          </Link> 
         </div> 
         <div>
          <Link to="about">
            <h6 className="font-medium text-white  hover:text-slate-200 ">Om oss</h6>
          </Link> 
         </div> 
        
         <div>
          <Link to="partners">
            <h6 className="font-medium text-white  hover:text-slate-200 ">Partners</h6>
          </Link> 
         </div> 
         <div>
          <Link to="faq">
            <h6 className="font-medium text-white  hover:text-slate-200 ">FAQ:s</h6>
          </Link> 
         </div> 
      </div>
   
    
      <div className=" lg:mt-28 lg:ml-20 md:pt-12 md:ml-[49%] text-start md:text-end ">
        <p className="text-white"> Scan´ N Go</p>
        <p className="text-white"> Stockholm</p>
        <p className="text-white"> (+46) 707 122 620 </p>
        <p className="text-white"> (+46) 708 802 306</p>
        <div className="mr-32">
        <a className='text-white underline underline-offset-8  absolute mr-32' href="mailto:info@scanngo.se">info@scanngo.se</a>

        </div>
      </div>
        <div className="flex lg:flex-row  md:flex-row ">
        <p className="md:text-sm text-gray-400 sm: text-xs text-start mt-8">© 2023 Scan´N Go. All Rights Reserved </p>
      </div>
    </div>

  )
}

export default Footer;
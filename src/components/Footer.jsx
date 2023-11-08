import React from "react"
import { Link } from "react-router-dom"
import {
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn,
  FaSlack,
} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="w-full pt-2 pb-2 px-8 grid lg:grid-cols-3 md:grid-cols-3 gap-8 text-gray-300 bg-[#06632e] bottom-0">
      <div>
        <div className="flex items-center hover pt-2">

          <span className=" flex flex-row-reverse mt-2 mb-8 items-center hover self-center font-poppins text-4xl font-semi-bold whitespace-nowrap dark:text-[#f9fafb]">
            <span> <img
              src="images/scan.png"
              className="h-12 pl-2 mt-2 md:h-32"
              alt="logo"
            /></span>
          </span>

        </div>

        <p className="pb-8 flex flex-row">Scan, Swish, Eat!</p>


        <div className="flex mt-2">
          <Link to="">
            <FaLinkedinIn size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
          <Link to="">
            <FaInstagram size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
          <Link to="">
            <FaTwitterSquare size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
          <Link to="">
            <FaSlack size={30} className="mr-4 hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>

       {/* <div className="grid grid-flow-row-dense grid-cols-4">
       <div className=""> */}
        {/* s
        {/*  <ul>
            <li className="py-2 text-sm">Pricing</li>
          </ul> */}
        {/* </div> */}

        {/* <div>
          <Link to='/about'>
            <h6 className="font-medium text-gray-400">About</h6>
          </Link> */}
        {/*  <ul>
            <li className="py-2 text-sm">Private Policy</li>
          </ul> */}
        {/* </div> */}

        {/* <div>
          <Link to="https://www.sudosweden.com/">
            <h6 className="font-medium text-gray-400 md:hover:text-slate-200">Company</h6>
          </Link> */}
        {/*   <ul>
        <Link to="about">
            <li className="py-2 text-sm">About</li>
            </Link>
          </ul> */}
        {/* </div> */}


        {/*    <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
          </ul>
        </div> 
      </div>*/}
    <div className="flex lg:flex-row mt-4 md:pt-[40%] flex-row">
        <p className="md:text-sm md:ml-16 text-sm">© 2023 Scan and Go. All Rights Reserved </p>
      </div>
    
      <div className=" lg:mt-28 lg:ml-20 md:pt-12 md:ml-[49%]  ">
        <p className="text-white"> Scan and Go</p>
        <p className="text-white"> Stockholm</p>
        <p className="text-white"> (+46) 707 122 620 </p>
        <p className="text-white"> (+46) 708 802 306</p>
        <div className="mr-32">
        <a className='text-white underline underline-offset-8 m absolute mr-32' href="mailto:info@scanngo.se">info@scanngo.se</a>

        </div>
     
 
      </div>
     
      
      <div className='max-w-[1000px] mt-[-1196px] shadow w-auto mx-auto text-center flex flex-col'>
        
      </div>
    </div>

  )
}

export default Footer;
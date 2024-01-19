import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Food= () => {
  useEffect(()=>{
  AOS.init({duration:1200})
  })

  return (
    <div  data-aos="fade-up" className='bg-gradient-to-l from-[#06632e]  to-[#9dc7ae] relative'>
        <div className='w-full py-16 text-[#0D124B] px-4'>
          <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 relative'>
          <span><img
            src="images/walltall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="wallenberg"
          /></span>
            <span><img
            src="images/laxtall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="salmon"
          /></span>
            <span><img
            src="images/köttbtall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="meatballs"
          /></span>
          </div>
        </div>

      </div>

  )
}

export default Food

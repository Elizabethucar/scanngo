import React from 'react'
import { Link } from 'react-router-dom'

const Food= () => {
  return (
    <div className='bg-gradient-to-l from-[#06632e]  to-[#9dc7ae] '>
        <div className='w-full py-16 text-[#0D124B] px-4'>
          <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 relative'>
          <span><img
            src="images/walltall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
            <span><img
            src="images/laxtall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
            <span><img
            src="images/köttbtall.jpg"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
          </div>
        </div>

      </div>

  )
}

export default Food

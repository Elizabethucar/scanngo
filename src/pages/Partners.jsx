import React  from 'react'
import { Link } from 'react-router-dom'


const Partners = () => {


  return (
    <div className="w-full py-16 px-10  mt-28 4xl:pr-[23%]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 ">
     
        <div className="flex flex-col justify-center sm: mx-auto ">
          <p className="text-green-700  uppercase font-bold">
            Scan´n Go
          </p>
          <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
            Samarbetspartner 
          </h1>
          <p>
            
    
          </p>
          <Link to='https://www.cygrids.com/se' className='my-auto'>
        <img
          src="./images/cygrids-logo-dark.png" 
          alt="cygrids-logo"
          className="w-80px mx-auto bg-white relative object-fit rounded-lg mt-12  hover:scale-105 duration-300 "
        />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Partners
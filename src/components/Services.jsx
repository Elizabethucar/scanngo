import Mera from './Mera'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Services = () => {

  useEffect(()=>{
    AOS.init({duration:1500})
  })

  return (

 <>
 <div data-aos="fade-up" className="pt-0 flex flex-col relative pb-16 mb-30 mt-12 ">
    <div>
        <img src="./images/spice.jpg" alt="branches" className='absolute opacity-50 w-full h-[100%] object-cover
        ' />
        </div>
        <div className="flex flex-col justify-center p-8">
        <h1 className="md:text-5xl sm:text-3xl mt-36  text-orange-700 text-4xl font-bold py-2 z-0">
              Våra tjänster
            </h1>
       
            <h1 className="md:text-5xl sm:text-3xl mt-12 text-gray-900 text-2xl font-bold py-2 z-0">
              Vi tänker på maten så ni slipper!
            </h1>
            <p className="text-3xl mt-12 z-0 font-bold text-gray-900">
             Spara tid och pengar
            </p>
            <a
              className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] mt-32 rounded-md font-medium my-6 mx-auto px-6 py-3 z-0"
              href="/contact"
            >
              Kontakta oss
            </a>
    
       </div>
       </div>
       <Mera />
       </>
  )
}

export default Services;
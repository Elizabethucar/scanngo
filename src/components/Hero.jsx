
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Hero = () => {
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  return (

 
    <div className="pt-0 flex flex-col relative md:pb-48 mb-12  mt-12 md:mt-24 ">
    <div>
        <img src="./images/knife.jpg" alt="knife on board" className='fixed opacity-70 w-full h-[100%] object-cover z-0
        ' />
        </div>
        <div  data-aos="fade-up"className="flex flex-col justify-center p-8">
        <h1 className="md:text-5xl sm:text-3xl mt-36  text-orange-700 text-4xl font-bold py-2 z-0">
              Scan´N Go
            </h1>
       
            <h1 className="md:text-5xl sm:text-3xl mt-12 text-gray-700 text-2xl font-bold py-2 z-0">
              Färsk mat med naturliga ingredienser
            </h1>
            <p className="text-3xl mt-12 z-0 font-bold text-gray-700">
             Nyttiga matlådor på jobbet! 
            </p>
            <a
              className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] mt-32 rounded-md font-medium my-6 mx-auto px-6 py-3 z-0"
              href="/ourfood"
            >
              Meny
            </a>
       </div>
       </div>
  )
}

export default Hero;
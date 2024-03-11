import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import {FaPhoneFlip} from "react-icons/fa6"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Contact = () => {
  const [captcha, setCaptcha] = useState(false);

  useEffect(()=>{
    AOS.init({duration:1500})
  })

  return (
    <div className="w-full py-16 px-10 mt-32 mx-auto 4xl:pr-[23%] mb-24">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
      <img data-aos="flip-left"
        src="./images/kyl.jpg" 
        alt="A computer"
        className="w-[90%] h-[90%]  bg-white relative object-fit rounded-lg sm: mx-auto  "
      />
      {<div data-aos="zoom-in" className="flex flex-col justify-center mx-auto md:items-center md:w-full h-[90%]">
        <p className="text-[#06632e] uppercase font-bold mt-24 md:mt-12 md:pt-12 md:mb-3">
              Kontakta oss
            </p>
            <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
              Jonas
            </h1>
          
            <p className="text-center">
            <span className="inline-block mt-2 mx-1 animate-bounce">
              <FaPhoneFlip  />
            </span>
            <span className="inline-block"> +46 707 122 620</span>
           
          </p>
          <p className="text-center">
            <span className="inline-block mt-2 mx-1 animate-bounce">
              <FaPhoneFlip  />
            </span>
            <span className="inline-block"> +46 708 802 306</span>
           
          </p>
          
            <ReCAPTCHA className=" mt-8 md:ml-8"
                  sitekey="6LdH9F4iAAAAAGuqxAVOwTGsRTIa0YDpFJ8f6Ii3"
                  onChange={() => setCaptcha(!captcha)}
                />
                {!captcha ? (
                 <a
                 className="bg-green-700 text-[#FFFFFF] pointer-events-none rounded-md font-medium my-14 mx-auto px-6 py-3  hover:bg-orange-600 "
                 href="mailto:info@scanngo.se"
               >
                 Skicka email
               </a>
                ) : (
                  <a
                  className="bg-green-600 text-[#FFFFFF] rounded-md font-medium my-14 mx-auto px-6 py-3 hover:bg-orange-600 "
                  href="mailto:info@scanngo.se"
                >
                  Skicka email
                </a>
                )}
       </div>}
    </div>
  </div>
         

  )
}

export default Contact;
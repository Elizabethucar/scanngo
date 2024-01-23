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
    
     
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mr-18 pl-0 mt-12">
          <img
            src='../images/samarbete.png'
            alt="two hands holding"
            className="w-[100%] h-[100%] mx-auto bg-white relative object-fit "
          />
          <div data-aos="zoom-in" className="flex flex-col justify-center md:items-center">
            <p className="text-[#06632e]  uppercase font-bold">
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
          
            <ReCAPTCHA className="ml-8 mt-8"
                  sitekey="6LdH9F4iAAAAAGuqxAVOwTGsRTIa0YDpFJ8f6Ii3"
                  onChange={() => setCaptcha(!captcha)}
                />
                {!captcha ? (
                 <a
                 className="bg-green-700 text-[#FFFFFF] pointer-events-none rounded-md font-medium my-14 mx-auto px-6 py-3  hover:bg-orange-600"
                 href="mailto:info@scanngo.se"
               >
                 Skicka email
               </a>
                ) : (
                  <a
                  className="bg-green-600 text-[#FFFFFF] rounded-md font-medium my-14 mx-auto px-6 py-3  hover:bg-orange-600"
                  href="mailto:info@scanngo.se"
                >
                  Skicka email
                </a>
                )}
           
          </div>
        </div>
     

  )
}

export default Contact;
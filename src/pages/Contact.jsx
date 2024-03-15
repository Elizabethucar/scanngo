import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import {FaPhoneFlip} from "react-icons/fa6"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import React from "react";
import {
  SiFacebook,
  SiLinkedin,

} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { FcInTransit,FcGoogle ,FcMultipleSmartphones,FcBullish,FcDepartment ,FcPlanner,FcReadingEbook,FcReading,FcLineChart } from "react-icons/fc";
import { SlSocialLinkedin } from "react-icons/sl";


const Contact = () => {
  const [captcha, setCaptcha] = useState(false);
  useEffect(()=>{
    AOS.init({duration:1500})
  })
  return (
    <div className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-24 mb-24">
  <div className="divide-y divide-neutral-900 border border-neutral-900">

    <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={FcDepartment} href="#" />
        <LinkBox Icon={FcBullish } href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={FcReading} href="#" />
        <LinkBox Icon={FcGoogle } href="#" />
        <LinkBox Icon={FcMultipleSmartphones} href="#" />
        <LinkBox Icon={FcPlanner} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={FcInTransit} href="#" />
        <LinkBox Icon={FcReadingEbook} href="#" />
        <LinkBox Icon={SlSocialLinkedin} href="#" />
      </div>
    </div>
  </div>

  <div data-aos="zoom-in" className="flex flex-col justify-center mx-auto md:items-center md:w-full h-[90%] ">
    <p className="text-[#06632e] uppercase font-bold mt-24 md:mt-12 md:pt-12 md:mb-3">
      Kontakta oss
    </p>
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
      Jonas
    </h1>

    <p className="text-center">
      <span className="inline-block mt-2 mx-1 animate-bounce">
        <FaPhoneFlip />
      </span>
      <span className="inline-block"> +46 707 122 620</span>
    </p>
    <p className="text-center">
      <span className="inline-block mt-2 mx-1 animate-bounce">
        <FaPhoneFlip />
      </span>
      <span className="inline-block"> +46 708 802 306</span>
    </p>

    <ReCAPTCHA
      className="mt-8 md:ml-8"
      sitekey="6LdH9F4iAAAAAGuqxAVOwTGsRTIa0YDpFJ8f6Ii3"
      onChange={() => setCaptcha(!captcha)}
    />
    {!captcha ? (
      <a
        className="bg-green-700 text-[#FFFFFF] pointer-events-none rounded-md font-medium my-14 mx-auto px-6 py-3 hover:bg-orange-600"
        href="mailto:info@scanngo.se"
      >
        Skicka email
      </a>
    ) : (
      <a
        className="bg-green-600 text-[#FFFFFF] rounded-md font-medium my-14 mx-auto px-6 py-3 hover:bg-orange-600"
        href="mailto:info@scanngo.se"
      >
        Skicka email
      </a>
    )}
  </div>
</div>

  
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
    
  );
};

  /* return (
    <div className="w-full py-16 px-10 mt-32 mx-auto 4xl:pr-[23%] mb-24">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
   
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
         

  ) */


export default Contact;
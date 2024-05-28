import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Food = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-l from-[#06632e]  to-[#9dc7ae] relative"
    >
      <div className="w-full py-16 text-[#0D124B] px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 relative">
          <span>
            <img
              src="images/flankstek.png"
              className="h-18  p-2 md:pr-6 mt-1 md:h-22 sm:h-22"
              alt="flankstek"
            />
          </span>
          <span>
            <img
              src="images/oxfile.png"
              className="h-18 p-2 mt-1 md:h-22 sm:h-22"
              alt="oxfilepasta"
            />
          </span>
          <span>
            <img
              src="images/biffstroganoff.png"
              className="h-18 p-2 md:pl-8 mt-1 md:h-22 sm:h-22"
              alt="biffstroganoff"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Food;

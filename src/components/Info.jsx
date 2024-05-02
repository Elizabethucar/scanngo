import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="bg-slate-200 mb-12 relative">
      <div data-aos="zoom-in" className="w-full py-8 text-[#0D124B] px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 relative items-center">
          <div className="text-center font-medium mr-4">
            <span>
              <img
                src="images/menu.jpg"
                className="h-16 pl-2 mt-4 md:h-32 sm:h-16 mx-auto "
                alt="menu"
              />
            </span>
            <h1 className="font-bold text-green-700">Brett utbud</h1>
            <p>Med olika smaker och innehåll: kyckling, kött, pasta & BBQ </p>
          </div>
          {/*  <div className='text-center font-medium mr-4'>
          <span><img
            src="images/gluten.jpg"
            className="h-16 pl-2 mt-1 md:h-32 sm:h-16 mx-auto"
            alt="gluten"
          /></span>
          <h1 className='font-bold text-green-700'>Gluten- & laktosfritt</h1>
          <p>80% glutenfria matlådor 95% laktosfria matlådor</p>
          </div> */}
          <div className="text-center font-medium mr-4 ">
            <span>
              <img
                src="images/prot.jpg"
                className="h-16 pl-2 mt-0 md:h-32 sm:h-16 mx-auto "
                alt="protein"
              />
            </span>
            <h1 className="font-bold text-green-700">Bra näringsvärde</h1>
            <p>Kalorier och macros (protein, kolhydrater, fett)</p>
          </div>
          <div className="text-center font-medium mr-4">
            <span>
              <img
                src="images/god.jpg"
                className="h-16 pl-2 mt-4 md:h-32 sm:h-16 mx-auto"
                alt="yummy logo"
              />
            </span>
            <h1 className="font-bold text-green-700">Vällagad mat</h1>
            <p>
              Noga valda råvaror som sammansätts med omtanke, kvalitet och
              hanverk är viktigt för oss{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

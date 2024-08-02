import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faq = () => {
  const [showdiv, setShowdiv] = useState(false);
  const [showdiv1, setShowdiv1] = useState(false);
  const [showdiv2, setShowdiv2] = useState(false);
  const [showdiv3, setShowdiv3] = useState(false);
  const [showdiv4, setShowdiv4] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="w-full bg-white py-16 px-12 mt-12 relative">
      <div className="flex flex-col justify-center">
        <p className="text-orange-600 uppercase font-bold text-3xl mt-24">
          Scan´n Go
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">
          Frågor och svar
        </h1>

        <button
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white  rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0"
          onClick={() => {
            setShowdiv(!showdiv);
          }}
        >
          Vart leverar ni?
        </button>
        {showdiv && (
          <div>
            <p data-aos="flip-up" className="text-black py-2">
              {" "}
              Vi levererar inom hela Stockholmsområdet och Södertälje.
            </p>
          </div>
        )}
        <button
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white  rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0"
          onClick={() => {
            setShowdiv1(!showdiv1);
          }}
        >
          Hur beställer jag matlådor?
        </button>
        {showdiv1 && (
          <div>
            <p data-aos="flip-up" className="text-black py-2">
              Kontakta oss för en skräddarsydd lösning för ert företag, via
              telefon eller mejl.
            </p>
          </div>
        )}
        <button
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0"
          onClick={() => {
            setShowdiv2(!showdiv2);
          }}
        >
          Hur fungerar leveransen?
        </button>
        {showdiv2 && (
          <div>
            <p data-aos="flip-up" className="text-black py-2">
              Vi levererar i dagsläget enbart till företag.
            </p>
          </div>
        )}
        {/*  <button
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0"
          onClick={() => {
            setShowdiv3(!showdiv3);
          }}
        >
          Hur länge håller matlådorna?
        </button>
        {showdiv3 && (
          <div>
            <p data-aos="flip-up" className="text-black py-2">
              {" "}
              Oöpnnad matlåda håller i 21 dagar i kylen, öppnad håller i 7 dagar
              i kylen. Man kan givetvis frysa in våra matlådor för längre
              hållbarhet.
            </p>
          </div>
        )} */}
        <button
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0 "
          onClick={() => {
            setShowdiv4(!showdiv4);
          }}
        >
          Hur lång tid ska matlådorna värmas?
        </button>
        {showdiv4 && (
          <div>
            <p data-aos="flip-up" className="text-black py-2">
              {" "}
              Matlådorna ska värmas i 3-4 min i microvågsugn på 800W. Vissa av
              våra matlådor kan ätas kalla (se meny).
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;

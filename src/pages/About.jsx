import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const About = () => {
  
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  
  return (    
    <div className="w-full py-16 px-10  mt-28 4xl:pr-[23%]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img data-aos="flip-left"
          src="./images/about.jpg" 
          alt="A computer"
          className="w-[100%] h-[100%] mx-auto bg-white relative object-fit rounded-lg sm: mx-auto  "
        />
        <div className="flex flex-col justify-center px-4 mx-auto sm: mt-4">
          <p className="text-green-700  uppercase font-bold">
            Scan´n Go
          </p>
          <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
            Mat ska vara enkelt! 
          </h1>
          <p>
            
Vi är två vänner med omfattande erfarenhet av egen företagsverksamhet inom data och kapitalbranschen. Nu tar vi steget mot att skapa mervärde på arbetsplatsen, 
något vi själva upplevde som bristande när vi var anställda. Vi strävar efter att skapa en arbetsmiljö där trivsel står i fokus och där vi, 
genom vår erfarenhet, ger arbetsgivaren möjlighet att skapa mervärde både för sitt företag och dess anställda. Vi vänder oss mot företag och privatpersoner.
Vi kan skräddarsy lösningar efter ert behov, bara fantasin som sätter gränser.
          </p>
          <a
              className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] mt-32 rounded-md font-medium my-6 mx-auto px-6 py-3 z-0"
              href="/contact"
            >
              Kontakta oss
            </a>
        </div>
      </div>
    </div>


    );
  };
  
  export default About;
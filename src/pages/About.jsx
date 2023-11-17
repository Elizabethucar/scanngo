

const About = () => {
  return (

  
    
    <div className="w-full py-16 px-10 shadow-2xl mt-28 4xl:pr-[23%]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mr-12">
        <img
          src="./images/about.jpg" 
          alt="A server"
          className="w-[100%] h-[100%] mx-auto bg-white relative object-fit rounded-lg sm: ml-8 "
        />
        <div className="flex flex-col justify-center pl-8 sm: ml-6">
          <p className="text-green-700  uppercase font-bold">
            Scan´n Go
          </p>
          <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
            Mat ska vara enkelt! 
          </h1>
          <p>
            
Vi är två vänner med omfattande erfarenhet av egen företagsverksamhet inom data och kapitalbranschen. Nu tar vi steget mot att skapa mervärde på arbetsplatsen, 
något vi själva upplevde som bristande när vi var anställda. Vi strävar efter att skapa en arbetsmiljö där trivsel står i fokus och där vi, 
genom vår erfarenhet, ger arbetsgivaren möjlighet att skapa mervärde både för sitt företag och dess anställda. Vi vänder oss mot föratag och privatpersoner.
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
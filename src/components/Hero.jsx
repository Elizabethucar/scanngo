
const Hero = () => {
  return (

 
    <div className="pt-0 flex flex-col relative pb-16 mb-36 ">
    <div>
        <img src="./images/food.jpg" alt="branches" className='absolute opacity-60 w-full h-[100%]
        ' />
        </div>
        <div className="flex flex-col justify-center pl-8">
        <h1 className="md:text-5xl sm:text-3xl mt-12  text-green-700 text-2xl font-bold py-2 z-0">
              Scan´N Go
            </h1>
       
            <h1 className="md:text-5xl sm:text-3xl mt-12 text-white text-2xl font-bold py-2 z-0">
              Färsk mat med naturliga ingredinser.
            </h1>
            <p className="text-xl mt-12 z-0 font-bold text-white">
             Nyttiga matlådor på jobbet! 
            </p>
            <a
              className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] mt-48 rounded-md font-medium my-6 mx-auto px-6 py-3 z-0"
              href="/ourfood"
            >
              Meny
            </a>
    
       </div>
       </div>
  )
}

export default Hero;
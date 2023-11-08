
const Hero = () => {
  return (

 
    <div className="pt-0 flex flex-col relative pb-16 mb-36 ">
    <div>
        <img src="./images/food.jpg" alt="branches" className='absolute opacity-60 w-full h-[100%]
        ' />
        </div>
        <div className="flex flex-col justify-center pl-8">
            <p className="text-[#06632e] mt-8 text-3xl uppercase font-bold z-10">
              Scan´n Go
            </p>
            <h1 className="md:text-4xl sm:text-3xl mt-12  text-2xl font-bold py-2 z-10">
              Färsk mat med naturliga ingredinser.
            </h1>
            <p className="text-xl mt-12 z-10 font-bold">
             Nyttiga matlådor på jobbet! 
            </p>
            <a
              className="bg-[#06632e] hover:bg-[#33a364] text-white w-[200px] mt-48 rounded-lg font-medium my-6 mx-auto px-6 py-3 z-10"
              href="/ourfood"
            >
              Meny
            </a>
    
       </div>
       </div>
  )
}

export default Hero;
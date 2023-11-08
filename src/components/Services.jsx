
const Services = () => {
  return (

 
    <div className="pt-0 flex flex-col relative pb-16 mb-36 ">
    <div>
        <img src="./images/fridge.jpg" alt="branches" className='absolute  w-full h-[100%]
        ' />
        </div>
        <div className="flex flex-col justify-center pl-8">
        
            <h1 className="md:text-5xl sm:text-3xl mt-12  text-white text-2xl font-bold py-2 z-10">
              Våra tjänster
            </h1>
            <p className="text-xl mt-8 z-10 font-bold text-white ">
             Vi tänker på maten, så ni slipper! 
            </p>
            <a
              className="bg-[#06632e] hover:bg-[#33a364] text-white w-[200px] mt-48 rounded-lg font-medium my-6 mx-auto px-6 py-3 z-10"
              href="/contact"
            >
              Kontakta oss
            </a>
    
       </div>
       </div>
  )
}

export default Services;
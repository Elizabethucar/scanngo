import Mera from './Mera'

const Services = () => {
  return (

 <>
    <div className="pt-0 flex flex-col relative pb-16  ">
    <div>
        <img src="./images/fridge.jpg" alt="branches" className='absolute   w-full h-[100%]
        ' />
        </div>
        <div className="flex flex-col justify-center pl-8">
        
            <h1 className="md:text-5xl sm:text-3xl mt-12  text-white text-2xl font-bold py-2 z-0">
              Våra tjänster
            </h1>
            <p className="text-xl mt-8 z-0 font-bold text-white ">
             Vi tänker på maten, så ni slipper! 
            </p>
            <p className="text-xl mt-8 z-0 text-orange-500 text-white ">
            Spara tid och pengar med färdiga matlådor som levereras till jobbet! Njut av god mat och håll energin uppe under hela dagen
            </p>
            <a
              className="bg-[#06632e] hover:bg-[#33a364] text-white w-[200px] mt-48 rounded-lg font-medium my-6 mx-auto px-6 py-3 z-0"
              href="/contact"
            >
              Kontakta oss
            </a>
    
       </div>
       </div>
       <Mera />
       </>
  )
}

export default Services;
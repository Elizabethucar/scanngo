
const Hero = () => {
  return (

 
<div className="w-full py-16 px-4 shadow-2xl pl-8 4xl:pr-[23%]">
       <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mr-18 pl-0 ">
         <img
           src='../images/köttbulle.png'
           alt="A server"
           className="w-[100%] h-[100%] mx-auto bg-white relative object-fit "
         />
         <div className="flex flex-col justify-center ">
           <p className="text-[#3A7F89]  uppercase font-bold">
             Contact us
           </p>
           <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
             Jonas ucar
           </h1>
           <p>
             Give me a call at: +46 70 122 620 <span><p>or</p></span>
           </p>
           <a
             className="bg-[#06632e] text-[#FFFFFF] rounded-md font-medium my-14 mx-auto px-6 py-3  hover:bg-gradient-to-r from-[#0D124B] via-[#8FACF4] to-[#0D124B]"
             href="mailto:info@scanngo.se"
           >
             Send an email
           </a>
         </div>
       </div>
      
     </div>

   

  )
}

export default Hero;
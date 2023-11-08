


const Contact = () => {
  return (
    
      <div className="w-full py-16 px-4 shadow-2xl pl-8 4xl:pr-[23%]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mr-18 pl-0 ">
          <img
            src='../images/samarbete.png'
            alt="A server"
            className="w-[100%] h-[100%] mx-auto bg-white relative object-fit "
          />
          <div className="flex flex-col justify-center ">
            <p className="text-[#06632e]  uppercase font-bold">
              Kontakta oss
            </p>
            <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
              Jonas
            </h1>
            <p>
              Tel: +46 707 122 620 
            </p>
            <p>
              Tel: +46 708 802 306 <span><p>eller</p></span>
            </p>
            <a
              className="bg-[#06632e] text-[#FFFFFF] rounded-md font-medium my-14 mx-auto px-6 py-3  hover:bg-[#bf6135]"
              href="mailto:info@scanngo.se"
            >
              Skicka email
            </a>
          </div>
        </div>
      </div>

  )
}

export default Contact;
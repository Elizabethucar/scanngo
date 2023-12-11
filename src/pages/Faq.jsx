import React ,{useState} from 'react'


const Faq = () => {
  const [showdiv, setShowdiv] = useState(false)
  const [showdiv1, setShowdiv1] = useState(false);
  const [showdiv2, setShowdiv2] = useState(false);
  const [showdiv3, setShowdiv3] = useState(false)
  const [showdiv4, setShowdiv4] = useState(false)

  return (
    <div className='w-full bg-white py-16 px-12 mt-12 relative'>
        <div className='flex flex-col justify-center'>
          <p className='text-orange-600 uppercase font-bold text-3xl mt-24'>Scan´n Go</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Frågor och svar</h1>

          <button className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white  rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0" onClick={()=>{setShowdiv(!showdiv)}}>Vart leverar ni?</button>
       { showdiv &&  <div>
          <p className='text-black'> Vi levererar inom hela Stockholmsområdet.
          </p>
          </div>}
          <button className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white  rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0" onClick={()=>{setShowdiv1(!showdiv1)}}>Hur beställer jag matlådor?</button>
       { showdiv1 &&  <div>
          <p className='text-black'> För närvarande beställer ni genom att skicka mejl till oss med era kontaktuppgifter, hur många matlådor och vilka ni vill beställa. Minimum beställning är 10 lådor. Frakt tillkommer med 59kr inom tullarna och 69kr utanför tullarna. Företag har fri frakt.
          </p>
          </div>}
          <button className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0" onClick={()=>{setShowdiv2(!showdiv2)}}>Hur fungerar leveransen?</button>
       { showdiv2 &&  <div>
          <p className='text-black'> Till privatpersoner levererar vi varje Söndag och beställningen ska läggas på Fredag innan kl 12. Till företag levererar vi på Måndagar och beställningen ska läggas på Fredag innan kl 12.
          </p>
          </div>}
          <button className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0" onClick={()=>{setShowdiv3(!showdiv3)}}>Hur länge håller matlådorna?</button>
       { showdiv3 &&  <div>
          <p className='text-black'> Oöpnnad matlåda håller i 21 dagar i kylen, öppnad håller i 7 dagar i kylen. Man kan givetvis frysa in våra matlådor för längre hållbarhet.
          </p>
          </div>}
          <button className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white   rounded-md font-medium my-6 w-full mx-auto px-6 py-3 z-0" onClick={()=>{setShowdiv4(!showdiv4)}}>Hur lång tid ska matlådorna värmas?</button>
       { showdiv4 &&  <div>
          <p className='text-black'> Matlådorna ska värmas i 2 min i microvågsugn på 800W. Vissa av våra matlådor kan ätas kalla (se meny).
          </p>
          </div>}

        </div>
      </div>
    
  )
}

export default Faq
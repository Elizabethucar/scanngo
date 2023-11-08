import React from 'react'
import { Link } from 'react-router-dom'

const Ourfood = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold font-mono text-center mt-12 text-[#06632e]'>Meny</h2>
      <button className='rounded-full bg-green-700 text-white px-4 py-10 text-5xl mt-12'>89kr</button>
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Wallenbergare</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/wallenberg.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>

          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Köttbullar(nöt)</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/köttbulle.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>

          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Kyckling Curry-pasta</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/pasta.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>

          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Spicy Tuna pasta</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/tuna.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>

          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Kyckling Tikka Masala</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/tikka.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>

          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Teriyaki</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/teriyaki.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Bygglådan</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/bygg.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Stroganoff</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/stoganoff.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Thaigrytan</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/thai.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Taco</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/taco.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Taco+</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/taco+.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Fitness</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/fitness.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Lax med Potatis</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/lax.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Högrevsgryta</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/högrev.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Bolognese by Daki</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/bolognese.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Proteinlasagne</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/proteinlas.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
         
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Vegobullar</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/vego.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Falafellådan</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/falafel.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>Sås</h2>
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
            <span><img
            src="images/sås.png"
            className="h-18 pl-2 mt-1 md:h-22 sm:h-22"
            alt="logo"
          /></span>
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px]  rounded-lg font-medium my-6 mx-auto px-6 py-3'>Läs mer</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ourfood

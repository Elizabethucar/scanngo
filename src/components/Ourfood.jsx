import React from 'react';
import { Link } from 'react-router-dom';
import foods from './foodsData';

const Ourfood = () => {
  return (
    <div>
      {/* Your existing code */}
      <h2 className='text-5xl font-bold font-mono text-center mt-12 text-green-600'>Meny</h2>
      <button className='rounded-full bg-green-600 text-white px-4 py-10 text-5xl mt-16 mb-16 hover:scale-105 duration-300'>89kr</button>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16 '>
        {foods.map((food, key) => (
          <div key={key} className='w-full shadow-2xl shadow-green-700 flex flex-col p-4 my-4 pb-12 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>{food.name}</h2>
            {/* Additional details can be added here */}
            <div className='text-center font-medium'>
              <span>
                <img
                  src={food.img}
                  className='h-18 pl-2 mt-1 md:h-22 sm:h-22'
                  alt='logo'
                />
              </span>
              <Link
              to={`/ourfood/${food.id}`} 
              state={{ foodInfo: food }}
              className='bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            >
             Läs mer
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourfood;




{/* 
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
          </div>*/}

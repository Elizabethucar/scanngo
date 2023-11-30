import React from 'react';
import { Link } from 'react-router-dom';
import foods from '../components/foodsData';

const Ourfood = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold font-mono text-center mt-32 text-green-600'>Meny</h2>
      <button className='rounded-full bg-green-600 text-white px-4 py-10 text-5xl mt-16 mb-16 hover:scale-105 duration-300'>89kr</button>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16 '>
        {foods.map((food, key) => (
          <div key={key} className='w-full shadow-2xl shadow-green-700 flex flex-col p-4 my-4 pb-12 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>{food.name}</h2>
            <div className='text-center font-medium'>
              <span>
                <img
                  src={food.img}
                  className='h-18 pl-2 mt-1 md:h-22 sm:h-22'
                  alt='food'
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





import React from 'react';

const OurfoodInfo = ({ food }) => {
  if (!food) {
    // If there's no food data, you can handle it accordingly
    return <div>No information available.</div>;
  }

  return (
    <div>
     
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>
          <div className='w-full shadow-2xl shadow-[#06632e] flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold font-mono text-center py-8'>{food.name}</h2>
            {/* You can display more details about the food item here */}
            <p className='text-center text-4xl font-bold'></p>
            <div className='text-center font-medium'>
              <span>
                <img
                  src={food.img}
                  className='h-18 pl-2 mt-1 md:h-22 sm:h-22'
                  alt='logo'
                />
              </span>
              {/* Consider using a Link component for navigation */}
              <button className='bg-[#06632e] hover:bg-[#33a364] text-white w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-3'>
                Läs mer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurfoodInfo;

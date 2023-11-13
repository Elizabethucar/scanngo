// OurfoodInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';
import foods from './foodsData';  // Make sure to import the correct file

const OurfoodInfo = () => {
  const { id } = useParams();

  // Find the selected food item based on the route parameter
  const selectedFood = foods.find((food) => food.id.toString() === id);

  if (!selectedFood) {
    // If there's no food data, you can handle it accordingly
    return <div>No information available.</div>;
  }

  return (
    <div>
      <h2 className='text-2xl font-bold font-mono text-center py-8'>{selectedFood.name}</h2>
      <p className='text-center text-4xl font-bold'>{selectedFood.mat}</p>
      <div className='text-center font-medium'>
        <span>
          <img
            src={selectedFood.img}
            className='h-18 pl-2 mt-1 md:h-22 sm:h-22'
            alt='logo'
          />
        </span>
        {/* Additional details can be added here */}
      </div>
    </div>
  );
};

export default OurfoodInfo;

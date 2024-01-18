// OurfoodInfo.js
import React from 'react';
import { useParams , Link} from 'react-router-dom';
import foods from '../components/foodsData';  
import { FcCheckmark } from "react-icons/fc";
import { Fade } from 'react-reveal';

const OurfoodInfo = () => {
  const { id } = useParams();

  // Find the selected food item based on the route parameter, ex id or name
  const selectedFood = foods.find((food) => food.id.toString() === id);

  if (!selectedFood) {
    return <div>No information available.</div>;
  }

  return (
    <div className='w-full bg-white py-12 px-12 '>
       <Fade left cascade>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  rounded-3xl pr-3'>
    <span>
       <img className='w-[500px] mx-auto mt-20 object-fit hover:scale-105 duration-300' 
         src={selectedFood.img}
         alt='food boxes'
       /> </span> 

      <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center text-green-700'>{selectedFood.name}</h2>
        <p className='text-2xl py-8  text-gray-500 text-center'>
        {selectedFood.helNamn}
        </p>


        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-start'>
          <div className='flex'>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>
           
            <div>
            <h3 className='text-lg'>Innehåll</h3>
       <ul className='list-disc pl-4'>
        {selectedFood.ingred.split(',').map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
            </div>
          </div>

          <div className='flex'>
          
          <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>
            <div>
            <h3 className='text-lg'>Specifikationer</h3>
          <ul className='list-disc pl-4'>
          {selectedFood.spec.split(',').map((item, index) => (
            <li key={index}>{item.trim()}</li>
           ))}
    </ul>
            </div>
          </div>

          <div className='flex '>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1 ' />
            </div>
            <div>
             { selectedFood.gluten &&<h3 className='font-bold text-lg'>Glutenfri</h3>}
             { selectedFood.laktos &&<h3 className='font-bold text-lg'>Laktosfri</h3>}
             { selectedFood.vegan ? <h3 className='font-bold text-lg'>Vegansk</h3> : null}
             { selectedFood.kall ? <h3 className='font-bold text-lg'>Serveras bäst kall</h3> : null}
             { selectedFood.protein && <h3 className='font-bold text-lg'>Högt Protein</h3>}
             
            </div>
          </div>
          <div className='flex justify-center mb-8'> </div>
          <Link
              to={'/ourfood'} 
              className='bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-center text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            >
             Meny
             </Link>
         
          </div>
        </div>
      </div>
      </div>
      </Fade>
      </div>
    
    );
  };
  
  export default OurfoodInfo;
  

import React from 'react'
import { FcCheckmark } from "react-icons/fc";

const Text = () => {
  return (
    <div name='platforms' className='w-full my-32 relative'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center text-green-600'>Vi förenklar din vardag</h2>
        <p className='text-2xl py-8  text-gray-500 text-center'>
        Allt du behöver på jobbet
        </p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          <div className='flex'>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>

            <div>
              <h3 className='font-bold text-lg'>Hälsosamma matlådor till din arbetsplats</h3>
              <p className='text-lg p-4 mr-6'>
              Spara tid och pengar med färdiga matlådor som levereras till jobbet! Njut av god mat och håll energin uppe under hela dagen.
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>

            <div>
              <h3 className='font-bold text-lg'>Låt oss ta hand om din lunch så att du kan fokusera på jobbet</h3>
              <p className='text-lg p-4 mr-6'>
              Med matlådor spenderar ni klart mindre pengar än på att köpa lunch ute på restaurang.
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>

            <div>
              <h3 className='font-bold text-lg'>Optimera tiden</h3>
              <p className='text-lg p-4 mr-6'>
              Kanske ta en promenad på lunchen med all tid som blir över? Eller lägg den på att bli klar med ditt jobb.
              </p>
            </div>
          </div>


          <div className='flex'>
            <div>
              <FcCheckmark className='w-7 mr-1 mt-1' />
            </div>

            <div>
              <h3 className='font-bold text-lg'>Få mer energi under dagen</h3>
              <p className='text-lg p-4 mr-6'>
              Med välbalanserad mat utan onödiga tillsatser håller ni energin uppe under hela arbetsdagen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text
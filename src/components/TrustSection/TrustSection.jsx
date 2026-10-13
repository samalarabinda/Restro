import React from 'react'
import biriyani1 from '../../assets/biriyani-plate-1.webp';
import { IoFastFood } from 'react-icons/io5';
import { GrSecure } from 'react-icons/gr';
import { GiFoodTruck } from 'react-icons/gi';

const TrustSection = ({handleClick}) => {
  return (
    <div className='py-10'>
        <div className="custom-container">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            <div>
                <img src={biriyani1} alt="" className='max-w-[350px] mx-auto spin' />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='text-3xl font-bold'>Lorem, Ipsum Dolar.</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, 
                    est? Magnam eveniet dolor sint ipsum.</p>
                 <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde corrupti qui tempora adipisci ipsa velit tenetur incidunt commodi suscipit voluptate ducimus, 
                    dolores consequatur exercitationem repellat?</p>
                <div className='flex gap-6'>
                    <div>
                        <GrSecure className='text-4xl h-15
                        w-15 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400' />
                    </div>
                    <div>
                        <IoFastFood className='text-4xl h-15
                        w-15 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400' />
                    </div>
                    <div>
                        <GiFoodTruck className='text-4xl h-15
                        w-15 shadow-sm p-3 rounded-full bg-green-100 dark:bg-green-400' />
                    </div>
                </div>
                <div>
                 <button className='bg-gradient-to-r from-main to-secondary text-white 
              px-4 py-1.5 rounded-full hover:scale-105 duration-200 cursor-pointer ' onClick={()=> handleClick()}>Order Now</button>
                </div>
               
            </div>
           </div>
        </div>
    </div>
  )
}

export default TrustSection
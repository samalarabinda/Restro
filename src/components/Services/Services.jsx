import React from 'react'
import CardsData from '../Services/CardsData.js'

const Services = () => {
  return (
    <div className='py-10'>
        <div className="custom-container">
            {/* Header Section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
               <p className='text-base bg-clip-text text-transparent bg-gradient-to-r
               from-main to-secondary'>
                 Our services
               </p>
               <h1 className='text-3xl font-bold'>
                Services
               </h1>
               <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione sit exercitationem suscipit, tenetur veniam corporis.</p>
            </div> 
            {/* Card Section start  */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14
                md:gap-5 place-items-center' >
                    {CardsData.map((data)=>(
                        <div key={data.id} className='max-w-[300px] group rounded-2xl
                        bg-white dark:bg-gray-800 hover:bg-main hover:text-white duration-300 p-4 shadow-xl'>
                         <div className='h-[140px]'>
                            <img src={data.img} alt="" 
                            className='max-w-[200px] mx-auto block transform -translate-y-16 
                            group-hover: scale-105 group-hover:rotate-6 duration-300' />
                         </div>
                         <div className='text-center '>
                            <h1 className='text-xl font-bold dark:text-white'>{data.Name}</h1>
                            <p className='text-gray-400 group-hover:text-white duration-300 text-base line-clamp-2'>{data.description}</p>
                         </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services
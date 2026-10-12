import React from 'react'
import appstore from '../../assets/app-store.png'
import googleplay from '../../assets/google-play.png'
import biriyani1 from '../../assets/biriyani-plate-1.webp';

const Available = () => {
    return (
        <div className='py-10 bg-gray-100 dark:bg-gray-800' >
            <div className="custom-container">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className='flex flex-col justify-center gap-4'>
                        <h1 className='text-2xl sm:text-4xl font-bold max-w-[400px] dark:text-gray-400 '>Foodly is available for Andriod and IOS</h1>
                        <div>
                            <img src={appstore} alt="" className='max-w-[200px] shadow-lg rounded-4xl mb-2'/>
                            <img src={googleplay} alt="" className='max-w-[200px] shadow-lg rounded-4xl'/>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={biriyani1} alt="" className='max-w-[350px] mx-auto spin' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Available
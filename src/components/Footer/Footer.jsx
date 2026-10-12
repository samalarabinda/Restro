import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='py-15 bg-gray-200'>
            <div className='custom-container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {/* first container */}
                    <div className='flex flex-col gap-2'>
                        <a href="#"><h1 className='uppercase font-semibold text-2xl font-poppins'>Restro</h1></a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, repellat?</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-1.5 items-center'>
                                <FaLocationDot className='inline-block' /> Bhubaneswar, Odisha
                        
                            </div>
                            <div className='flex gap-1.5 items-center'>
                                <FaPhoneFlip className='inline-block' /> +91 7890675456
                        
                            </div>
                        </div>
                    </div>
                    {/* Second Container */}
                    <div className='flex flex-col gap-2 sm:pl-10'>
                     <a href="#"><h1 className='font-semibold text-xl font-poppins'>Links</h1></a>
                     <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Best Selling</li>
                     </ul>

                    </div>
                    {/* Third Container */}
                     <div className='flex flex-col gap-2'>
                     <a href="#"><h1 className='font-semibold text-xl font-poppins'>Links</h1></a>
                     <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Best Selling</li>
                     </ul>

                    </div>
                    {/* Fourth Container */}
                     <div className='flex flex-col gap-2 sm:pl-10 lg:pl-0 '>
                     <a href="#"><h1 className='font-semibold text-xl font-poppins'>Important Links</h1></a>
                     <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Best Selling</li>
                     </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
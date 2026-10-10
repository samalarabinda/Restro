import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Darkmode from './Darkmode';

const menu=[
    {
        id:1,
        menu: "Home"
    },
    {
        id:2,
        menu: "About"
    },
    {
        id:3,
        menu: "Contact"
    }
]

const Navbar = () => {


    return (
        <>
            <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white py-3 duration-200 '>
                <div className='custom-container'>
                    <div className="flex justify-between item-center">
                        <div className='flex items-center'>
                            <a href="#"><h1 className='uppercase font-semibold text-2xl font-poppins'>Restro</h1></a>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <Darkmode />
                            </div>
                            <ul className='hidden sm:flex gap-10 items-center'>
                                {menu.map((menuItem)=>(
                                    <li key={menuItem.id} className='font-poppins hover:text-main duration-200 '><a href="" >{menuItem.menu}</a></li>
                                ))}
                            </ul>
                            <button className='flex justify-center items-center gap-1 text-[16px] cursor-pointer bg-gradient-to-r from-main to-secondary text-white px-4 py-1.5
                            rounded-full hover:scale-105 duration-300 '>
                                Order 
                                <FaShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
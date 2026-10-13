import React from 'react'
import { RxCross2 } from "react-icons/rx";

const PopUp = ({popup,handleClick,setpopup}) => {
  return (
    <>
    {popup && (
        <div className='fixed inset-0 bg-black/50 h-dvh w-vw-100' onClick={()=>setpopup(false)}>

 <div className='relative w-vw-100 h-dvh'>
            
    <div className='w-[400px] h-[300px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 flex flex-col
    justify-center items-center gap-4'>
        <RxCross2 className='absolute right-5 top-5 text-2xl hover:rotate-180 cursor-pointer' onClick={()=>handleClick()}/>
       <h1 className='text-4xl font-bold'>Order Now</h1>
       
       <input type="text" name="" id="" placeholder='Your Name' className='border-1 border-black w-full px-5 py-2 rounded-2xl'/>
       <input type="tel" name="" id="" placeholder='Your Number' className='border-1 border-black w-full px-5 py-2 rounded-2xl'/>
       <textarea name="" id="" placeholder='Order Details' className='border-1 border-black w-full px-5 py-2 rounded-2xl'></textarea>
    </div>
    </div> 
    
    </div>
    )}
    
    </>
    
  )
}

export default PopUp
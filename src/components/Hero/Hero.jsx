import { useState } from 'react'
import biriyani1 from '../../assets/biriyani-plate-1.webp';
import biriyani2 from '../../assets/biriyani2.webp';
import heroBg from '../../assets/bg-abstract.webp';
const ImageList = [
  {
    id: 1,
    img: biriyani1,
  },
  {
    id: 2,
    img: biriyani2,
  },
  {
    id: 3,
    img: biriyani1,
  }
];

const bgImage = {
  backgroundImage: `url(${heroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "auto"
}

const Hero = () => {
  const [imageId, setImageId] = useState(biriyani1);
  return (
    <>
      <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 
    dark:text-white duration-200 flex justify-center items-center'>
        <div className='custom-container'>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
              text-center sm:text-left order-2 sm:order-1">
              <h1 className='text-5xl sm:text-6xl lg-text-7xl font-bold dark:text-gray-700'>
                Welcome to the Foodie zone
              </h1>
              <p className='text-base dark:text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dolor.</p>
              <div>
                <button className='bg-gradient-to-r from-main to-secondary text-white 
              px-4 py-1.5 rounded-full hover:scale-105 duration-200 cursor-pointer '>Order Now</button>
              </div>
            </div>
            {/* Image Section */}
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px]
            flex justify-center items-center relative'>
              {/* main image */}
               <div className='overflow-hidden'>
                <img src={imageId} alt=""
                className='w-[300px] sm:w-[450px] mx-auto spin' />
    
               </div>
               {/* image list section */}
               <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2
               justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                {
                  ImageList.map((items) => (
                    <img 
                    key={items.id}
                    src={items.img}
                    className='max-w-[80px] h-[80px] object-contain
                    inline-block hover:scale-105 duration-200'
                    onClick={()=>{
                      setImageId(
                        items.id === 1 ? 
                        biriyani1 : items.id === 2 ? biriyani2 : biriyani1
                      );
                    }}
                    />
                  ))
                }
               </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
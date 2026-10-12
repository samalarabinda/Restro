import React from 'react'
import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;

const testimonialData = [
  {
    id: 1,
    name: "Arabinda Samal",
    text: "Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data ",
    img: "https://picsum.photos/102/102"
  },
  {
    id: 1,
    name: "Samuel Samal",
    text: "Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data ",
    img: "https://picsum.photos/102/103"
  },
  {
    id: 1,
    name: "Andrew Samal",
    text: "Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data ",
    img: "https://picsum.photos/102/104"
  },
  {
    id: 1,
    name: "Sangita Samal",
    text: "Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data ",
    img: "https://picsum.photos/102/105"
  }
]

const Testimonials = () => {
 var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        caseEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      }

  return (
    <div className='py-20'>
      <div className='custom-container'>
        <div className='text-center mb-10 max-w-[400px] mx-auto'>
          <p className='text-base bg-clip-text text-transparent bg-gradient-to-r
               from-main to-secondary'>
            Testimonial
          </p>
          <h1 className='text-3xl font-bold'>
            Testimonials
          </h1>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione sit exercitationem suscipit, tenetur veniam corporis.</p>
        </div>
        {/* Testimonial card start */}
        <div className='grid grid-cols-1 gap-7'>
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className='px-3'>
                <div className='flex flex-col gap-4 bg-main/10 p-4 rounded-xl shadow-lg'>
                  <div>
                    <img src={data.img} alt="" className='rounded-full w-20 h-20 mx-auto' />
                  </div>
                  <p className='text-base text-gray-700 text-center'>{data.text}</p>
                  <h4 className='txt-2xl font-semibold text-center'>{data.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
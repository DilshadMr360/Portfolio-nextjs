import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { Pagination } from "swiper";

import Image from "next/image";

// data
const workSlides = {
  slides: [
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/project01.png',
    //       link: 'https://portal.importauthority.com.au/login',
    //     },
    //     {
    //       title: 'title',
    //       path: '/project3.png',    
    //       // link: 'https://github.com/DilshadMr360/Portfolio-nextjs',
    //       link: 'https://carhistory.infinitycode.com.au/',
    //     },
    //     {
    //       title: 'title',
    //       path: '/project5.png',
    //       link: 'https://carrental.infinitycode.com.au/'
    //     },

    //      {
    //       title: 'title',
    //       path: '/project1.png',
    //       link: 'https://8848portal.infinitycode.com.au/'
    //     },
    //   ],
    // },
    {
      images: [
        {
          title: 'title',
          path: '/project3.png',
          link: 'https://carhistory.infinitycode.com.au/'
        },
        {
          title: 'title',
          path: '/project3.png',
          link: 'https://carhistory.infinitycode.com.au/'
        },
        {
          title: 'title',
          path: '/project5.png',
          link: 'https://carrental.infinitycode.com.au/'
        },
        {
          title: 'title',
          path: '/project1.png',
          link: 'https://8848portal.infinitycode.com.au/'
        },
    
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/Projectone.png',
          link: ''
        },
     
    
      ],
    },
  ],
};

// icons
import { BsArrowRight } from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      pagination={{
        clickable:true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {
        workSlides.slides.map((slide, index) => {
          return <SwiperSlide key={index}>
           <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} alt={image.title} width={500} height={300} />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#38c7eb] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                          {/* part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
              </div>
            ))}
          </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

import React from 'react'
import './AutoSlide.scss';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const AutoSlide = () => {
  return (
    <div className='autoSlide'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <a href="https://www.netflix.com" target="_blank">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg" />
            </a>
        
       
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://www.hotstar.com">
        <img src="https://www.adgully.com/img/800/202105/key-visual.png.jpg" />
        </a>
        </SwiperSlide>
        
       
       
      </Swiper>



    </div>
  )
}

export default AutoSlide
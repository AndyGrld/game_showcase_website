import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/react/swiper.min.css'; // Import Swiper pagination styles if needed

const MySlider = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    );
  };
  
  export default MySlider;
  
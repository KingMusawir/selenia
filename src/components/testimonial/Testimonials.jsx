import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=' bg-[#00ffa20c] p-6'>
      <div className=' mb-20 max-w-screen-maxws mx-auto  md:max-w-screen-md lg:max-w-screen-xl'>
        <h1 className=' font-semibold text-center text-white text-xl md:text-3xl mb-12'>
          What People are saying about us
        </h1>
        <div className='  '>
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

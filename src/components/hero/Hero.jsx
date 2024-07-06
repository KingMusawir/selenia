import React from 'react';
import '../../App.css';
import { Navbtn } from '../navBar/Navlinks';

function Hero() {
  return (
    <div className='hero-bg mb-12'>
      <div className='text-center hero-text-box'>
        <h1 className='text-[20px] md:text-[42px] lg:text-[48px] text-white font-semibold mb-2 md:mb-5 pt-5'>
          Join the future of <span className='text-[#00FFA3] '>finance,</span>{' '}
          <br /> Use <span className='text-[#00FFA3] '>cryptocurrency</span>{' '}
          today.
        </h1>
        <p className='text-white text-[14px] md:text-[18px] lg:text-[20px] mb-12'>
          We believe in the power of decentralized digital currencies to change
          the world for the better. Our platform offers a fast, secure, and
          user-friendly way to buy, sell, and store a variety of popular
          cryptocurrencies
        </p>
        <div className='flex gap-5 justify-center'>
          <Navbtn value='Get Selenia' isActive={true} />
          <Navbtn value='Learn more' />
        </div>
      </div>
    </div>
  );
}

export default Hero;

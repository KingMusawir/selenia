import React from 'react';
import Dave from '../../assets/dave.png';

function TestimonialCard() {
  return (
    <div className=''>
      <div className='inline-block text-center bg-white p-5 rounded-md relative '>
        <p className=' font-medium pt-10 text-xl'>Ajayi Samuel</p>
        <p>
          Selenia is swift and reliable. <br /> Having my mobile number as my{' '}
          <br />
          wallet address makes it easier
        </p>
        <div className='absolute w-20 h-20 rounded-full bg-slate-800 -top-12 left-1/2 transform -translate-x-1/2'>
          <img src={Dave} alt='' className=' z-50 rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

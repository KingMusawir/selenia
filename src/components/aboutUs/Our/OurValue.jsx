import React from 'react';
import Ourheader from './Ourheader';

function OurValue() {
  return (
    <div>
      <div className=' static lg:relative pb-[5rem] lg:pb-[30rem] grid lg:block justify-center items-center pt-10'>
        <Ourheader title='OUR CORE VALUES' className=' justify-self-start' />
        <div className='grid  grid-cols-3 md:grid-cols-2  lg:block gap-2 md:gap-10'>
          <div className=' static lg:absolute bottom-[5%] left-0'>
            <Value text='INNOVATION' />
          </div>
          <div className='static lg:absolute bottom-[20%]  left-[17%]'>
            <Value text='USER EXPERIENCE' />
          </div>
          <div className='static lg:absolute bottom-[30%] left-[34%]'>
            <Value text='SECURITY' />
          </div>
          <div className='static lg:absolute top-[30%] right-[34%]'>
            <Value text='ACCESSIBILITY' />
          </div>
          <div className='static lg:absolute top-[15%] right-[17%]'>
            <Value text='EMPOWERMENT' />
          </div>
          <div className='static lg:absolute top-0 right-0'>
            <Value text='RESPONSIBILITY' />
          </div>
        </div>
      </div>
    </div>
  );
}

function Value({ text }) {
  return (
    <div>
      <div className='inline-block'>
        <div className=' flex items-center justify-center p-8 lg:p-10 bg-[#212D21]  w-28 h-28 md:w-48 md:h-48 rounded-lg border border-[#00ffa248] text-white text-center'>
          <p className='text-[12px] md:text-[20px]'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default OurValue;

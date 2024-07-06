import React from 'react';

function Subscription() {
  return (
    <div className=''>
      <div className=' text-center mt-16 mb-24 subcription'>
        <h1 className='text-[32px] md:text-[42px] text-white font-semibold '>
          Get more updates
        </h1>
        <p className=' text-[16px] text-white mb-5'>
          Join our mailing list for regular updates about our new features and
          releases{' '}
        </p>
        <form>
          <input
            type='email'
            className=' inline-block pr-16 md:pr-48 pl-5 py-2 rounded-md'
            placeholder='Email address'
          />
          <button className='  pr-5 pl-5 py-2 rounded-md text-white bg-gradient-to-r from-[#00C566] to-[#00FFA3]'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;

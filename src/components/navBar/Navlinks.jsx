import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Features', to: '#' },
  { text: 'Contact Us', to: '#' },
  { text: 'About Us', to: '/about' },
];
const handleClick = () => {
  return window.scrollTo(0, 0); // Scrolls the page to the top
};
function Navlinks({ isMedium }) {
  return (
    <div>
      <ul className='list-none hidden lg:flex  gap-12  text-white  text-[16px] font-medium p-5 border border-1 border-[#00C566] bg-[#212D21] rounded-3xl  '>
        {navItems.map((item, index) => (
          <li key={index} className='hover:text-primary'>
            <Link to={item.to}> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Navbtn({ value, isActive, gradientColors, closeModal }) {
  const { right, left } = gradientColors || {};

  return (
    <div>
      <Link onClick={closeModal}>
        <button
          className={`px-6 py-3 w-40 block ${
            isActive
              ? `bg-gradient-to-r from-[${right}] to-[${left}] hover:bg-none`
              : ' hover:hover:bg-gradient-to-r from-[#00C566] to-[#00FFA3]'
          }  text-white  max-w[150px] border border-1 border-primary rounded-2xl `}
        >
          {value}
        </button>
      </Link>
    </div>
  );
}
const ShowModal = ({ closeModal, ...others }) => {
  const gradientColors = { right: '#00C566', left: '#00FFA3' };
  return (
    <nav className=' absolute top-0 left-0 w-[100%] h-[100vh] bg-[#82bda7] z-50 flex justify-center items-center'>
      <ul className='list-none flex flex-col gap-14 text[32px] text-center'>
        {navItems.map((item, index) => (
          <li key={index} className='text-secondary hover:text-primary'>
            <Link to={item.to} onClick={{ closeModal, handleClick }}>
              {' '}
              {item.text}
            </Link>
          </li>
        ))}

        <Navbtn
          value='Get Selenia'
          isActive={true}
          gradientColors={gradientColors}
          closeModal={closeModal}
        />

        <Navbtn value='Login' closeModal={closeModal} />
      </ul>
      <IoClose
        size='40px'
        color='rgba(27, 33, 30, 0.75)'
        onClick={closeModal}
        className=' absolute top-10 right-3 cursor-pointer'
      />
    </nav>
  );
};

export { Navlinks, Navbtn, ShowModal };

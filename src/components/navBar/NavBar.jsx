import React, { useState } from 'react';
import { Navlinks, Navbtn, ShowModal } from './Navlinks';
import { RxHamburgerMenu } from 'react-icons/rx';

function NavBar() {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(!isModal);

  const closeModal = () => setIsModal(false);
  return (
    <div className='max-w-screen-maxws md:max-w-screen-xl mx-auto flex items-center justify-between mt-10 mb-10 lg:mb-20'>
      <div className='logo'>
        <p className=' font-bold text-[24px] text-primary'>Selenia</p>
      </div>
      <nav className=''>
        <Navlinks />
      </nav>
      <div className='hidden lg:flex gap-6'>
        <Navbtn
          value='Get Selenia'
          isActive={true}
          gradientColors={{ right: '#00C566', left: '#00FFA3' }} // Pass gradientColors here
          closeModal={closeModal} // Pass closeModal prop if required
        />
        <Navbtn value='Login' />
      </div>

      <RxHamburgerMenu
        size='40px'
        color='#00FFA3'
        onClick={openModal}
        className=' block lg:hidden'
      />
      {isModal && <ShowModal closeModal={closeModal} />}
    </div>
  );
}

export default NavBar;

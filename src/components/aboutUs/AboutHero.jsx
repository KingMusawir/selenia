import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import Coin from '../../assets/coins.png';
function AboutHero() {
  const [showFullText, setShowFullText] = useState(false);
  const toggleFullText = () => setShowFullText(!showFullText);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFullText(true);
      } else setShowFullText(false);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`${styles.aboutHero} about-hero-light pt-10 pb-2`}>
      <div className='max-w-screen-maxws mx-auto  md:max-w-screen-sm lg:max-w-screen-xl grid grid-cols-3 mb-16'>
        <div className='  col-span-2' style={{ gridColumn: 'span 1.8' }}>
          <h2
            className={`${styles.header} text-white text-[24px] md:text-[40px] lg:text-[64px] font-semibold mb-3 md:mb-10`}
          >
            Welcome to <span>Selenia</span>, The <span>crypto</span> bank for
            <span>Africans</span>
          </h2>
          <p className='text-[12px] md:text-[18px] text-white'>
            {showFullText ? (
              'At Selenia, we believe in empowering Africans to take control of their financial future by providing them with a platform to perform their normal banking transactions using cryptocurrency. Our mission is to make it easier and more accessible for people to manage their finances using the power of the blockchain. '
            ) : (
              <>
                At Selenia, we believe in empowering Africans to take control of
                their financial future by providing them with a platform to
                perform their normal banking transactions using cryptocurrency.
                <span
                  className=' text-[#00ffa3] text-center'
                  onClick={toggleFullText}
                >
                  <br />
                  Read More...
                </span>
              </>
            )}
          </p>
        </div>
        <div className=' justify-self-center self-center'>
          <img src={Coin} alt='' />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

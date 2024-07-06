import React from 'react';
import AboutCardProp from './AboutCardProp';
import Slider from 'react-slick';
import styles from './About.module.css';

function AboutCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.aboutCard}>
      <div className='   max-w-screen-maxws mx-auto  md:max-w-screen-sm lg:max-w-screen-xl pt-2 md:pt-12 py-12'>
        {window.innerWidth <= 768 ? (
          <Slider {...settings}>
            <AboutCardProp />
            <AboutCardProp />
            <AboutCardProp />
            <AboutCardProp />
          </Slider>
        ) : (
          <div className=' grid grid-cols-2 gap-10'>
            <AboutCardProp />
            <AboutCardProp />
            <AboutCardProp />
            <AboutCardProp />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutCard;

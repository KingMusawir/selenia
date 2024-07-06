import React from 'react';
import AboutHero from '../../components/aboutUs/AboutHero';
import NavBar from '../../components/navBar/NavBar';
import AboutCard from '../../components/aboutUs/AboutCard';
import Our from '../../components/aboutUs/Our/Our';
import Testimonials from '../../components/testimonial/Testimonials';
import Footer from '../../components/footer/Footer';

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className=' '>
        <AboutHero />
        <AboutCard />
        <Our />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;

import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Hero from '../../components/hero/Hero';
import CoinCard from '../../components/coinCard/CoinCard';
import Features from '../../components/features/Features';
import TestimonialCard from '../../components/testimonial/TestimonialCard';
import Testimonials from '../../components/testimonial/Testimonials';
import Subscription from '../../components/subcription/Subscription';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <div className='max-w-screen-maxws mx-auto  md:max-w-screen-md lg:max-w-screen-large '>
        <Hero />
      </div>
      <div className=' max-w-screen-maxws mx-auto  md:max-w-screen-md lg:max-w-screen-xl'>
        <CoinCard />
        <Features />
      </div>
      <Testimonials />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;

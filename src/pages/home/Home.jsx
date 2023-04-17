import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import Hero from './hero/Hero';
import Highlights from './highlights/Highlights';
import Testimonials from './testimonials/Testimonials';
import About from './about/About';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Home;

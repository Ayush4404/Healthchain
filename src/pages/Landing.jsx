import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Technology from '../components/Tech';
import Workflow from '../components/Workflow';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technology />
      <Workflow />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Landing;

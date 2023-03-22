import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from './AboutContent';

function About() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading='ABOUT' text='I am a friendly front-end developer...' />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About;

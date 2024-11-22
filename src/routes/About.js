import React from 'react'
import Navbar from '../components/Navbar'
import FooterNew from '../components/FooterNew';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT ME." text="Learn more about my journey"  />
      <AboutContent />
      <FooterNew />
     
    </div>
  )
}

export default About
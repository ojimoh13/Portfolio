import React from 'react'
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';
import Heroimg2 from '../components/Heroimg2';
import PrincingCard from "../components/PricingCard";
import Work from "../components/Work"



const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" style={{color: "blue"}} />
      <Work />
      <PrincingCard />
      <FooterNew />
    </div>
  )
}

export default Project
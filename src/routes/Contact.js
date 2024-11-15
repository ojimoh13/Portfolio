import React from 'react'
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <PricingCard />
      <FooterNew />
    </div>
  )
}

export default Contact
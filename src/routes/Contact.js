import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Form from './Form';


function Contact() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading='CONTACT' text="Let's have a chat..." />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;
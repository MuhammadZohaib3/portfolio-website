import React, { useRef } from 'react'
import './index.css';
import welmart from '../../assets/Walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.jpg';
import facebook from '../../assets/Facebook.png';
import Facebook from '../../assets/Facebook.com.png';
import Twitter from '../../assets/Twitter.com.png';
import Youtube from '../../assets/Youtube.com.png';
import Insta from '../../assets/Instagram.com.png'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert('Sent Email !');
};
  return (
    <section id="client">
    <div id='contactBox'>
      <h2 className="title">My clients</h2>
      <p className="para">
        I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies.I have worked with includes.
      </p>
    
    <div className='contactIm'>
      <img src={welmart}   className='imgs' alt='' />
      <img src={adobe}     className='imgs' alt='' />
      <img src={microsoft} className='imgs' alt='' />
      <img src={facebook}  className='imgs' alt='' />
    </div>
    </div>
    <div id='contact'>
   <h1 className='contactTitle'>Contact Me</h1>
   <span className='contactDesc'>Please fill out the form below to discuss any work opportunities </span>
   <form className='contactForm' ref={form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='Your Name' name='your_name' /> 
    <input type='email' className='email' placeholder='Your Email' name='your_email' />
    <textarea name="message" className='message' rows="5" placeholder='Your Message'></textarea>
    <button type='submit' value="Send" className="btn">Submit</button>
    <div className='LinksImg'>
      <img src={Facebook} className='link' alt='link' />
      <img src={Twitter}  className='link' alt='link' />
      <img src={Youtube}  className='link' alt='link' />
      <img src={Insta}    className='link' alt='link' />
     </div>
    </form>
    </div>
    </section>
  )
}

export default Contact;
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
import emailpic from '../assets/026-mail.png';
import plane from '../assets/027-plane.png'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_8qlnk6r';
    const templateId = 'template_86bopci';
    const publicKey = 'qgZCO2u-EsYVOrtOJ';

    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: 'Siwat Photinam',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <>
      <Element name="ContactForm">
      <div className="word1 flex justify-center">
        <div className="contact bg-[#B7D9E2] font-bold text-[#0C3756] text-lg md:text-4xl py-2.5 px-2.5 rounded-lg mt-14">
          <div className="flex items-center">
             <img src={emailpic} className="w-6 h-6 mr-2" alt="Email Icon" />
          <span>Contact Me</span>
          </div>
        </div>
      </div>

      <div className="boxform grid grid-col-1">
      <form onSubmit={handleSubmit} 
        className="contactform ml-10 mr-10 mt-5 flex flex-col justify-self-center w-[80%] md:w-[40%] mb-32 md:mb-14">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg mb-2 py-1.5"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg mb-4 py-1.5"
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg mb-4"
        />
        <button 
          type="submit"
          className="rounded-lg bg-[#FFF9BA] font-bold py-1.5 active:bg-yellow-300 active:scale-95">
          <div className="flex justify-center">  
          <img src={plane} className="w-5 h-5 mr-2" alt="Plane Icon" />  
           Send
          </div>  
        </button>
      </form>
      </div>
      </Element>
    </>
  );
}

export default ContactForm;


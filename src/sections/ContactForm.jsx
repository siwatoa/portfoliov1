import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactme from "../assets/contactme.png";
import { Element } from 'react-scroll';

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
      from_email: email,
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
      <div className="word1 inline-block flex justify-center">
            <div className="webdev bg-[#B7D9E2] font-bold text-[#0C3756] 
                 text-lg md:text-4xl py-2 px-2.5 rounded-lg mt-14">
               Contact Me 
            </div>
      </div>  

      <div className="boxform grid grid-col-1">
      <form onSubmit={handleSubmit} 
        className="contactform ml-10 mr-10 mt-5 flex flex-col justify-self-center w-[80%] md:w-[40%] mb-14">

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
          className="rounded-lg bg-[#FFF9BA] font-bold py-1.5">
          Send
        </button>
      </form>
      </div>
      </Element>
    </>
  );
}

export default ContactForm;


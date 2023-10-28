import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactme from "../assets/contactme.png";

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
      <div className="structure grid grid-cols-2">

      <form onSubmit={handleSubmit} 
        className="contactform col-span-2 md:col-span-1 flex flex-col justify-center
        mt-28 mb-28 ml-10 mr-10 w-[80%]">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg mb-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg mb-4"
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
          className="rounded-lg bg-[#B7D9E2] font-bold">
          Send
        </button>
      </form>

      <div className="picHome md:col-span-1 order-1 md:order-2 flex items-center mt-28">
          <img src={contactme} alt="mypic image" 
           className="hidden md:w-[500px] md:h-[250px] md:block" />
      </div>

      </div>
    </>
  );
}

export default ContactForm;

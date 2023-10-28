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
      from_name: name,
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

      <form onSubmit={handleSubmit} className="contactform col-span-1 flex flex-col justify-center items-center mt-20 mb-10">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg mb-2 px-2 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg mb-4 px-2 py-2"
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg mb-4 w-[400px] h-[300px]"
        />
        <button 
          type="submit"
          className="rounded-lg px-20 py-2 bg-[#B7D9E2] font-bold hover:scale-105">
          Send
        </button>
      </form>

      <div className="picHome col-span-1 order-1 md:order-2">
          <img src={contactme} alt="mypic image" 
           className="hidden md:w-[500px] md:h-[250px] md:block flex mt-52" />
      </div>

      </div>
    </>
  );
}

export default ContactForm;

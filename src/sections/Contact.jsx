// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactMe = () => {
    
//     const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//         'service_8qlnk6r', 
//         'template_86bopci', 
//         form.current, 
//         'qgZCO2u-EsYVOrtOJ')
//         .then((result) => {
//           console.log(result.text);
//           console.log("message sent");
//       }, (error) => {
//           console.log(error.text);
//       });
//     };

//     return(
//         <>
//            <div className='email grid grid-col-1'>
//            <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//            </form>
//            </div>
//         </>
//     )
// };

// export default ContactMe;
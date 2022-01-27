import React from "react";
import { send } from 'emailjs-com';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// require('dotenv').config()


function Contact(props) {
  const currentTab= {
    name: "contact",
    description: "Get in touch with me",
  };

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    from_email: '',
    from_phone:'',
    message: '',
  });

  let SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
  let TEMPLATE_ID= process.env.REACT_APP_TEMPLATE_ID;
  let USER_ID= process.env.REACT_APP_USER_ID;


  const onSubmit = (e) => {
    e.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentTab.name)}</h1>

      <div>
        <form onSubmit={onSubmit}>
         <input
           type='text'
           name='from_name'
           placeholder='from name'
           value={toSend.from_name}
           onChange={handleChange}
           required
         />
          <input
         type='text'
         name='from_email'
         placeholder='Your email'
         value={toSend.from_email}
         onChange={handleChange}
         required
        />
           <input
         type='text'
         name='from_phone'
         placeholder='Your phone'
         value={toSend.from_phone}
         onChange={handleChange}
        />
         <input
           type='text'
           name='message'
           placeholder='Your message'
           value={toSend.message}
           onChange={handleChange}
         />

          <button type='submit'>Submit </button>
       </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react'
import emailjs from '@emailjs/browser'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = event.target[0].value;

    emailjs.send(
      'service_qxr7tsb',         // Replace with your actual Service ID
      'template_ia83ghp',        // Replace with your actual Template ID
      { user_email: email },     // Match this with your template variable
      'PUtFDK5VtdZ6Bycmb'          // Replace with your Public Key
    ).then(
      (response) => {
        alert("Subscribed successfully! Check your email.");
      },
      (error) => {
        alert("Subscription failed. Please try again.");
        console.error(error);
      }
    );
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dicta.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox;

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const NewsLetterBox = () => {

  const [loading, setLoading] = useState(false); // <-- loader state

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true); // start loader
    const email = event.target[0].value;

    emailjs.send(
      'service_qxr7tsb',
      'template_ia83ghp',
      { user_email: email },
      'PUtFDK5VtdZ6Bycmb'
    ).then(
      (response) => {
        alert("Subscribed successfully! Check your email.");
        setLoading(false); // stop loader
      },
      (error) => {
        alert("Subscription failed. Please try again.");
        console.error(error);
        setLoading(false); // stop loader
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
        <button type='submit' className='bg-black text-white text-xs px-10 py-4' disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox;

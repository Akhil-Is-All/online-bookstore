import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.booksabout} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo iste consequuntur voluptatibus quod quisquam, natus eum eaque eligendi debitis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis laudantium deserunt dolorum, suscipit laboriosam. Odit illum beatae minima maiores dicta iure laborum? Quisquam, modi?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, fugit id aliquid ducimus libero eveniet temporibus dignissimos repudiandae cumque sequi!</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto facilis suscipit rerum autem velit in pariatur quae accusamus reiciendis!</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto facilis suscipit rerum autem velit in pariatur quae accusamus reiciendis!</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto facilis suscipit rerum autem velit in pariatur quae accusamus reiciendis!</p>

        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
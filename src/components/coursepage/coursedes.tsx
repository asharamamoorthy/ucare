import Image from 'next/image'
import React from 'react'
import courseintro from "../../../public/assets/images/ourcourse/course_intro.jpeg"

function Coursedes() {
  return (
    <div>
      <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 md:py-20 py-10 overflow-hidden">
        <div data-aos="fade-right" className="lg:col-span-6 md:col-span-12 md:px-5 px-2 grid place-items-center">
          <Image src={courseintro} alt='' height={400} width={400} className='h-full' />
        </div>
        <div data-aos="fade-left" className="lg:col-span-6 md:col-span-12 md:px-5 px-2 grid place-items-center">
          <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
            <span className='text-black '>UCare</span> Beauty Course
            <div className='py-2'>
              <hr className='border border-primary-400 ' />
            </div>
          </h1>
          <p className='md:text-lg font-semibold md:p-5 text-justify'>
            Choose from a diverse array of courses tailored to meet your specific interests and career goals. From mastering the art of makeup to becoming a skilled hairstylist or delving into the intricacies of skincare and aesthetics, our courses cover the entire spectrum of beauty and salon management.
          </p>
          <p className='md:text-lg font-semibold md:p-5 text-justify pt-4'>
            Whether you&apos;re a beginner eager to explore the world of beauty or an experienced professional looking to enhance your skills, UCare Beauty  &amp; Fashion Academy is your gateway to a fulfilling and successful career. Join us and embark on a transformative journey where your passion meets expertise, and your dreams take flight. Discover the art of beauty at UCare - where education is an experience, and every student is a masterpiece in the making.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coursedes
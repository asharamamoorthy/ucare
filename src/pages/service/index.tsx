import FaqAccordion from '@/components/aboutpage/faq';
import Testimonial from '@/components/aboutpage/testimonial';
import OurService from '@/components/homePage/ourservice';
import { getLayout } from '@/components/layouts/layout';
import { getPageTitle } from '@/components/pageTitle';
import Services from '@/components/sercivepage.tsx/services';
import Head from 'next/head';
import React from 'react'

function Service() {
  return (
    <div>
      <Head>
        <title>{getPageTitle("Service")}</title>
      </Head>
      <div className="bg-[url('/assets/images/servicebanner.jpg')] bg-no-repeat w-full bg-cover bg-center bg-fixed ">
        <div className=' bg-black bg-opacity-60 md:w-full z-20 md:py-32 py-40'>
          <div className='font-semibold text-white px-9 md:px-7 '>
            <h1 className='md:text-6xl text-4xl md:py-10 py-3 font-serif'>Service</h1>
            <p className='text-lg md:px-32 pl-7 '>Revealing the best version of you.!!</p>
          </div>
        </div>
      </div>

      <Services />
      <Testimonial/>
      <FaqAccordion faqs={[]} />
    </div>
  )
}

export default Service;
Service.getLayout = getLayout
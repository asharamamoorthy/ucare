import ContactCard from '@/components/contactPage/contactcard';
import ContactForm from '@/components/contactPage/contactform';
import MapComponent from '@/components/contactPage/map';
import { getLayout } from '@/components/layouts/layout';
import { getPageTitle } from '@/components/pageTitle';
import Head from 'next/head';
import React from 'react'

function Contact() {
  return (
    <div>
      <Head>
        <title>{getPageTitle("Contact")}</title>
      </Head>
      <div className="bg-[url('/assets/images/contactbanner.jpeg')] bg-no-repeat w-full bg-cover bg-center bg-fixed ">
        <div className=' bg-black bg-opacity-60 md:w-full z-20 py-28'>
          <div className='font-semibold text-white px-9 md:px-7 '>
            <h1 className='md:text-6xl text-4xl md:py-10 py-3 font-serif'>CONTACT US</h1>
            <p className='text-lg md:px-32 pl-7 '>Revealing the best version of you.!!</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-primary-100">
        <ContactCard/>
        <ContactForm />
        <MapComponent />
      </div>
    </div>
  )
}

export default Contact;
Contact.getLayout = getLayout;
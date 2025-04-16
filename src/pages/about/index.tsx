import AboutDescription from '@/components/aboutpage/aboutdes';
import FaqAccordion from '@/components/aboutpage/faq';
import OrganicProduct from '@/components/aboutpage/organic';
import Testimonial from '@/components/aboutpage/testimonial';
import Certification from '@/components/coursepage/certification';
import Experience from '@/components/homePage/experience';
import { getLayout } from '@/components/layouts/layout';
import { getPageTitle } from '@/components/pageTitle';
import Head from 'next/head';
import React from 'react'

function About() {
    return (
        <div>
            <Head>
                <title>{getPageTitle("About")}</title>
            </Head>
            <div className="bg-[url('/assets/images/aboutbanner.jpg')] bg-no-repeat w-full bg-cover bg-right-top bg-fixed ">
                <div className=' bg-black bg-opacity-60 md:w-full z-20 py-32'>
                    <div className='font-semibold text-white px-9 md:px-7 '>
                        <h1 className='md:text-6xl text-4xl md:py-10 py-3 font-serif'>ABOUT US</h1>
                        <p className='text-lg md:px-32 pl-7 '>Revealing the best version of you.!!</p>
                    </div>
                </div>
            </div>

            <AboutDescription />
            <OrganicProduct/>
            <FaqAccordion faqs={[]} />
            <Experience/>
            <Testimonial/>
            <Certification/>
        </div>
    )
}

export default About;
About.getLayout = getLayout
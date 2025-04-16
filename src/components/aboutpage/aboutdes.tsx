import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import abtimg from "../../../public/assets/images/aboutpageimg/aboutimg.jpg"

function AboutDescription() {
    return (
        <div className='bg-gradient-to-b from-primary-50 to-primary-100'>
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 md:py-20 py-10 overflow-hidden">
                <div data-aos="fade-right" className="lg:col-span-6 md:col-span-12 md:px-5 px-2 grid place-items-center">
                    <Image src={abtimg} alt='' height={400} width={400} className='w-full' />
                </div>
                <div data-aos="fade-left" className="lg:col-span-6 md:col-span-12 md:px-5 px-2">
                    <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                        <span className='text-black '>About</span> Ucare Beauty & Fashion Academy
                        <div className='py-2'>
                            <hr className='border border-primary-400 ' />
                        </div>
                    </h1>
                    <p className='md:text-lg font-semibold md:p-5 text-justify'>
                        Welcome to <span className='text-primary-500 '>UCare</span> Beauty &amp; Fashion Academy, where we believe in the power of education and empowerment. We are a unique organization that provides both beauty services and training programs, with a focus on serving our community and supporting hair stylists and salon professionals.
                    </p>
                    <p className='md:text-lg font-semibold md:p-5 text-justify pt-4'>
                        Simultaneously, our Fashion Academy opens doors to a transformative learning experience. Discover your passion for beauty with courses designed to ignite creativity and refine skills. Our academy, led by industry professionals, ensures hands-on learning in a simulated salon environment. Whether you seek pampering at our parlor or aspire to master the art of beauty through our academy, UCare is your destination for holistic beauty experiences and professional excellence.
                    </p>
                    <div className='flex justify-center items-center pt-5'>
                        <Link href="/contactUs" className='btn '>
                            Contact Us
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDescription
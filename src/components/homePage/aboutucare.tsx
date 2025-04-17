import Image from 'next/image'
import React from 'react'
import homeabout from "../../../public/assets/images/home_abt.jpg"
import wave from "../../../public/assets/lottie/wave.json"
import Link from 'next/link'
function AboutUcare() {
    return (
        <div className='bg-gradient-to-b from-primary-50 to-primary-100'>
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 md:py-20 py-10 overflow-hidden">
                <div data-aos="fade-right" className="lg:col-span-6 md:col-span-12 md:px-5 px-2 grid place-items-center">
                    <Image src={homeabout} alt='' height={400} width={400} className='w-full' />
                </div>
                <div data-aos="fade-left" className="lg:col-span-6 md:col-span-12 md:px-5 px-2">
                    <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                        <span className='text-black '>About</span> U Care Beauty
                        <div className='py-2'>
                            <hr className='border border-primary-400 ' />
                        </div>
                    </h1>
                    <p className='md:text-lg font-semibold md:p-5 text-justify'>
                        Welcome to U Care Beauty &amp; Fashion Academy, where we specialize in creating stunning bridal makeup looks while also training the next generation of beauty professionals. Our mission is to provide exceptional bridal makeup services that make brides look and feel their best on their special day, as well as offer high-quality education to aspiring makeup artists.
                    </p>
                    <p className='md:text-lg font-semibold md:p-5 text-justify pt-4'>
                        Our Fashion Academy is equipped with the latest tools and technology to ensure that our students receive a comprehensive and hands-on education. We maintain a low student-to-teacher ratio to ensure that each student receives individualized attention and guidance. Our instructors are experienced professionals who are passionate about teaching and mentoring the next generation of makeup artists.
                    </p>
                    <p className='md:text-lg font-semibold md:p-5 text-justify pt-4'>
                        At U Care Beauty &amp; Fashion Academy, we are committed to creating a welcoming and inclusive environment for all. We believe that beauty is for everyone, and we strive to empower our students and clients to feel confident and beautiful in their own skin.
                    </p>
                    <div className='flex justify-center items-start pt-5'>
                        <div className='relative'>
                        </div>
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

export default AboutUcare
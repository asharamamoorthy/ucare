import Image from 'next/image'
import React from 'react'
import dots from "../../../public/assets/lottie/bg.json"
import Link from 'next/link'

function OurService() {
    const serviceData = [
        {
            img: "beautyclass.jpg",
            title: "Beauty Class",
        },
        {
            img: "bridemakeup.jpg",
            title: "Bridal Make Up",
        },
        {
            img: "basic.jpeg",
            title: "Basic Make-Up",
        },
        {
            img: "threading.jpg",
            title: "Threading",
        },
        {
            img: "face.jpeg",
            title: "Facial",
        },
        {
            img: "bleach.jpeg",
            title: "Bleach",
        },
        {
            img: "manicure.jpeg",
            title: "Manicure",
        },
        {
            img: "oilmassage.jpeg",
            title: "Oil massage",
        },
        {
            img: "pedicuure.jpg",
            title: "Pedicure",
        },
        {
            img: "haircolor.jpg",
            title: "Hair Colouring",
        },
        {
            img: "waxing.jpg",
            title: "Waxing",
        },
        {
            img: "haircut.jpeg",
            title: "Hair Cuts",
        },
        {
            img: "meh.jpg",
            title: "Mehandi",
        },
        {
            img: "saree.jpg",
            title: "Saree Draping",
        },
        {
            img: "flowers.jpg",
            title: "Flowers",
        },
    ]
    return (
        <div>
            <div className='flex justify-center items-center py-10'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Our</span> Service
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='md:max-w-4xl text-lg p-3 text-center'>
                    We believe in fostering a culture of beauty that goes beyond appearances. It&apos;s about embracing your uniqueness, nurturing self-confidence, and celebrating the beauty within. Join us on this extraordinary beauty voyage, where every visit is an opportunity to rediscover and enhance your innate allure.
                </p>
            </div>
            <div className='relative'>
            </div>
            <div className='flex justify-center items-center py-20 md:m-5'>
                <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-4 p-3'>
                    {serviceData.map((val, index) => (
                        <div key={index} data-aos="fade-in" className="oscard lg:col-span-3 md:col-span-6 group p-6">
                            <Image src={"/assets/images/ourservice/" + val.img} alt='' height={200} width={200} className='h-52 rounded-xl' />
                            <h1 className='text-center text-primary-500 text-xl font-semibold py-5 group-hover:text-white transition-colors duration-200'>{val.title}</h1>
                        </div>
                    ))}
                    <Link href="/service" data-aos="fade-in" className="oscard lg:col-span-3 md:col-span-6 group p-6">
                        <div className='flex justify-center items-center gap-3'>
                            <p className='text-center text-primary-500 text-xl font-semibold py-5 group-hover:text-white transition-colors duration-200'>View All</p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 '>
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurService
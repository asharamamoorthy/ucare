import Image from 'next/image'
import React from 'react'
import organicproduct from "../../../public/assets/images/aboutpageimg/organic.jpg"

function OrganicProduct() {
    return (
        <div className=''>
            <div className='flex justify-center items-center py-10'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>About</span> Our Products
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 overflow-hidden">
                <div data-aos="fade-left" className="lg:col-span-6 md:col-span-12 md:px-5 px-2">
                    <p className='md:text-lg md:p-5 text-justify'>
                    Welcome to <span className='text-primary-500 font-semibold'> UCare</span>, where we believe that beauty should be as pure as nature intended. Our commitment to organic beauty is at the heart of everything we do, ensuring that you experience the transformative power of nature in every product.
                    </p>
                    <p className='md:text-lg md:p-5 pt-2 text-justify'>
                        At<span className='text-primary-500 font-semibold'> UCare</span>, we embrace the philosophy that beauty should be nurtured, not compromised. Our organic beauty products are crafted with the purest ingredients sourced directly from nature. By eliminating harmful chemicals and toxins, we provide a skincare and beauty regimen that is not only effective but also gentle on your skin and the environment.
                    </p>
                    <h1 className='md:text-xl font-semibold md:px-5 pt-2 text-justify'>Our Organic Ingredients:</h1>
                    <p className='md:text-lg md:p-5 text-justify pt-4'>
                        Each product is thoughtfully curated with a blend of botanical extracts, essential oils, and plant-based ingredients. From the soothing properties of aloe vera to the rejuvenating effects of organic oils, every ingredient is carefully chosen for its unique contribution to your beauty and well-being.
                    </p>
                </div>
                <div data-aos="fade-right" className="flex justify-center items-center lg:col-span-6 md:col-span-12 md:px-5 px-2 py-5">
                    <Image src={organicproduct} alt='' height={300} width={200} className='w-96 ' />
                </div>
            </div>
        </div>
    )
}

export default OrganicProduct
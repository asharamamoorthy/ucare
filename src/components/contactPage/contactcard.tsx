import React from 'react'

function ContactCard() {
    return (
        <div>
            <div className='flex justify-center items-center py-10'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Way</span> To Contact Us
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 place-items-center gap-5">
                <div data-aos="fade-right" data-aos-delay="200" className="h-72 card grid place-items-center lg:col-span-4 md:col-span-6 md:px-5 px-2 group">
                    <div>
                        <h1 className='text-center text-primary-500 text-xl font-semibold group-hover:text-white transition-colors duration-200 pb-10'>Email</h1>
                        <p className='font-semibold text-lg'>ucare@gmail.com</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="400" className="h-72 card grid place-items-center lg:col-span-4 md:col-span-6 md:px-5 px-2 group">
                    <div>
                        <h1 className='text-center text-primary-500 text-xl font-semibold group-hover:text-white transition-colors duration-200 pb-10'>Contact</h1>
                        <p className='font-semibold text-lg'>+91 96550 42828</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="600" className="h-72 card grid place-items-center lg:col-span-4 md:col-span-6 md:px-5 px-2 group">
                    <div>
                        <h1 className='text-center text-primary-500 text-xl font-semibold group-hover:text-white transition-colors duration-200 pb-10'>Address</h1>
                        <p className='text-center font-semibold'>No12/250, Chennai Salai, Krishnagiri HO, Krishnagiri - 635001 (Near Roundana)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
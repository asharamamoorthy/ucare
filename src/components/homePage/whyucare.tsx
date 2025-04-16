import React from 'react'

function WhyUcare() {
    return (
        <div className='bg-gradient-to-b from-primary-100 to-primary-50'>
            <div className='flex justify-center items-center py-5'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Why</span> To Choose Us
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className='flex justify-center items-center md:py-10'>
                <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-4 md:px-10 p-3'>
                    <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                        <div className='card-content'>
                            <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>Expert Instructors</h1>
                            <p className='text-slate-800 text-justify card-description'>Learn from industry professionals with years of experience in the beauty field. Our instructors are passionate about sharing their knowledge and helping you develop the skills needed to succeed.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="200" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                        <div className='card-content'>
                            <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>Hands-On Experience</h1>
                            <p className='text-slate-800 text-justify card-description'>We believe in learning by doing. Our courses provide hands-on training, allowing you to practice and refine your skills in a real parlour environment.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                        <div className='card-content'>
                            <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>Career Support</h1>
                            <p className='text-slate-800 text-justify card-description'>Beyond the training, we offer career support services to help you kickstart your journey in the beauty industry. From resume building to job placement assistance, we are committed to your success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUcare
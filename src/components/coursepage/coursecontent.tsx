import Lottie from 'lottie-react';
import React from 'react';
import dots from "../../../public/assets/lottie/bg.json"

const BeautyCoursePage: React.FC = () => {
    return (
        <div className="container mx-auto text-center">
            <div className='md:p-10 p-3'>
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-black w-fit'>
                        Welcome to <span className='text-primary-500 '>UCare</span> Beauty &amp; Fashion Academy
                        <div className='py-2'>
                            <hr className='border border-primary-400 ' />
                        </div>
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='md:max-w-4xl text-lg p-3 text-center'>
                        Elevate your passion, master your craft. Explore our beauty courses designed to unlock your full potential in the
                        dynamic world of beauty and wellness.
                    </p>
                    <p className='md:max-w-3xl text-lg p-3 text-center'>
                        Unlock your potential in the world of beauty and embark on a transformative journey with UCare Beauty &amp; Fashion Academy. Our comprehensive courses are designed to empower students with the skills and knowledge needed to thrive in the dynamic beauty industry.
                    </p>
                </div>
            </div>
            <section className="pt-8">
                <h2 className="text-2xl font-semibold mb-4">Why To Choose <span className='text-primary-500 '>UCare</span> Beauty &amp; Fashion Academy?</h2>
                <div className='flex justify-center items-center md:py-10'>
                    <div className='relative'>
                        <Lottie animationData={dots} loop={true} className='md:h-screen md:w-96 absolute md:-rotate-90 bottom-0' />
                    </div>
                    <div className='grid md:grid-cols-12 grid-cols-1 md:gap-5 md:m-5 gap-4'>
                        <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                            <div className='card-content'>
                                <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>Expert Faculty</h1>
                                <p className='text-slate-800 text-justify card-description'>Learn from seasoned professionals who bring a wealth of experience and expertise to the classroom. Our instructors are committed to providing top-notch education and guidance to help you succeed.</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                            <div className='card-content'>
                                <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>State-of-the-Art Facilities</h1>
                                <p className='text-slate-800 text-justify card-description'>Immerse yourself in a conducive learning environment equipped with modern tools and technologies. Our training center is designed to simulate real-world beauty parlour scenarios, ensuring you gain practical, hands-on experience.</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white card">
                            <div className='card-content'>
                                <h1 className='text-primary-600 text-2xl font-semibold py-3 card-title'>Wide Range of Courses</h1>
                                <p className='text-slate-800 text-justify card-description'>Whether you&apos;re a beginner looking to start your journey or a seasoned professional seeking advanced training, we offer a variety of courses to cater to your needs. From basic beauty techniques to specialized skills, we&apos;ve got you covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BeautyCoursePage;

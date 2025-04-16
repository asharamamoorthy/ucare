import React from 'react'
function CourseTeach() {
    return (
        <div className="bg-[url('/assets/images/ourcourse/coursebgbanner.jpg')] bg-no-repeat w-full bg-cover bg-center bg-fixed py-10">
            <div className='flex justify-center items-center'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>How</span> Our Students train
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className='flex justify-center items-center md:py-10'>
                <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-4 md:px-10 p-3'>
                    {/* 1 */}
                    <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white ">
                        <h1 className=' text-primary-500 text-xl pb-3 font-bold capitalize'>Direct class Sessions</h1>
                        <video controls width="500" height="400" className='rounded-lg'>
                            <source src="/assets/videos/v1.mp4" type="video/mp4" />
                        </video>
                        <p className='py-2 font-semibold'>Join our direct class sessions to receive hands-on training and in-depth insights into the beauty parlour course. This video provides an overview and explains the course topics. Review the equipment needed for the service and get ready for an enriching learning experience.</p>
                    </div>
                    {/* 2 */}
                    <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white ">
                        <h1 className=' text-primary-500 text-xl pb-3 font-bold capitalize'>students review about topic</h1>
                        <video controls width="500" height="400" className='rounded-lg'>
                            <source src="/assets/videos/v2.mp4" type="video/mp4" />
                        </video>
                        <p className='py-2 font-semibold'>Hear directly from our students as they share their insights and reviews about the beauty parlour course topic. Discover their thoughts, experiences, and how the course has impacted their skills and knowledge. Get inspired by their journeys and consider joining our vibrant community of learners.</p>
                    </div>
                    {/* 3 */}
                    <div data-aos="fade-right" className="lg:col-span-4 md:col-span-6 text-center border-2 rounded-xl p-5 bg-white">
                        <h1 className='text-primary-500 text-xl pb-3 font-bold capitalize'>Practice Sessions with Experts</h1>
                        <video controls width="500" height="400" className='rounded-lg'>
                            <source src="/assets/videos/v3.mp4" type="video/mp4" />
                        </video>
                        <p className='py-2 font-semibold'>Engage in practical sessions led by industry experts. This video showcases live practice sessions where you can observe professionals in action. Enhance your skills by learning from the best and gain practical insights that go beyond theoretical knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseTeach
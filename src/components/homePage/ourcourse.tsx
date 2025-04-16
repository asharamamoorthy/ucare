import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OurCourse() {
    return (
        <div>
            <div className='flex justify-center items-center py-3'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Our</span> Courses
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='md:max-w-3xl text-lg p-3 text-center'>
                    Explore a wide array of beauty disciplines, including makeup artistry, hair styling, skincare, and nail care. Our courses are crafted to cater to various interests, ensuring you find the perfect path to express your creativity.
                </p>
            </div>
            <div className='flex justify-center items-center py-20'>
                <div className='px-5 flex flex-wrap gap-5 justify-center'>
                    <Link href="/course" className={`coursebtn`}> <span>Basic Beautician Course</span> </Link>
                    <Link href="/course" className={`coursebtn`}> <span>Advance Beautician Course</span> </Link>
                    <Link href="/course" className={`coursebtn`}> <span className='flex justify-center items-center'>Advance Make-up &amp; hairStyle Course</span> </Link>
                </div>
            </div>
        </div>
    )
}

export default OurCourse
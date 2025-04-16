import Certification from '@/components/coursepage/certification';
import CourseHead from '@/components/coursepage/course';
import CourseTeach from '@/components/coursepage/course_video';
import BeautyCoursePage from '@/components/coursepage/coursecontent';
import Coursedes from '@/components/coursepage/coursedes';
import StudentReview from '@/components/coursepage/studentsreview';
import { getLayout } from '@/components/layouts/layout';
import { getPageTitle } from '@/components/pageTitle'
import Head from 'next/head'
import React from 'react'

function Course() {
  return (
    <div>
      <Head>
        <title>{getPageTitle("Course")}</title>
      </Head>
      <div className="bg-[url('/assets/images/coursebanner.jpeg')] bg-no-repeat w-full bg-cover bg-bottom bg-fixed ">
        <div className=' bg-black bg-opacity-60 md:w-full z-20 md:py-28 py-40'>
          <div className='font-semibold text-white px-9 md:px-7 '>
            <h1 className='md:text-6xl text-4xl md:py-10 py-3 font-serif'>COURSE</h1>
            <p className='text-lg md:px-32 pl-7 '>Elevate Your Passion, Master Your Craft !!</p>
          </div>
        </div>
      </div>

      <div>
        <BeautyCoursePage />
        <Coursedes />
        <CourseHead />
        <StudentReview/>
        <CourseTeach/>
        <Certification/>
      </div>
    </div>
  )
}

export default Course;
Course.getLayout = getLayout
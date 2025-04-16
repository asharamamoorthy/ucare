import React from 'react';
import NumberCounter from '../numbercounter';

function Experience() {
    return (
        <div className="bg-[url('/assets/images/experience.jpg')] bg-no-repeat w-full bg-cover bg-center bg-fixed ">
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 md:py-20 py-10 overflow-hidden">
                <div className="lg:col-span-3 md:col-span-5 md:px-5 px-2 py-5">
                    <p className='text-center font-bold text-4xl'>
                        <NumberCounter className='text-center font-bold text-4xl' startValue={0} endValue={11} duration={1500} />+
                    </p>
                    <h1 className='text-center text-xl font-semibold'>Years of Experience</h1>
                </div>
                <div className="lg:col-span-3 md:col-span-5 md:px-5 px-2 py-5">
                    <p className='text-center font-bold text-4xl'>
                        <NumberCounter className='text-center font-bold text-4xl' startValue={0} endValue={10} duration={1500} />+
                    </p>
                    <h1 className='text-center text-xl font-semibold'>Courses</h1>
                </div>
                <div className="lg:col-span-3 md:col-span-5 md:px-5 px-2 py-5">
                    <p className='text-center font-bold text-4xl'>
                        <NumberCounter className='text-center font-bold text-4xl' startValue={0} endValue={3} duration={1500} />+
                    </p>
                    <h1 className='text-center text-xl font-semibold'>Staffs</h1>
                </div>
                <div className="lg:col-span-3 md:col-span-5 md:px-5 px-2 py-5">
                    <p className='text-center font-bold text-4xl'>
                        <NumberCounter className='text-center font-bold text-4xl' startValue={0} endValue={100} duration={1500} />+
                    </p>
                    <h1 className='text-center text-xl font-semibold'>Students</h1>
                </div>
            </div>
        </div>
    );
}

export default Experience;

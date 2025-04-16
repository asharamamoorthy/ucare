import AboutUcare from '@/components/homePage/aboutucare';
import Experience from '@/components/homePage/experience';
import HomeSlider from '@/components/homePage/homeslier';
import OurCourse from '@/components/homePage/ourcourse';
import OurService from '@/components/homePage/ourservice';
import WhyUcare from '@/components/homePage/whyucare';
import { getLayout } from '@/components/layouts/layout'
import Head from 'next/head';
import React, { useEffect } from 'react';

const DisableTextSelection = () => {
    useEffect(() => {
        const handleMouseDown = (event: any) => {
            event.preventDefault();
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);
};

const Home = () => {
    DisableTextSelection();
    return (
        <div>
            <Head>
                <title>UCare</title>
            </Head>
            <HomeSlider />
            <AboutUcare />
            <WhyUcare />
            <OurService />
            {/* <Experience /> */}
            <OurCourse />
        </div>
    )
}

export default Home
Home.getLayout = getLayout;

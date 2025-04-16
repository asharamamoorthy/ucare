import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function Certification() {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const certificationimg = [
        {
            img: "c1.jpg",
        },
        {
            img: "c2.jpg",
        },
        {
            img: "c3.jpg",
        },
        {
            img: "c4.jpg",
        },
        {
            img: "c5.jpg",
        },
        {
            img: "c6.jpg",
        },
        {
            img: "c8.jpg",
        },
        {
            img: "c9.jpg",
        },
        {
            img: "c10.jpg",
        },
        {
            img: "c11.jpg",
        },
        {
            img: "c12.jpg",
        },
        {
            img: "c13.jpg",
        },
        {
            img: "c14.jpg",
        },
        {
            img: "c15.jpg",
        },
    ]

    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                <h1 className='md:text-3xl text-2xl text-center font-semibold md:p-5 p-3 text-primary-500 w-fit capitalize'>
                    <span className='text-black '>Certificate</span> for completion of Beauty Course
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='md:max-w-5xl text-lg p-3 text-center'>
                    Embark on a transformative journey in the world of beauty with our comprehensive beauty courses that promise not just skills but a certification that opens doors to endless possibilities. At <span className='text-pink-500'>Ucare</span>, we are committed to nurturing your passion for beauty and empowering you with the knowledge and expertise needed to excel in the dynamic beauty industry.
                </p>
            </div>

            <div data-aos="fade-in">
                <div className='md:p-10 p-2 lg:px-48'>
                    <Swiper
                        className='flex justify-center items-center'
                        modules={[Navigation, Scrollbar, A11y, Autoplay]}
                        spaceBetween={1}
                        loop={true}
                        slidesPerView={slidesPerView}
                        autoplay={{ delay: 3000 }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {certificationimg.map((val, index) => (
                            <SwiperSlide key={index} className='flex justify-center items-center'>
                                <div className='flex justify-center items-center'>
                                    <Image src={"/assets/images/certification/" + val.img} alt='' height={300} width={300} className='h-[260px] w-60 hover:scale-110 transition-transform duration-200' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >
        </div >
    )
}

export default Certification
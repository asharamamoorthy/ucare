import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const testim0nialData = [
        {
            img: "character1.png",
            content: "I can't thank UCARE enough for the incredible transformation they've brought to my look. Before discovering them, I struggled with finding a hairstyle that truly suited me. The expert stylists listened to my concerns and worked their magic. Now, I walk out with confidence, knowing I have a haircut that complements my features perfectly.",
        },
        {
            img: "character2.png",
            content: "Choosing UCARE for my bridal makeup was the best decision I made for my wedding day. The makeup artists demonstrated exceptional skill, creating a flawless look that lasted throughout the day. Thanks to their expertise, I felt like an absolute princess on my special day.",
        },
        {
            img: "character3.png",
            content: "What sets UCARE apart is their commitment to personalized service. The stylists take the time to understand my preferences and tailor each experience to my individual needs. It's this level of care and attention that keeps me a loyal customer. I wouldn't trust anyone else with my beauty needs.",
        }
    ]

    return (
        <div className='bg-gradient-to-t from-primary-50 to-primary-100'>
            <div className='flex justify-center items-center'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>What</span> Our Client&apos;s Says
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div data-aos="fade-in">
                <div className='md:p-10 p-2 lg:px-48'>
                    <Swiper
                        className='flex justify-center items-center bg-[url("/assets/images/experience.jpg")] bg-no-repeat w-full bg-cover bg-center rounded-xl'
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={-1}
                        loop={true}
                        slidesPerView={slidesPerView}
                        autoplay={{ delay: 4000 }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {testim0nialData.map((val, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid md:grid-cols-12 grid-cols-1 lg:px-20 px-5 py-10 overflow-hidden">
                                    <div className="lg:col-span-4 md:col-span-5 md:px-5 px-2 py-5 flex items-center justify-center">
                                        <Image src={"/assets/images/aboutpageimg/" + val.img} alt='' height={200} width={200} />
                                    </div>
                                    <div className="lg:col-span-8 md:col-span-5 md:px-5 px-2 py-5 flex items-center justify-center">
                                        <p className='text-center'>{val.content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >
        </div >
    )
}

export default Testimonial
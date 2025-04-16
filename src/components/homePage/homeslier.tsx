import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface TypingEffectProps {
    text: string;
}

function TypingEffect({ text }: TypingEffectProps) {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let currentText = '';
        let i = 0;
        const typeInterval = 50; // Adjust typing speed (milliseconds)

        const typeNextChar = () => {
            if (i < text.length) {
                currentText += text.charAt(i);
                setTypedText(currentText);
                i++;
                setTimeout(typeNextChar, typeInterval);
            } else {
                // Reset the text and start typing again
                i = 0;
                currentText = '';
                setTimeout(typeNextChar, typeInterval);
            }
        };

        typeNextChar();

        return () => {
            setTypedText(''); // Reset typed text on component unmount
        };
    }, [text]);

    return <span className='p-10 md:max-w-5xl text-white md:text-4xl text-xl'>{typedText}</span>;
}

function HomeSlider() {
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
    const sliderdata = [
        {
            class1: "bg-[url('/assets/images/slider/slider1.jpg')] bg-no-repeat w-full bg-cover bg-center",
            class2: " md:h-screen h-96 flex items-center bg-black bg-opacity-40 pb-20",
            text: "Unveil Your Radiance: Where Elegance Meets Expertise. Discover the Art of Beauty at U Care Beauty. Transforming Beauty, Empowering Confidence.",
        },
        {
            class1: "bg-[url('/assets/images/slider/slider2.jpg')] bg-no-repeat w-full bg-cover bg-center",
            class2: "md:h-screen h-96 flex items-center bg-black bg-opacity-40 pb-20",
            text: "Unveiling Beauty: Where Artistry Meets Expertise. Transforming Your Look, One Brushstroke at a Time.",
        },
        {
            class1: "bg-[url('/assets/images/slider/slider4.jpg')] bg-no-repeat w-full bg-cover bg-top",
            class2: "md:h-screen h-96 flex items-center bg-black bg-opacity-60 pb-20",
            text: "Elevate Your Passion for Beauty: Empowering Futures through Expert Training. Unleash Your Creativity, Master Your Craft.",
        },
    ]


    return (
        <div className="overflow-hidden">
            <div className=''>
                <div data-aos="zoom-out" className='flex justify-center'>
                    <Swiper
                        className='flex justify-center items-center '
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 6000 }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {sliderdata.map((val, index) => (
                            <SwiperSlide key={index} className={val.class1}>
                                <div className={val.class2}>
                                    <TypingEffect text={val.text}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
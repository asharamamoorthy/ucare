'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'

import TestimonialImg01 from '../../../public/assets/images/ourcourse/ch-1.png'
import TestimonialImg02 from '../../../public/assets/images/ourcourse/ch-2.png'
import TestimonialImg03 from '../../../public/assets/images/ourcourse/ch-3.png'
// import TestimonialImg02 from '../../../public/assets/images/aboutpageimg/character2.png'
// import TestimonialImg03 from '../../../public/assets/images/aboutpageimg/character3.png'

interface Testimonial {
    img: StaticImageData
    quote: string
    name: string
}

export default function StudentReview() {

    const testimonialsRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<number>(0)
    const [autorotate, setAutorotate] = useState<boolean>(true)
    const autorotateTiming: number = 7000

    const testimonials: Testimonial[] = [
        {
            img: TestimonialImg01,
            quote: "Mam ur my wonderful mam in my life♥🥰U not only my mam also my second mother in world 🌎. Ur teaching is very nice mam🤗.U was my inspiration 🥰mam✨",
            name: 'Student-1',
        },
        {
            img: TestimonialImg02,
            quote: "Ucare beauty & fashion academy la na basic beautician course complete panni eruka. Na Ucare la padichatha Romba happy ya feel panran. Mam romba friendly and detail la class teach panraga neengalum class join pannigana better future erukum",
            name: 'Student-2',
        },
        {
            img: TestimonialImg03,
            quote: "Thanks for your valuable support mam. You encouraging me a lot. You was very good teacher and beautician profession. Your words are my life lesson. Once again thank you so much for your support mam.",
            name: 'Student-3',
        },
    ];


    const heightFix = () => {
        if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    useEffect(() => {
        if (!autorotate) return
        const interval = setInterval(() => {
            setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
        }, autorotateTiming)
        return () => clearInterval(interval)
    }, [active, autorotate, testimonials.length])

    return (
        <div className='overflow-hidden'>
            <div className='flex justify-center items-center py-5'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>What</span> Our Student Says
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div data-aos="slide-up" className="w-full md:max-w-3xl mx-auto flex-col justify-center text-center p-10">
                <div className="relative h-40">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[480px] h-full pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-500/25 before:via-primary-500/5 before:via-25% before:to-primary-500/0 before:to-75% before:rounded-full before:-z-10">
                        <div className="h-40 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                            {testimonials.map((testimonial, index) => (
                                <Transition
                                    key={index}
                                    show={active === index}
                                    className="absolute inset-0 h-full -z-10"
                                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                    enterFrom="opacity-0 rotate-[60deg]"
                                    enterTo="opacity-100 rotate-0"
                                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                    leaveFrom="opacity-100 rotate-0"
                                    leaveTo="opacity-0 -rotate-[60deg]"
                                >
                                    <Image
                                        className="relative top-0 left-1/2 -translate-x-1/2 rounded-full"
                                        src={testimonial.img}
                                        width={180}
                                        height={180}
                                        alt={testimonial.name}
                                    />
                                </Transition>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
                    <div className="relative flex flex-col" ref={testimonialsRef}>
                        {testimonials.map((testimonial, index) => (
                            <Transition
                                key={index}
                                show={active === index}
                                enter="transition ease-in-out duration-500 delay-200 order-first"
                                enterFrom="opacity-0 -translate-x-4"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition ease-out duration-300 delay-300 absolute"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-4"
                                beforeEnter={() => heightFix()}
                            >
                                <div className="text-lg md:text-2xl lg:text-lg md:flex md:text-center flex text-center font-serif text-slate-900 before:content-['\201C'] after:content-['\201D']">
                                    {testimonial.quote}
                                </div>
                            </Transition>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs md:text-sm shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index
                                ? 'bg-primary-500 text-white shadow-primary-950/10'
                                : 'bg-white hover:bg-primary-100 text-slate-900'
                                }`}
                            onClick={() => {
                                setActive(index);
                            }}
                        >
                            <span>{testimonial.name}</span> <span className={`${active === index ? 'text-primary-200' : 'text-slate-300'}`}></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
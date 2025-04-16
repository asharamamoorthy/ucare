import Image from 'next/image'
import React from 'react'

function Services() {
    const serviceData = [
        {
            img: "beautyclass.jpg",
            title: "Beauty Class",
            desc: "Enhance your beauty skills with our Beauty Class. Learn the latest makeup techniques, skincare routines, and beauty trends in a fun and interactive environment guided by our expert instructors.",
        },
        {
            img: "bridemakeup.jpg",
            title: "Bridal Make Up",
            desc: "Radiate elegance on your special day with our Bridal Makeup services. Our skilled makeup artists specialize in creating timeless and personalized bridal looks that complement your unique style and enhance your natural beauty.",
        },
        {
            img: "basic.jpeg",
            title: "Basic Make-Up",
            desc: "Discover the beauty of simplicity with our Basic Make-Up services. Our makeup artists create a natural and effortless look that enhances your features, leaving you looking and feeling beautiful in your everyday moments.",
        },
        {
            img: "threading.jpg",
            title: "Threading",
            desc: "Define and shape your brows with our Threading services. Our experienced estheticians use precision techniques to create clean and well-defined eyebrows, giving your face a polished and refreshed appearance.",
        },
        {
            img: "face.jpeg",
            title: "Facial",
            desc: "Revitalize your skin with our Facial treatments. Indulge in a relaxing experience that includes deep cleansing, exfoliation, and hydration, leaving your skin glowing, refreshed, and rejuvenated.",
        },
        {
            img: "bleach.jpeg",
            title: "Bleach",
            desc: "Brighten and even out your skin tone with our Bleach services. Our gentle and effective bleaching techniques help you achieve a radiant complexion, boosting your confidence and enhancing your natural beauty.",
        },
        {
            img: "manicure.jpeg",
            title: "Manicure",
            desc: "Pamper your hands with our Manicure services. Treat yourself to a luxurious experience that includes nail shaping, cuticle care, and a relaxing hand massage, leaving your hands looking and feeling beautiful.",
        },
        {
            img: "oilmassage.jpeg",
            title: "Oil Massage",
            desc: "Relax and unwind with our Oil Massage services. Our skilled therapists use nourishing oils and techniques to soothe your muscles, release tension, and provide you with a rejuvenating and calming experience.",
        },
        {
            img: "pedicuure.jpg",
            title: "Pedicure",
            desc: "Give your feet the care they deserve with our Pedicure services. Enjoy a revitalizing foot treatment that includes nail care, exfoliation, and a soothing massage, leaving your feet looking and feeling fabulous.",
        },
        {
            img: "haircolor.jpg",
            title: "Hair Colouring",
            desc: "Transform your look with our Hair Colouring services. Whether you're looking for a subtle change or a bold statement, our expert colorists will create a customized and vibrant hair color that suits your style.",
        },
        {
            img: "waxing.jpg",
            title: "Waxing",
            desc: "Achieve smooth and hair-free skin with our Waxing services. Our skilled estheticians use gentle and effective waxing techniques to remove unwanted hair, leaving your skin silky and beautiful.",
        },
        {
            img: "haircut.jpeg",
            title: "Hair Cuts",
            desc: "Refresh your hairstyle with our Hair Cut services. Our experienced stylists are dedicated to creating personalized and on-trend haircuts that enhance your features and complement your unique style.",
        },
        {
            img: "meh.jpg",
            title: "Mehandi",
            desc: "Celebrate tradition and artistry with our Mehandi services. Our talented artists create intricate and beautiful henna designs, adding a touch of elegance to your hands and feet for special occasions.",
        },
        {
            img: "saree.jpg",
            title: "Saree Draping",
            desc: "Experience the grace of a perfectly draped saree with our Saree Draping services. Our skilled professionals ensure that your saree is draped flawlessly, enhancing your overall look for any cultural or festive occasion.",
        },
        {
            img: "flowers.jpg",
            title: "Flowers",
            desc: "Adorn yourself with the beauty of flowers. Our floral arrangements and accessories add a touch of elegance and charm to your overall look, creating a fresh and delightful aesthetic for any occasion.",
        },
    ]
    return (
        <div>
            <h1 className='text-center md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 capitalize'><span className='text-black '>Our</span> Service</h1>
            <div className='flex flex-col justify-center items-center'>
                <p className='md:max-w-4xl text-lg p-3 text-center'>
                    We believe in fostering a culture of beauty that goes beyond appearances. It&apos;s about embracing your uniqueness, nurturing self-confidence, and celebrating the beauty within. Join us on this extraordinary beauty voyage, where every visit is an opportunity to rediscover and enhance your innate allure.
                </p>
            </div>
            <div className='flex justify-center items-center md:py-20 py-10'>
                <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-4 p-3'>
                    {serviceData.map((val, index) => (
                        <div key={index} data-aos="fade-in" className="card lg:col-span-4 md:col-span-6 group md:p-6 p-3">
                            <Image src={"/assets/images/ourservice/" + val.img} alt='' height={200} width={200} className='h-64 w-full rounded-xl pt-2' />
                            <h1 className='text-center text-primary-500 text-xl font-semibold py-5 group-hover:text-white transition-colors duration-200'>{val.title}</h1>
                            <p className='text-center pb-10'>
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
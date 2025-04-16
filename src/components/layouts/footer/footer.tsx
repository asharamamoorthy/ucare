import Image from 'next/image';
import React from 'react';
import logo from "../../../../public/assets/logo/logo.png"
import whatsapp from "../../../../public/assets/images/social/whatsapp.png"
import instagram from "../../../../public/assets/images/social/instagram.png"
import facebook from "../../../../public/assets/images/social/facebook.png"
import linkedin from "../../../../public/assets/images/social/linkedin.png"
import Link from 'next/link';
function Footer() {
    return (
        <div className="bg-[url('/assets/images/footerimg.jpg')] bg-no-repeat w-full bg-cover bg-center bg-fixed ">
            <div className=' flex justify-center items-center '>
                <div className='grid place-items-center grid-cols-1 lg:grid-cols-12 bg-black bg-opacity-70 text-white md:gap-20 gap-5 lg:py-28 py-10 px-4 lg:px-32 w-full'>
                    <div className='flex flex-col md:gap-4 col-span-4 lg:text-left text-center'>
                        <h1 className='text-primary-300 lg:text-left text-xl text-center lg:py-0 py-2'>Contact Info</h1>
                        <hr className='lg:w-20'></hr>
                        <div className='flex flex-col gap-3 md:pt-0 pt-2'>
                            <a href='tel:+919655042828' className='flex md:justify-start justify-center items-center gap-3 md:text-base text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className='fill-primary-500 md:h-6 h-8'>
                                    <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                                </svg>
                                +91 96550 42828
                            </a>
                            <a href='mailto:asharamamoorthy1988@gmail.com' target='_blank' className='flex justify-center items-center gap-3 md:text-base text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className='fill-primary-500 md:h-6 h-8'>
                                    <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
                                </svg>
                                UcareKrishnagiri@gmail.com
                            </a>
                        </div>
                        <div className='flex justify-center items-center gap-2 md:pt-0 pt-3'>
                            <a href='https://api.whatsapp.com/send/?phone=9655042828&text=Hi&type=phone_number&app_absent=0' target='_blank'>
                                <Image height={300} width={300} src={whatsapp} alt='' className='h-7 w-7' />
                            </a>
                            <a href='https://www.instagram.com/asha_ramamoorthy?utm_source=qr&igsh=cWh1aThxZWE3a3Fy' target='_blank'>
                                <Image height={300} width={300} src={instagram} alt='' className='h-7 w-7' />
                            </a>
                            <a href='https://www.facebook.com/asha.ramamoorthy.1' target='_blank'>
                                <Image height={300} width={300} src={facebook} alt='' className='h-7 w-7' />
                            </a>
                            <a href="https://www.linkedin.com/in/asha-ramamoorthi-7b8666265/?originalSubdomain=in" target='_blank'>
                                <Image height={300} width={300} src={linkedin} alt='' className='h-7 w-7' />
                            </a>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='flex justify-center items-center py-5'>
                            <Image src={logo} alt='' className='h-24 w-36' />
                        </div>
                        <h1 className='text-white flex  text-center'>No 12/250, Chennai Salai, Krishnagiri HO, Krishnagiri - 635001 (Near Roundana)</h1>
                    </div>
                    <div className=' flex flex-col md:gap-4 col-span-4'>
                        <h1 className='text-primary-300 lg:text-left text-xl text-center lg:py-0 py-2'>Opening Hour</h1>
                        <hr className='lg:w-20'></hr>
                        <div className='flex flex-col md:gap-0 md:pt-0 pt-2 gap-5'>
                            <div className='flex justify-between md:gap-5 gap-10'>
                                <p>Mon</p>
                                <p>9 AM - 9 PM</p>
                            </div>
                            <div className='flex justify-between md:gap-5 gap-10'>
                                <p>Tue- Sat</p>
                                <p>9 AM - 9 PM</p>
                            </div>
                            <div className='flex justify-between md:gap-5 gap-10'>
                                <p>Sun</p>
                                <p>9 AM - 9 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='text-center py-4 bg-primary-500 '>
                <p className='text-white text-lg'>&copy; {new Date().getFullYear()} UCare Beauty &amp; Fashion Academy. Designed by <span><Link target='_blank' href="https://knewtontech.com/">Knewtontech</Link></span></p>
            </div>
        </div>
    )
}


export default Footer;

import Image from 'next/image'
import React from 'react'
import contactimage from "../../../public/assets/images/contactform.jpg"
import { useState } from 'react';

const ContactForm: React.FC = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center py-10'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Way</span> To Reach Us
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 md:px-16 px-5 overflow-hidden">
                <div data-aos="fade-right" className="grid place-items-center lg:col-span-6 md:col-span-6 md:px-5 px-2">
                    <Image src={contactimage} alt='' height={300} width={200} className='w-96 ' />
                </div>
                <div data-aos="fade-left" className="lg:col-span-6 md:col-span-6 md:px-5 px-2">
                    <div>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                            <div className="mb-4">  
                                <label htmlFor="name" className="block text-primary-500 text-xl font-bold mb-2">
                                    <h1>Name :</h1>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-primary-500 text-xl font-bold mb-2">
                                <h1>Email :</h1>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-primary-500 text-xl font-bold mb-2">
                                <h1>Message :</h1>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Submit
                                    <span></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactForm
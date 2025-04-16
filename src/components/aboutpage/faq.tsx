import { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    faqs: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const faqData = [
        {
            question: "What services do you offer at UCare ?",
            answer: "We offer a comprehensive range of beauty services, including hair styling, manicures, pedicures, facials, waxing, and makeup application.",
        },
        {
            question: "Do you offer bridal or special occasion packages?",
            answer: "Yes, we have customized bridal and special occasion packages to make your big day even more beautiful. Contact us for details and to discuss your specific needs.",
        },
        {
            question: "What brands/products do you use for your treatments?",
            answer: "We exclusively use high-quality, reputable brands for all our services. Our beauticians can also provide product recommendations for your at-home beauty routine.",
        },
        {
            question: "Do you have a cancellation policy?",
            answer: "Yes, we kindly request 24 hours' notice for cancellations. This allows us to accommodate other clients. Late cancellations may be subject to a fee",
        },
        {
            question: "Are your products cruelty-free or organic?",
            answer: "We are committed to using cruelty-free products, and we offer organic options for clients seeking a more natural and sustainable beauty experience.",
        },
    ]
    return (
        <div className='pb-10'>
            <div className='flex justify-center items-center py-10'>
                <h1 className='md:text-3xl text-2xl font-semibold md:p-5 p-3 text-primary-500 w-fit'>
                    <span className='text-black '>Frequently</span> Asked Questions
                    <div className='py-2'>
                        <hr className='border border-primary-400 ' />
                    </div>
                </h1>
            </div>
            <div className="max-w-4xl mx-auto p-2">
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="flex justify-between items-center w-full p-4 bg-primary-50 cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <span className="md:text-lg text-base font-semibold">{faq.question}</span>
                            <span className='md:px-0 px-2'>
                                {activeIndex === index ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-white border">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion;

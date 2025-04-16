import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import scrolltotop from "../../public/assets/lottie/arrow.json"

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-5 right-5 p-2 bg-primary-50 hover:bg-primary-100 transition-colors duration-200 text-white rounded-full z-50 border-2 border-primary-400`}
            onClick={scrollToTop}
        >
            <div className='relative'>
                <Lottie animationData={scrolltotop} loop={true} className='md:h-10 h-5 scale-150 md:w-10 w-5' />
            </div>
        </button>
    );
};

export default BackToTopButton;

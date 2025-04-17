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
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <path
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          fill="currentColor"
        />
      </svg>

            </div>
        </button>
    );
};

export default BackToTopButton;

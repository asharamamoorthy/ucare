// NumberCounter.tsx
import React, { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
    startValue: number;
    endValue: number;
    duration: number;
    className?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ startValue, endValue, duration, className }) => {
    const [currentValue, setCurrentValue] = useState(startValue);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const startTime = Date.now();
                    const endTime = startTime + duration;

                    const updateCounter = () => {
                        const now = Date.now();
                        const progress = Math.min(1, (now - startTime) / duration);
                        const interpolatedValue = Math.floor(startValue + progress * (endValue - startValue));
                        setCurrentValue(interpolatedValue);

                        if (now < endTime) {
                            requestAnimationFrame(updateCounter);
                        }
                    };

                    requestAnimationFrame(updateCounter);
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [startValue, endValue, duration]);

    return <span ref={counterRef} className={`number loaded ${className}`}>{currentValue}</span>;
};

export default NumberCounter;

import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
}

const CustomCursor: React.FC<CustomCursorProps> = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CustomCursor;

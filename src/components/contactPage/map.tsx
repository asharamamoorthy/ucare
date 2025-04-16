import React from 'react';

const MapComponent = () => {
    return (
        <div className='flex justify-center py-10 md:px-20 p-2'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.6196448850799!2d78.22183265302561!3d12.519463952617714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac349620497401%3A0xe8416dcb593ef247!2sU%20Care%20Beauty%20%26%20Fashion%20Academy!5e1!3m2!1sen!2sin!4v1704891645627!5m2!1sen!2sin"
                className="w-full "
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapComponent;

import React from 'react';
import errorAnimation from '../../public/assets/lottie/404.json';
import { getLayout } from '@/components/layouts/layout';
import Link from 'next/link';

const ErrorPage = () => {
 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h1>
      <p className="text-gray-600 text-center mt-2">
        The page you are looking for does not exist or has been moved.
      </p>
     <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
ErrorPage.getLayout = getLayout

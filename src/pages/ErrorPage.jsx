import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
                <div className="text-red-500 text-6xl mb-4 flex justify-center">
                    <FaExclamationTriangle />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
                <p className="text-gray-600 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                    View the Doctors
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;

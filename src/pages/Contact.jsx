import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl max-w-md w-full">
                <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-yellow-400" />
                <h1 className="text-5xl font-extrabold mb-2">404</h1>
                <p className="text-2xl mb-4 font-semibold">Page Not Found</p>
                <p className="text-base text-white/80 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                    See the Doctors
                </Link>
            </div>
        </div>
    );
};

export default Contact;

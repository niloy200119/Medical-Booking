import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl">
                <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-yellow-400" />
                <h1 className="text-5xl font-bold mb-2">404</h1>
                <p className="text-xl mb-4">Page Not Found</p>
                <p className="text-base text-white/80">The page you are looking for doesn’t exist or has been moved.</p>
            </div>
        </div>
    );
};

export default Contact;

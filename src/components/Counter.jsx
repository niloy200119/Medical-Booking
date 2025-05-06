import React from 'react';
import CountUp from 'react-countup';
import { FaUserMd, FaStar, FaProcedures, FaUserNurse } from 'react-icons/fa';

const stats = [
    {
        title: 'Total Doctors',
        value: 199,
        icon: <FaUserMd className="text-4xl text-blue-600" />
    },
    {
        title: 'Total Reviews',
        value: 467,
        icon: <FaStar className="text-4xl text-yellow-500" />
    },
    {
        title: 'Total Patients',
        value: 1900,
        icon: <FaProcedures className="text-4xl text-red-500" />
    },
    {
        title: 'Total Staff',
        value: 300,
        icon: <FaUserNurse className="text-4xl text-green-500" />
    },
];

const Counter = () => {
    return (
        <div className="text-center py-10 bg-gray-50">
            <h1 className="text-3xl font-bold mb-10">We Provide Best Medical Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-3xl font-bold text-blue-700">
                            <CountUp end={item.value} duration={5} />+
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;

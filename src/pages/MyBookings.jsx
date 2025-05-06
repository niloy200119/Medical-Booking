import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoc } from '../Utility/addToDB';
import SingleDoc from './SingleDoc';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MyBookings() {
    const [serialList, setSerialList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedSerialData = getStoredDoc();
        const ConvertedStoredDoc = storedSerialData.map(id => parseInt(id));
        const mySerialList = data.filter(doctor => ConvertedStoredDoc.includes(doctor.id));
        setSerialList(mySerialList);
    }, []);

    // Function to cancel an appointment
    const cancelAppointment = (id) => {
        const updatedList = serialList.filter(doctor => doctor.id !== id);
        setSerialList(updatedList);
        
        // Update localStorage
        const storedData = getStoredDoc();
        const updatedStoredData = storedData.filter(docId => parseInt(docId) !== id);
        localStorage.setItem("appointList", JSON.stringify(updatedStoredData));
    };

    // Prepare data for the chart
    const chartData = serialList.map(doctor => ({
        name: doctor.name,
        charge: doctor.charge,
        experience: doctor.experience
    }));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">My Appointment List</h1>
            
            {/* Charges Chart */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Consultation Charges</h2>
                <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="charge" fill="#8884d8" name="Charge (৳)" />
                            <Bar dataKey="experience" fill="#82ca9d" name="Experience (years)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            {/* Appointments List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serialList.map(doctor => (
                    <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <SingleDoc singleDoctor={doctor} />
                        <div className="p-4">
                            <button 
                                onClick={() => cancelAppointment(doctor.id)}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-300"
                            >
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {serialList.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">You have no appointments booked yet.</p>
                </div>
            )}
        </div>
    );
}

export default MyBookings;
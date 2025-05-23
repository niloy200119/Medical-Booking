import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoc } from '../Utility/addToDB';
import SingleDoc from './SingleDoc';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Triangle shape generator
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function MyBookings() {
    const [serialList, setSerialList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedSerialData = getStoredDoc();
        const ConvertedStoredDoc = storedSerialData.map(id => parseInt(id));
        const mySerialList = data.filter(doctor => ConvertedStoredDoc.includes(doctor.id));
        setSerialList(mySerialList);
    }, []);

    // Cancel appointment handler
    const cancelAppointment = (id) => {
        const updatedList = serialList.filter(doctor => doctor.id !== id);
        setSerialList(updatedList);

        // Update localStorage
        const storedData = getStoredDoc();
        const updatedStoredData = storedData.filter(docId => parseInt(docId) !== id);
        localStorage.setItem("appointList", JSON.stringify(updatedStoredData));

        // Show toast
        toast.error("Appointment is Canceled", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    // Prepare data for chart
    const chartData = serialList.map(doctor => ({
        name: doctor.name,
        charge: doctor.charge,
    }));

    return (
        <div className="container mx-auto p-4">
            {/* Toast Container */}
            <ToastContainer />

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
                            <Bar
                                dataKey="charge"
                                shape={<TriangleBar />}
                                label={{ position: 'top' }}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
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

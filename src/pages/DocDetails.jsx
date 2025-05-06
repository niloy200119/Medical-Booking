import React from "react";
import { useParams, useRouteLoaderData } from "react-router";
import { Link } from "react-router";
import { addToSerialDB } from "../Utility/addToDB";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DocDetails = () => {
  const { id } = useParams();
  const docId = parseInt(id);
  const data = useRouteLoaderData("doc-details");
  const SingleDoctor = data.find((doctor) => doctor.id === docId);

  if (!SingleDoctor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="text-xl font-semibold text-red-600 mb-4">
          No Doctor found with this info
        </p>
        <Link to="/">
          <button className="btn btn-outline btn-primary">
            View All Doctors
          </button>
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    education,
    speciality,
    charge,
    registration_number,
    college_name,
    experience,
    available_week_days,
  } = SingleDoctor;

  const handleAppointed = (id) => {
    addToSerialDB(id);
    toast.success("Appointment successfully booked!", {
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

  return (
    <div className="min-h-screen p-6 bg-base-100 text-base-content">
      {/* Toast container */}
      <ToastContainer />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Doctor Profile Details</h1>
          <p className="text-lg text-gray-500">
            We try to give the best healthcare possible.
          </p>
        </div>

        <div className="card lg:card-side bg-base-200 shadow-xl">
          <figure className="lg:w-1/2 w-full p-4">
            <img
              src={image}
              alt={`${name}'s image`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body lg:w-1/2 space-y-3">
            <h2 className="card-title text-2xl">{name}</h2>
            <p>
              <span className="font-semibold">Education:</span> {education}
            </p>
            <p>
              <span className="font-semibold">Speciality:</span> {speciality}
            </p>
            <p>
              <span className="font-semibold">Experience:</span> {experience} years
            </p>
            <p>
              <span className="font-semibold">Affiliation:</span> {college_name}
            </p>
            <p>
              <span className="font-semibold">Reg No:</span> {registration_number}
            </p>
            <p>
              <span className="font-semibold">Available Days:</span> {available_week_days}
            </p>
            <p>
              <span className="font-semibold">Consultation Fee:</span> ৳{charge} + VAT
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg p-6 mt-8 max-w-4xl mx-auto">
          <div className="card-body space-y-4 text-center">
            <h2 className="card-title text-2xl justify-center">
              Book an Appointment
            </h2>
            <p className="text-gray-600">
              Check the doctor's availability and confirm your slot.
            </p>
            <button
              onClick={() => handleAppointed(id)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocDetails;

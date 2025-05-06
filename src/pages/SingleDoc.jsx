import React from "react";

const SingleDoc = ({ singleDoctor }) => {
  const { name, image, registration_number, experience, education, available } =
    singleDoctor;

  return (
    <div className="card bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-4">
        <div className="h-60 w-full overflow-hidden rounded-xl mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Experience in Years */}
        <div className="text-sm text-gray-700 mb-4 text-center font-medium mx-4 flex justify-center gap-3">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
            {available}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
            {experience}+ experience
          </span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>

        <p className="text-gray-600 text-sm mb-4">{education}</p>

        <div className="border-t border-dashed border-gray-300 my-3" />

        <p className="text-sm text-gray-500 mb-4">
          Reg. No: {registration_number}
        </p>

        <button className="btn btn-outline w-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleDoc;

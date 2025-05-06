//import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import SingleDoc from "./SingleDoc";

const Doctors = ({ data }) => {
  //const [allDoctors, setAllDoctors] = useState([]);

  // useEffect(()=>{
  //     fetch("docData.json")
  //     .then(res=>res.json())
  //     .then (data=>{
  //         setAllDoctors(data)
  //     })
  // },[])

  const [showAll, setShowAll] = useState(false);
  const doctorsToShow = showAll ? data : data.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Our Best Doctors
      </h1>

      {/* Description */}
      <p className="text-lg text-center text-gray-600 mb-14 max-w-3xl mx-auto">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      {/* Doctor Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {doctorsToShow.map((singleDoctor) => (
          <SingleDoc
            key={singleDoctor.id}
            singleDoctor={singleDoctor}
          />
        ))}
      </div>

      {/* Toggle Button */}
      {data.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn text-white rounded-full px-6 bg-[#176AE5] hover:bg-[#0F5AD1] transition-colors"
          >
            {showAll ? "Show Less" : "Show All Doctors"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;

import React from "react";
import { useParams, useRouteLoaderData } from "react-router";
import { Link } from "react-router";

const DocDetails = () => {
  const { id } = useParams();
  const docId = parseInt(id); 
  const data = useRouteLoaderData("doc-details");
  const SingleDoctor = data.find((doctor) => doctor.id === docId);

  if (!SingleDoctor) {
    return (
      <div>
        <p>No Doctor found with this info</p>
        <button className="mx-3 text-lg hover:underline hover:text-blue-600 transition-all">
          <Link to="/">View All Doctors</Link>
        </button>
      </div>
    );
  }

  const { name, image } = SingleDoctor;

  return (
    <div>
      <img src={image} alt="doctor image" />
      <h1>{name}</h1>
    </div>
  );
};

export default DocDetails;

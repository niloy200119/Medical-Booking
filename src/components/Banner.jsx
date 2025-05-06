import React from "react";
import bannerImg from "../assets/banner-img-1.png";
import bannerImg2 from "../assets/portrait-doc.png";

const Banner = () => {
  return (
    <div className="bg-white border-2 border-white rounded-3xl p-10 max-w-7xl mx-auto ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 px-8">
        Dependable Care, Backed by Trusted Professionals.
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-600 mb-8 px-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      {/* Search Bar + Button */}
      <div className="flex justify-center items-center gap-2 mb-12 px-8">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search any doctor"
            className="w-full"
          />
        </label>
        <button className="btn text-white rounded-full px-6 bg-[#176AE5] hover:bg-[#0F5AD1] transition-colors">
          Search Now
        </button>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-8">
        <img
          src={bannerImg}
          alt="Doctor"
          className="w-90 h-60 object-cover rounded-xl shadow"
        />
        <img
          src={bannerImg2}
          alt="Portrait"
          className="w-90 h-60 object-cover rounded-xl shadow"
        />
      </div>
    </div>
  );
};

export default Banner;

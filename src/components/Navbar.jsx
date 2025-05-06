import React from "react";
import icon from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="mx-3 text-lg hover:underline hover:text-blue-600 transition-all">
        Home
      </li>
      <li className="mx-3 text-lg hover:underline hover:text-blue-600 transition-all">
        My-Bookings
      </li>
      <li className="mx-3 text-lg hover:underline hover:text-blue-600 transition-all">
        Blogs
      </li>
      <li className="mx-3 text-lg hover:underline hover:text-blue-600 transition-all">
        Contact Us
      </li>
    </>
  );

  return (
    <div className="navbar my-6 mx-auto max-w-7xl">
      {/* Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo + Text */}
        <div className="flex items-center gap-2">
          <img src={icon} alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold">Phudu</span>
        </div>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{links}</ul>
      </div>

      {/* End: Emergency Button */}
      <div className="navbar-end">
        <a className="btn text-white rounded-full px-6 bg-[#176AE5] hover:bg-[#0F5AD1] transition-colors">
          Emergency
        </a>
      </div>
    </div>
  );
};

export default Navbar;

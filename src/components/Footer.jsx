import React from "react";
import icon from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 flex flex-col items-center">
      <div className="flex items-center gap-2">
                <img src={icon} alt="logo" className="w-10 h-10" />
                <span className="text-2xl font-semibold">Phudu</span>
              </div>

      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#">
          Home
        </a>
        <a className="link link-hover" href="#">
          My-Bookings
        </a>
        <a className="link link-hover" href="#">
          Blogs
        </a>
        <a className="link link-hover" href="#">
          Contact Us
        </a>
      </nav>

      <hr className="border-t border-gray-400 w-1/2 my-2" />

      <nav className="mb-4">
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 
              1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
              1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
              0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 
              2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
              2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
              1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 
              2.348-7.29 2.04 2.179 1.397 4.768 2.212 
              7.548 2.212 9.142 0 14.307-7.721 
              13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 
              0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 
              4.385 8.816 3.6.245 11.626.246 15.23 
              0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 
              12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 
              14.192 5 15.115 5H18V0h-3.808C10.596 0 9 
              1.583 9 4.615V8z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
              className="fill-current"
            >
              <path
                d="M100.28 448H7.4V148.9h92.88zm-46.44-341.2c-29.5 
              0-53.36-24.2-53.36-53.3C.48 24.1 24.34 
              0 53.84 0c29.6 0 53.4 24.2 53.4 
              53.3 0 29.1-23.8 53.5-53.4 53.5zM447.9 
              448h-92.7V302.4c0-34.7-12.5-58.4-43.6-58.4-23.8 
              0-38 16-44.3 31.4-2.3 5.5-2.9 13.2-2.9 
              20.9V448h-92.7s1.2-268.2 0-296h92.7v41.9c-.2.3-.5.7-.7 
              1h.7v-1c12.3-19 34.3-46.1 83.5-46.1 
              60.9 0 106.6 39.8 106.6 125.4V448z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

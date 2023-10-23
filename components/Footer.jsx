/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col space-y-5 py-6 items-center px-5 border-t-2">
      <div className="w-full flex flex-col space-y-7">
        <div className="flex flex-col items-center space-y-7 lg:flex-row lg:justify-between">
          <img
            src="/School-Logo-with-name.jpg"
            alt="logo"
            className="w-2/3 md:w-1/4 lg:w-1/5"
          />
          <div className="flex flex-col space-y-7">
            <a
              href="tel:+08036960509"
              className="flex items-center text-gray-500 space-x-2"
            >
              Phone: 08036960509.
            </a>
            <a
              href="mailto:admin@goshencityschools.com"
              className="flex items-center text-gray-500 space-x-2"
            >
              Email: admin@goshencityschools.com.
            </a>

            <p className="flex items-center text-gray-500 space-x-2">
              Adress: Plot 11-14 living spring avenue, Opp. Police detectives
              college, Enugu
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center p-2 space-x-16">
          <FaFacebook className="text-3xl transition text-gray-400 hover:text-blue-600" />
          <FaTwitter className="text-3xl transition text-gray-400 hover:text-blue-400" />
          <FaYoutube className="text-3xl transition text-gray-400 hover:text-red-500" />
        </div>
      </div>

      <p className="text-xs text-center">
        Copyright © All rights reserved.{" "}
        <a href="" className="text-pink-700">
          Website and Portal by AppHearts Ltd
        </a>
      </p>
    </footer>
  );
};

export default Footer;

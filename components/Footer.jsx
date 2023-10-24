/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="w-full flex flex-col p-3 bg-blue-300 items-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <p className="text-[13px] text-gray-100 font-medium md:text-base">
          Get in touch with us on our social media platforms
        </p>
        <div className="flex items-center space-x-7">
          <FaFacebook className="text-[22px] transition text-white md:text-2xl hover:text-blue-600" />
          <FaTwitter className="text-[22px] transition text-white md:text-2xl hover:text-blue-400" />
          <FaYoutube className="text-[22px] transition text-white md:text-2xl hover:text-red-500" />
          <FaInstagram className="text-[22px] transition text-white md:text-2xl hover:text-pink-500" />
        </div>
      </div>
      <section className="w-full flex flex-col items-center p-4 pt-10 space-y-10">
        <section className="w-full flex flex-col space-y-10 md:flex-row md:space-y-0 md:justify-between">
          <div className="flex flex-col space-y-3">
            <img
              src="/School-Logo-with-name.jpg"
              alt="logo"
              className="w-44 md:w-40 lg:w-60"
            />
            <p className="w-60 text-sm text-gray-600 font-medium md:text-base">
              Thank you for choosing Goshen City Schools, The best choice for
              your child. We wish to assure you that you have made the right
              choice
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-bold">Quick Link</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://Goshen-portal.vercel.app"
                className="w-fit text-sm hover:font-semibold"
              >
                Login
              </a>
              <a href="" className="w-fit text-sm hover:font-semibold">
                Standard Facilities
              </a>
              <a href="" className="w-fit text-sm hover:font-semibold">
                Blended Curriculum
              </a>
              <a href="" className="w-fit text-sm hover:font-semibold">
                How to use e-learning
              </a>
              <a href="" className="w-fit text-sm hover:font-semibold">
                Conducive Environment
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-bold">Contact Us</h3>

            <div className="flex flex-col space-y-2">
              <a
                href="tel:+2348036960509"
                className="w-fit text-sm hover:font-semibold"
              >
                08036960509
              </a>
              <a
                href="mailto:admin@goshencityschools.com"
                className="w-fit text-sm hover:font-semibold"
              >
                admin@goshencityschools.com
              </a>
              <p className="w-fit text-sm">
                Plot 11-14 living spring avenue, Enugu.
              </p>
            </div>
          </div>
        </section>
        <div className="w-5/6 p-3 border-t text-xs text-center">
          Copyright © All rights reserved.{" "}
          <a href="" className="text-pink-700">
            Website and Portal by AppHearts Ltd
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

{
  /* <div className="w-full flex flex-col space-y-7">
  
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

<p className="">
  
</p> */
}

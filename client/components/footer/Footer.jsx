// components/Footer.js
import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-blue-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="hover:text-gray-800" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</Link>
                  </li>
                  
                  <li>
                    <Link className="hover:text-gray-800" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</Link>
                  </li>
                
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                
                <ul className="list-unstyled">
                
                  <li>
                    <Link className="hover:text-gray-800" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-800" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
             
                Database <Link href="https://www.creative-tim.com?ref=njs-profile" className="hover:text-blueGray-800">Team 7</Link>.
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

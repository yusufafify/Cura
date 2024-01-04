"use client";
import React, { useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/footer/Footer";

const Contact = () => {
  const [radiologyType, setRadiologyType] = useState("");

  const handleRadiologyTypeChange = (event) => {
    setRadiologyType(event.target.value);
  };

  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center h-screen flex-wrap">
        <div className="w-full max-w-[550px] bg-white">
          <div className="card-container">
            <div className="card">
              <div className="flex items-center justify-center mb-5 w-full h-full">
                <img
                  src="https://www.shutterstock.com/image-vector/medicine-logo-600nw-715548160.jpg"  
                  alt="Logo"
                  className="w-16 h-16 mr-2"  // Adjust width and height here
                />
                <h2 className="text-xl font-semibold text-[blue]">Contact Us</h2>  {/* Adjust font size here */}
              </div>

              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-8"> 
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"  
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>

                <div>
                  <button className="hover:shadow-form w-full rounded-md bg-[blue] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 ml-8 flex-wrap">
          <img
            src="../assets/images/twodoc.png"
            alt="Booking Image"
            className="w-full h-auto max-h-[550px] rounded-md"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

"use client";
import React, { useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/footer/Footer";

const Booking = () => {
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
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full sm:w-1/2 px-3">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-3">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                  Radiology type
                </label>
                <div className="flex flex-wrap mb-5">
                  <div className="w-full sm:w-1/2 px-3">
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="mri"
                        name="radiologyType"
                        value="MRI"
                        onChange={handleRadiologyTypeChange}
                        className="mr-2"
                      />
                      <label htmlFor="mri" className="text-base font-medium">
                        MRI
                      </label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="x-ray"
                        name="radiologyType"
                        value="X-ray"
                        onChange={handleRadiologyTypeChange}
                        className="mr-2"
                      />
                      <label htmlFor="x-ray" className="text-base font-medium">
                        X-ray
                      </label>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-3">
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="ct-scan"
                        name="radiologyType"
                        value="CT Scan"
                        onChange={handleRadiologyTypeChange}
                        className="mr-2"
                      />
                      <label
                        htmlFor="ct-scan"
                        className="text-base font-medium"
                      >
                        CT Scan
                      </label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="ultrasound"
                        name="radiologyType"
                        value="Ultrasound"
                        onChange={handleRadiologyTypeChange}
                        className="mr-2"
                      />
                      <label
                        htmlFor="ultrasound"
                        className="text-base font-medium"
                      >
                        Ultrasound
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-full rounded-md bg-[blue] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 ml-8 flex-wrap">
        <img
          src="../assets/images/radiologist.png"
          alt="Booking Image"
          className="w-full h-auto max-h-[550px] rounded-md"
        />
        
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Booking;

// components/Testimonials.js
"use client"

import React from 'react';


const Testimonials = () => {
    const cardStyles = {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 255, 19), 0 2px 4px -1px rgba(0, 0, 255, 0.06)',
        transition: 'transform 0.3s ease',
      };
        const blueGradientText = {
    background: '-webkit-linear-gradient(left, #00f, #0af)',
    WebkitBackgroundClip: 'text',
    color: 'blue',
  };
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b  px-5 py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-blue-800">What our patients <br />are saying.</h1>
            <h3 className="text-xl mb-5 font-light">Where Your Wellness Speaks Louder Than Words.</h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            {/* Testimonial Card */}
         
            <div className="px-3 md:w-1/3 transition-transform transform hover:scale-105">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"style={cardStyles}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="../assets/images/woman.png" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Kenzy Amr</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    I recently had an X-ray done at Cura Hospital's Radiology Department, and I was incredibly impressed with the efficiency and professionalism of the staff. The radiologists were thorough in explaining the procedure, and the results were delivered promptly. 
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card */}
            <div className="px-3 md:w-1/3 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6" style={cardStyles}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="../assets/images/man.png" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Samir Ayman</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Cura Hospital's Emergency Department was outstanding. Prompt response to my urgent situation, exceptional care, and genuine compassion. Grateful for quick and effective care! Thank you for being the best choice for any pateint.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card*/}
      
            <div className="px-3 md:w-1/3 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6" style={cardStyles}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="../assets/images/woman.png"alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Noor Hesham</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Appreciate Cura Hospital's commitment to advanced technology. State-of-the-art equipment in Radiology for accurate diagnostics, and the Emergency Department's cutting-edge technology ensures swift and effective treatment Keep being the best. ''
                    </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card */}
           
            <div className="px-3 md:w-1/3 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6" style={cardStyles}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="../assets/images/man.png" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Ahmed Nabil</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Cura Hospital sets a high standard for patient care. Welcoming staff, clean and comfortable environment. Both departments work seamlessly, reflecting a dedicated and caring healthcare team, giving the best experience any patient can have.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card */}
          
            <div className="px-3 md:w-1/3 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"style={cardStyles}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="../assets/images/woman.png"alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Malak Ibrahim</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Standout experience at Cura Hospital: clear and transparent communication from the medical staff. Doctors and nurses took time to explain each step, ensuring I felt informed and comfortable. Kudos for a patient-centered approach!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card */}
          </div>
        </div>
      </div>
      
      </div>
 
  );
};

export default Testimonials;

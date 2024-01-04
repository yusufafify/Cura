// components/Testimonials.js
"use client"
import React from 'react';

const Departments = () => {
  const cardStyles = {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 255, 0.5), 0 2px 4px -1px rgba(0, 0, 255, 0.3)',
    transition: 'transform 0.3s ease',
  };

  const blueGradientText = {
    background: '-webkit-linear-gradient(left, #00f, #0af)',
    WebkitBackgroundClip: 'text',
    color: 'blue',
  };

  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b  px-5 py-16 md:py-24 ">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-blue-800">Our Departments</h1>
            <h3 className="text-xl mb-5 font-light">"Radiant Care in Radiology, Swift Healing in Emergencies."</h3>
            <div className="text-center mb-10">
       
            </div>
          </div>
          <div className="-mx-3 md:flex items-start justify-center">
            {/* Testimonial Card */}
            <div className="px-3 md:w-1/3 mb-6 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light" style={cardStyles}>
                <div className="w-full mb-6 overflow-hidden"> {/* Adjust the height as needed */}
                  <img src="../assets/images/radiologydep.png" alt="" className="object-cover w-full h-full" />
                </div>
                
                <div className="w-full">

                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mb-5">"</span>
                    
                    Radiology Department at Cura Hospital is at the forefront of cutting-edge medical imaging services. Our dedicated team of highly skilled radiologists and technologists utilize state-of-the-art equipment to provide accurate and timely diagnostic imaging. From X-rays to advanced MRI and CT scans, we prioritize patient comfort and safety while delivering precise results. With a commitment to excellence, our Radiology Department plays a pivotal role in aiding physicians in the diagnosis and treatment planning, ensuring the highest quality of care for our patients.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Card */}
            <div className="px-3 md:w-1/3 mb-6 transition-transform transform hover:scale-105">
              <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light" style={cardStyles}>
                <div className="w-full mb-6 overflow-hidden"> {/* Adjust the height as needed */}
                  <img src="../assets/images/emergdep.png" alt="" className="object-cover w-full h-full" />
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mb-7">"</span>
                    The Emergency Department at Cura Hospital is a beacon of urgent medical care, operating 24/7 to provide swift and comprehensive services to those in need. Our team of experienced emergency physicians, nurses, and support staff are trained to handle a wide range of medical emergencies with compassion and efficiency. Equipped with advanced medical technology and a commitment to rapid response, the Emergency Department at Cura ensures that patients receive timely and expert care during critical situations.Our Emergency Department stands ready.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;

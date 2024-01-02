import React from 'react'

function HospitalInfo() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
    <div className="w-full lg:w-6/12">
      <h2
        className="w-full font-bold lg:text-4xl text-3xl lg:leading-10"
        style={{
          backgroundImage: "linear-gradient(to right, #007BFF, #00008B)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Welcome to Cura Hospital
      </h2>
      <p className="font-normal text-base leading-6 text-gray-600  mt-6">
        At Cura, we are committed to providing exceptional healthcare
        services with a focus on compassion, expertise, and innovation. As a
        leading healthcare institution, our mission is to enhance the
        well-being of our community by delivering high-quality medical care
        in a patient-centered environment.
      </p>
    </div>
    <div className="w-full lg:w-6/12">
      <img
        className="lg:block hidden w-full"
        src="/assets/images/TEAM.png"
        alt="people discussing on board"
      />
      <img
        className="lg:hidden sm:block hidden w-full"
        src="/assets/images/TEAM.png"
        alt="people discussing on board"
      />
      <img
        className="sm:hidden block w-full"
        src="/assets/images/TEAM.png"
        alt="people discussing on board"
      />
    </div>
  </div>
  )
}

export default HospitalInfo
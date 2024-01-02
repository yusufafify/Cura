import React from 'react'
import "@fortawesome/fontawesome-free/css/all.css";
import HospitalInfo from './sections/HospitalInfo';
import HospitalTimeline from './sections/HospitalTimeline';

function AboutUs() {
  return (
    <div       className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
    style={{
      backgroundImage: 'url("/assests/images/cool-background.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
    <HospitalInfo/>
    <HospitalTimeline/>
    </div>
  )
}

export default AboutUs
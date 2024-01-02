import React from "react";
import AboutUs from "@/components/about/AboutUs";
import Nav from "@/components/Nav/Nav";
import Booking from "@/components/booking/Booking";
import Contact from "@/components/contact/Contact";
const Home = () => {
  return (
    <div>
      <Nav />
      <AboutUs />
      <Contact />
      <Booking/>
    </div>
  );
};

export default Home;

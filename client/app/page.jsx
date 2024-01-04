import React from "react";
import AboutUs from "@/components/about/AboutUs";
import Nav from "@/components/Nav/Nav";
import Question from "@/components/questions/Question";
import Stats from "@/components/stats/Stats";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";
import Departments from "@/components/departments/Departments";
const Home = () => {
  return (
    <div>
      <Nav />
      <AboutUs />
      <Departments/>
      <Stats/>
      <Testimonials/>
      <Question />
      <Footer/>
      
  
    </div>
  );
};

export default Home;

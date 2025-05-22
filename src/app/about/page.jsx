import React from "react";
import Hero from "@/Components/about/Hero";
import Experience from "@/Components/about/Experience";
import QualityDesign from "@/Components/about/QualityDesign";
// import OurTeam from "@/Components/about/OurTeam";
import Testimonials from "@/Components/Testimonials";

const About = () => {
  return (
    <>
      <Hero />
      <Experience />
      <QualityDesign />
      {/* <OurTeam /> */}
      <Testimonials />
    </>
  );
};

export default About;

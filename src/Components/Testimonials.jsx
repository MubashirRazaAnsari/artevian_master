"use client";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <div
      className="w-full sm:py-12 py-4 sm:px-4  flex justify-center items-center"
      data-aos-delay="100"
      data-aos="fade-up"
    >
      <div className="container lg:w-[90%] w-full">
        <h1
          className="text-gray-900 font-bold text-center 
                 text-xl sm:text-2xl md:text-3xl lg:text-6xl 
                 leading-snug md:leading-normal"
        >
          Our Services Are <span className="text-primary">Cherished</span> By
          All!
        </h1>
        <p className="text-center lg:text-lg text-sm my-4">
          We have served hundreds of brands, and look at what they have to say
          for us.
        </p>

        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonials;

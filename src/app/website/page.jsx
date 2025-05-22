import BusinessCounter from "@/Components/BusinessCounter";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import React from "react";

const Website = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Website Design"
        text_one="To Get the Best"
        text_two=" in market compitative prices"
        text_colored="Website"
      />
      <Hero hero_title="Website Designing" />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="E-Commerce Startup"
        selectedPortfolio="Website Design"
      />
      <Pricing initialActiveTab="Website Design" />
      <Testimonials />
    </main>
  );
};

export default Website;

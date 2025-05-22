import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="E-Commerce"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="E-Commerce"
      />
      <Hero hero_title="E-Commerce" />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="E-Commerce Startup"
        selectedPortfolio="E-Commerce"
      />
      <Pricing initialActiveTab="E-Commerce" />
      <Testimonials />
    </main>
  );
};

export default page;

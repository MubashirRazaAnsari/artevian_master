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
        page_title="SMM Services"
        text_one="To Get the Best"
        text_two="rates in market"
        text_colored="Social Media Marketing"
      />
      <Hero hero_title="SMM" />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="SMM"
        selectedPortfolio="SMM"
      />
      <Pricing initialActiveTab="SMM" />
      <Testimonials />
    </main>
  );
};

export default page;

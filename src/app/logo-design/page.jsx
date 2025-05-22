import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components//Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";

const LogoDesign = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Logo"
        text_one="Discover the"
        text_two="behind every logo we craft"
        text_colored="artistry"
      />
      <Hero hero_title="Logo" />
      <BusinessCounter />
      <Portfolio
        text_colored="Type of Logo"
        text_one="Choose the right"
        text_two="That Shows Your Business"
        selectedPortfolio="Logo"
      />
      <Pricing initialActiveTab="Logo" />
      <Testimonials />
    </main>
  );
};

export default LogoDesign;

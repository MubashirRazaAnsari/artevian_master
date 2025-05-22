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
        page_title="SEO Services"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="SEO"
      />
      <Hero hero_title="SEO" />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="SEO"
        selectedPortfolio="SEO"
      />
      <Pricing initialActiveTab="SEO" />
      <Testimonials />
    </main>
  );
};

export default page;

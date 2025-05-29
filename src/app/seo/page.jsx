import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import SEOpg from "@/assets/seopg.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="SEO Services"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="SEO"
      />
      <Hero
        hero_title="SEO"
        paragraph1={
          "Be found by the right people at the right time. Our SEO experts craft smart, data-driven strategies to improve your site’s visibility on Google and other search engines. "
        }
        paragraph2={
          " From keyword research and on-page optimization to backlinks and local SEO, Artevian helps you climb the ranks—and stay there."
        }
        img={SEOpg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="SEO"
        selectedPortfolio="SEO"
        portfolio_title={
          "Boost Visibility and Rankings with Strategic Search Optimization"
        }
      />
      <Pricing initialActiveTab="SEO" />
      <Testimonials />
    </main>
  );
};

export default page;

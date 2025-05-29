import BusinessCounter from "@/Components/BusinessCounter";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import React from "react";
import Websitepg from "@/assets/websitepg.jpg";
const Website = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Website Design"
        text_one="To Get the Best"
        text_two=" in market compitative prices"
        text_colored="Website"
      />
      <Hero
        hero_title="Website Designing"
        paragraph1={
          "At Artevian, we create visually striking and strategically functional websites that are optimized for performance across all devices. From sleek corporate sites to creative portfolios and eCommerce platforms"
        }
        paragraph2={
          " we build user-friendly experiences that represent your brand and drive results. Let’s turn your vision into a fully responsive, custom-designed digital presence."
        }
        img={Websitepg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="E-Commerce Startup"
        selectedPortfolio="Website Design"
        portfolio_title={
          "Build a Bold Digital Presence with Stunning Video & Design"
        }
      />
      <Pricing initialActiveTab="Website Design" />
      <Testimonials />
    </main>
  );
};

export default Website;

import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import hero from "@/assets/ecommercepg.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="E-Commerce"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="E-Commerce"
      />
      <Hero
        hero_title="E-Commerce"
        paragraph1={
          "Think of Artevian as your e-commerce branding partner, ready to kickstart your brand journey with impactful logo design and fully integrated branding solutions tailored for online success."
        }
        paragraph2={
          "We specialize in crafting logos and developing e-commerce brand identities that resonate with your ideal audience. Our diverse logo design portfolio features everything from mascot logos and abstract symbols to emblem designs, wordmarks, and monograms—ensuring your brand stands out in a competitive digital marketplace. Whether you're launching a new online store or refreshing your brand visuals, Artevian delivers designs that convert and connect."
        }
        img={hero}
      />
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

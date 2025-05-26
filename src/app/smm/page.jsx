import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import Smmpg from "@/assets/Smmpg.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="SMM Services"
        text_one="To Get the Best"
        text_two="rates in market"
        text_colored="Social Media Marketing"
      />
      <Hero
        hero_title="SMM"
        paragraph1={
          "We turn your social media into a brand-building engine. Whether you're looking to boost engagement, increase followers, or generate leads, Artevian builds customized strategies that align with your voice and target audience."
        }
        paragraph2={
          "From daily content creation to paid social ads, we’ve got it covered."
        }
        img={Smmpg}
      />
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

import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import MobileImage from "@/assets/Mobile-App-Service-page.png";
const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Mobile Apps"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="Mobile Apps"
      />
      <Hero
        hero_title="Mobile Apps"
        paragraph1="Think of Artevian as your trusted mobile app branding partner, guiding you through a seamless journey of creating a powerful visual identity for your app—from app logo design to complete brand development."
        paragraph2=" We specialize in designing logos and crafting custom mobile app brand assets that align perfectly with your target users. Our robust design portfolio includes everything from app mascots and iconic symbols to app emblems, minimalist monograms, and branded UI elements—ensuring your mobile app not only stands out in the App Store or Google Play, but also creates a lasting impression. Whether you're launching a startup or scaling an existing app, we build designs that captivate, engage, and drive downloads."
        img={MobileImage}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="Mobile App"
        selectedPortfolio="Mobile Apps"
      />
      <Pricing initialActiveTab="Mobile Apps" />
      <Testimonials />
    </main>
  );
};

export default page;

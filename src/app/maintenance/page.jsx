import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import Websitepg from "@/assets/websitemaintainpg.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Web Maintenace Services"
        text_one="To Get the Best"
        text_two="rates in market compitative prices"
        text_colored="Website Maintenance"
      />
      <Hero
        hero_title="Website Maintenance"
        paragraph1={
          "A great website doesn’t stop at launch—it evolves. Artevian offers reliable website maintenance to ensure your site stays secure, fast, and up to date."
        }
        paragraph2={
          "We handle backups, updates, bug fixes, content changes, and more—so you can focus on your business."
        }
        img={Websitepg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Thinking about"
        text_two=", Hire us to get you dream fulfilled"
        text_colored="Website Maintenance"
        selectedPortfolio="Website Maintenance"
      />
      <Pricing initialActiveTab="Website Maintenance" />
      <Testimonials />
    </main>
  );
};

export default page;

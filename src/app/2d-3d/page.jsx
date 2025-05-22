import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components//Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import CollectionData from "@/Components/CollectionData";
import art5 from "@/assets/2D-Static/art5.jpg";
import art6 from "@/assets/2D-Static/art6.jpg";
import art7 from "@/assets/2D-Static/art7.jpg";
import art8 from "@/assets/2D-Static/art8.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="2D/3D Animation"
        text_one="Discover the"
        text_two="behind every art we craft"
        text_colored="Magic"
      />
      <Hero hero_title="2D/3D Animation" />
      <BusinessCounter />
      <Portfolio
        text_colored="Type of Animation"
        text_one="Choose the right"
        text_two="That Shows Your Business"
        selectedPortfolio="2D/3D Animation"
      />
      <CollectionData
        image_one={art5}
        image_two={art6}
        image_three={art7}
        image_four={art8}
      />
      <Pricing initialActiveTab="2D/3D Animation" />
      <Testimonials />
    </main>
  );
};

export default page;

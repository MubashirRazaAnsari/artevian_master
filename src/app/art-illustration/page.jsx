import BusinessCounter from "@/Components/BusinessCounter";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import React from "react";
import art1 from "@/assets/2D-Static/art1.jpg";
import art2 from "@/assets/2D-Static/art2.jpg";
import art3 from "@/assets/2D-Static/art3.jpg";
import art4 from "@/assets/2D-Static/art4.png";
import CollectionData from "@/Components/CollectionData.jsx";

const ArtIllustration = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Art & Illustration"
        text_one="Unleash the"
        text_two="behind every brand we build"
        text_colored="power"
      />
      <Hero hero_title="Hand-Crafted" />
      <BusinessCounter />
      <Portfolio
        text_one="Choose The Right Type Of Video That"
        text_two="."
        text_colored="Fits Your Brand"
        selectedPortfolio="Art & Illustration"
      />
      <CollectionData
        image_one={art1}
        image_two={art2}
        image_three={art3}
        image_four={art4}
      />
      <Pricing initialActiveTab="Art & Illustration" />
      <Testimonials />
    </main>
  );
};

export default ArtIllustration;

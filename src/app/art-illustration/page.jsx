import BusinessCounter from "@/Components/BusinessCounter";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import React from "react";
import art8 from "@/assets/2D-Static/art8.webp";
import art2 from "@/assets/2D-Static/art2.webp";
import art11 from "@/assets/2D-Static/art11.webp";
import art15 from "@/assets/2D-Static/art15.webp";
import CollectionData from "@/Components/CollectionData.jsx";
import Artpg from "@/assets/Artpg.jpg";

const ArtIllustration = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Art & Illustration"
        text_one="Unleash the"
        text_two="behind every brand we build"
        text_colored="power"
      />
      <Hero
        hero_title="Hand-Crafted"
        paragraph1={
          "Custom art and illustration services tailored to your project’s needs—whether for branding, books, campaigns, or digital content. "
        }
        paragraph2={
          "Our illustrators deliver unique, hand-crafted visuals that amplify your creative message and make your brand memorable."
        }
        img={Artpg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Choose The Right Type Of Video That"
        text_two="."
        text_colored="Fits Your Brand"
        selectedPortfolio="Art & Illustration"
        portfolio_title={
          "Custom Artworks That Add Personality and Visual Impact"
        }
      />
      <CollectionData
        image_one={art8}
        image_two={art2}
        image_three={art11}
        image_four={art15}
      />
      <Pricing initialActiveTab="Art & Illustration" />
      <Testimonials />
    </main>
  );
};

export default ArtIllustration;

import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import CollectionData from "@/Components/CollectionData.jsx";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import mediaTune from "@/assets/media-tune.png";
import kaantech from "@/assets/KaanTech1.jpg";
import nick_122 from "@/assets/nick_122.png";
import papajohns from "@/assets/papachjone.webp";
import Brandingpg from "@/assets/Brandingpg.jpg";

const Branding = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Branding"
        text_one="Unleash the "
        text_two="behind every brand we build"
        text_colored="power "
      />
      <Hero
        hero_title="Branding"
        paragraph1={
          "Your brand is more than a logo—it’s your story, your voice, your identity. At Artevian, we build brands from the ground up or give existing ones a modern refresh"
        }
        paragraph2={
          " From brand strategy and naming to logo design and visual systems, we ensure your brand speaks with clarity, consistency, and confidence."
        }
        img={Brandingpg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Choose The Right "
        text_two="That Shows Your Business"
        text_colored="Type of Branding"
        selectedPortfolio="Branding"
        portfolio_title={
          "Shaping Strong Brand Identities That Resonate and Last"
        }
      />

      <CollectionData
        image_one={mediaTune}
        image_two={nick_122}
        image_three={kaantech}
        image_four={papajohns}
      />
      <Pricing initialActiveTab="Branding" />
      <Testimonials />
    </main>
  );
};

export default Branding;

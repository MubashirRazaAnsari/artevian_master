import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components//Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import CollectionData from "@/Components/CollectionData";
import art5 from "@/assets/2D-Static/art5.jpg";
import art18 from "@/assets/2D-Static/art18.jpg";
import art7 from "@/assets/2D-Static/art7.jpg";
import art8 from "@/assets/2D-Static/art8.jpg";
import Twodpg from "@/assets/2dpg.jpg";
const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="2D/3D Animation"
        text_one="Discover the"
        text_two="behind every art we craft"
        text_colored="Magic"
      />
      <Hero
        hero_title="2D/3D Animation"
        paragraph1={
          "Bring your ideas to life with our immersive animation services. From explainer videos to product visualizations and character animations, Artevian crafts engaging 2D and 3D content that informs, entertains, and inspires."
        }
        paragraph2={""}
        img={Twodpg}
      />
      <BusinessCounter />
      <Portfolio
        text_colored="Type of Animation"
        text_one="Choose the right"
        text_two="That Shows Your Business"
        selectedPortfolio="2D/3D Animation"
      />
      <CollectionData
        image_one={art5}
        image_two={art18}
        image_three={art7}
        image_four={art8}
      />
      <Pricing initialActiveTab="2D/3D Animation" />
      <Testimonials />
    </main>
  );
};

export default page;

import BusinessCounter from "@/Components/BusinessCounter";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import Banner from "@/Components/Banner";
import Hero from "@/Components/video/Hero";
import Portfolio from "@/Components/video/Portfolio";
import React from "react";

const VideoAnimation = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="2D/3D Animation"
        text_colored="Brands Story"
        text_one="Custom Animated Videos That Speaks Your"
      />
      <Hero />
      <BusinessCounter />
      <Portfolio />
      <Pricing initialActiveTab="Video Editing" />
      <Testimonials />
    </main>
  );
};

export default VideoAnimation;

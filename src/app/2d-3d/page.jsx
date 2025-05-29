"use client";
import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components//Banner";
import Hero from "@/Components/video/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import CollectionDataVideo from "@/Components/CollectionDataVideo";
import { motion } from "framer-motion";

const AnimationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="relative md:min-h-full">
        <div className="absolute top-[-28px] left-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/2d-3d-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-white/60 top-[-40px]" />
        <div className="relative z-10 text-white flex flex-col justify-center h-full">
          <Banner
            page_title="2D/3D Animation"
            text_one="Discover the"
            text_two="behind every art we craft"
            text_colored="Magic"
          />
          <Hero
            hero_title=" Animation"
            hero_title_colored="2D/3D"
            paragraph1={
              "Bring your ideas to life with our immersive animation services. From explainer videos to product visualizations and character animations, Artevian crafts engaging 2D and 3D content that informs, entertains, and inspires."
            }
            paragraph2={""}
            videoID={"EmNM2PbGXgc"}
          />
        </div>
      </div>
      <div className="relative top-[-30px]">
        <BusinessCounter />
      </div>
      <Portfolio
        text_colored="Type of Animation"
        text_one="Choose the right"
        text_two="That Shows Your Business"
        selectedPortfolio="2D/3D Animation"
        portfolio_title={"Bring Ideas to Life with Engaging 2D & 3D Animation"}
      />
      <CollectionDataVideo category="2d-3d" />
      <Pricing initialActiveTab="2D/3D Animation" />
      <Testimonials />
    </motion.div>
  );
};

export default AnimationPage;

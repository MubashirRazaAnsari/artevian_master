"use client";
import React from "react";
import dynamic from "next/dynamic";
import mediaTune from "@/assets/media-tune.png";
import kaantech from "@/assets/Charli.png";
import nick_122 from "@/assets/Torado.png";
import papajohns from "@/assets/Fr0sty1.jpg";
import Brandingpg from "@/assets/Brandingpg.jpg";

// Dynamically import components
const BusinessCounter = dynamic(() => import("@/Components/BusinessCounter"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Banner = dynamic(() => import("@/Components/Banner"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Hero = dynamic(() => import("@/Components/Hero"), {
  loading: () => (
    <div className="h-25 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Portfolio = dynamic(() => import("@/Components/Portfolio"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Pricing = dynamic(() => import("@/Components/ourPackages/Pricing"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const CollectionData = dynamic(() => import("@/Components/CollectionData"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Testimonials = dynamic(() => import("@/Components/Testimonials"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Branding = () => {
  return (
    <main className="overflow-hidden">
      <Banner
        page_title="Branding"
        text_one="Unleash the "
        text_two="behind every brand we build"
        text_colored="power "
      />
      <Hero
        hero_title="Branding"
        paragraph1={
          "Your brand is more than a logo—it's your story, your voice, your identity. At Artevian, we build brands from the ground up or give existing ones a modern refresh"
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
      {/* <CollectionData
        image_one={mediaTune}
        image_two={nick_122}
        image_three={kaantech}
        image_four={papajohns}
      /> */}
      <Pricing initialActiveTab="Branding" />
      <Testimonials />
    </main>
  );
};

export default Branding;

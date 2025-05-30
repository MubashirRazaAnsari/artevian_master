"use client";
import React from "react";
import dynamic from "next/dynamic";
import seo from "@/assets/SEO/seo1.png";
import seo1 from "@/assets/SEO/seo2.png";
import seo2 from "@/assets/SEO/seo3.webp";
import seo3 from "@/assets/SEO/seo4.webp";

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
    <div className="h-32 flex items-center justify-center">
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

const SEO = () => {
  return (
    <main className="overflow-hidden">
      <Banner
        page_title="SEO"
        text_one="Unleash the "
        text_two="behind every brand we build"
        text_colored="power "
      />
      <Hero
        hero_title="SEO"
        paragraph1={
          "Your brand is more than a logo—it's your story, your voice, your identity. At Artevian, we build brands from the ground up or give existing ones a modern refresh"
        }
        paragraph2={
          " From brand strategy and naming to logo design and visual systems, we ensure your brand speaks with clarity, consistency, and confidence."
        }
        img={seo}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Choose The Right "
        text_two="That Shows Your Business"
        text_colored="Type of Branding"
        selectedPortfolio="SEO"
        portfolio_title={
          "Shaping Strong Brand Identities That Resonate and Last"
        }
      />
      <CollectionData
        image_one={seo1}
        image_two={seo2}
        image_three={seo3}
        image_four={seo}
      />
      <Pricing initialActiveTab="SEO" />
      <Testimonials />
    </main>
  );
};

export default SEO;

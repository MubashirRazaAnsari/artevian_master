"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import heavy components
const BusinessCounter = dynamic(() => import("@/Components/BusinessCounter"), {
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

const Testimonials = dynamic(() => import("@/Components/Testimonials"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Banner = dynamic(() => import("@/Components/video/Banner"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const Hero = dynamic(() => import("@/Components/video/Hero"), {
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

const CollectionDataVideo = dynamic(
  () => import("@/Components/CollectionDataVideo"),
  {
    loading: () => (
      <div className="h-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
  }
);

const VideoAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="relative">
        <div className="absolute top-[-32px] left-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/bgHero1.webp"
          >
            <source
              src="/assets/videos/video-editing-bg.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <div className="absolute inset-0 bg-white/50 top-[-40px]" /> */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full">
          <Banner
            page_title="Video Editing"
            text_colored="Brands Story"
            text_one="Custom Animated Videos That Speaks Your"
            cn="text-white"
          />

          <Hero
            hero_title="Custom Crafted for Your Vision"
            hero_title_colored="Video Editings"
            paragraph1={
              "At Artevian, we don't just edit videos—we sculpt compelling visual stories tailored to your brand's identity. Whether you're launching a product, explaining a service, or promoting on social media, our editors fuse creativity with precision to make every second count."
            }
            paragraph2={
              "Expect polished transitions, dynamic effects, and on-brand visuals—all designed to captivate."
            }
            videoID="a2_TLJFUEnc"
            cn="text-white"
          />
        </div>
      </div>

      <div className="relative top-[-32px]">
        <BusinessCounter />
      </div>
      <Portfolio
        text_one="Ready to Make Your"
        text_two="Unforgettable?"
        text_colored="Videos"
        parag="We Turn Raw Footage Into Remarkable Stories
              Don't just post content—post with purpose. At Artevian, we transform ordinary clips into visually striking, emotionally engaging videos that grab attention and drive results.
              Whether it's for YouTube, social media, ads, or branding—our expert editing brings clarity, style, and cinematic flair to every second.
"
        selectedPortfolio="Video Editing"
        portfolio_title={
          "Build a Bold Digital Presence with Stunning Video & Design"
        }
      />
      <CollectionDataVideo category={"video-editing"} />
      <Pricing initialActiveTab="Video Editing" />
      <Testimonials />
    </motion.div>
  );
};

export default VideoAnimation;

import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components//Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import img from "@/assets/logodesignpg.webp";

const LogoDesign = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Logo Design"
        text_one="Discover the"
        text_two="behind every logo we craft"
        text_colored="artistry"
      />
      <Hero
        hero_title="Logo Design"
        paragraph1={
          "Consider Artevian your dedicated logo design and branding partner, ready to embark with you on a transformative brand identity journey. From concept to creation, we offer comprehensive logo design services that serve as the cornerstone of your brand’s visual presence."
        }
        paragraph2={
          "Our expert designers craft custom logos that resonate with your target audience and reflect your brand’s personality and values. Whether you’re looking for bold mascot logos, modern abstract marks, classic emblems, clean wordmarks, or stylish monograms, our diverse portfolio ensures your brand stands out in any industry. At Artevian, we don’t just design logos—we build memorable, scalable, and impactful brand visuals that help businesses leave a lasting impression."
        }
        img={img}
      />
      <BusinessCounter />
      <Portfolio
        text_colored="Type of Logo"
        text_one="Choose the right"
        text_two="That Shows Your Business"
        selectedPortfolio="Logo"
        portfolio_title={
          "Designing Timeless Logos That Speak Your Brand’s Identity"
        }
      />
      <Pricing initialActiveTab="Logo" />
      <Testimonials />
    </main>
  );
};

export default LogoDesign;

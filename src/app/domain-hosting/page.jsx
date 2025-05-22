import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import chart1 from "@/assets/chart1.webp";
import chart2 from "@/assets/chart2.webp";
import chart3 from "@/assets/chart3.webp";
import chart4 from "@/assets/chart4.webp";
import CollectionData from "@/Components/CollectionData.jsx";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Domain & Hosting"
        text_one="We provide the services of"
        text_two="in market compatative prices"
        text_colored="Domain & Hosting"
      />
      <Hero hero_title="Domain & Hosting" />
      <BusinessCounter />
      <Portfolio
        text_one="Choose Our Service of "
        text_two="to get the Best results"
        text_colored="Domain & Hosting"
        selectedPortfolio="Domain & Hosting"
      />
      <CollectionData
        image_one={chart1}
        image_two={chart2}
        image_three={chart3}
        image_four={chart4}
      />
      <Pricing initialActiveTab="Domain & Hosting" />
      <Testimonials />
    </main>
  );
};

export default page;

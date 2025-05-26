import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";
import CollectionData from "@/Components/CollectionData.jsx";
import chart1 from "@/assets/chart1.webp";
import chart2 from "@/assets/chart2.webp";
import chart3 from "@/assets/chart3.webp";
import chart4 from "@/assets/chart4.webp";
import Digitalpg from "@/assets/digitalpg.jpg";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Banner
        page_title="Digital Marketing"
        text_one="Unleash the power of "
        text_two="with US"
        text_colored="Digital Marketing "
      />
      <Hero
        hero_title="Digital Marketing"
        paragraph1={
          "Grow faster with Artevian’s full-service digital marketing. From strategy to execution, we help brands succeed online through targeted ad campaigns, content creation, email marketing, SEO, and conversion optimization."
        }
        paragraph2={
          " Every move we make is aimed at one goal—driving measurable results."
        }
        img={Digitalpg}
      />
      <BusinessCounter />
      <Portfolio
        text_one="Choose Our Service of "
        text_two="to get the Best results"
        text_colored="Digital Marketing"
        selectedPortfolio="Digital Marketing"
      />
      <CollectionData
        image_one={chart1}
        image_two={chart2}
        image_three={chart3}
        image_four={chart4}
      />
      <Pricing initialActiveTab="Digital Marketing" />
      <Testimonials />
    </main>
  );
};

export default page;

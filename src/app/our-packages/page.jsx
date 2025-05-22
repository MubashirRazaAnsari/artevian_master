import BusinessCounter from "@/Components/BusinessCounter";
import Banner from "@/Components/Banner";
import Pricing from "@/Components/ourPackages/Pricing";
import Testimonials from "@/Components/Testimonials";
import React from "react";

const Packages = () => {
  return (
    <>
      <Banner
        page_title="Our Packages"
        text_one="Discover the"
        text_two="that fits your budget & suits needs "
        text_colored="Best Package"
      />
      <Pricing initialActiveTab="Website Design" />
      <BusinessCounter />
      <Testimonials />
    </>
  );
};

export default Packages;

import React from "react";
import Gallery from "@/Components/portfolio/Gallery";
import CollectionDataWebsite from "@/Components/CollectionDataWebsite";
import CollectionDataVideo from "@/Components/CollectionDataVideo";

const SectionHeader = ({ title, highlight, subtitle }) => (
  <div className="text-center mt-10 lg:mt-16">
    <h1 className="xl:text-6xl sm:text-4xl text-3xl font-bold xl:leading-[60px] leading-tight">
      Masters Of <span className="text-primary">{highlight}</span> {title}
    </h1>
    <p className="font-semibold max-xl:text-sm text-gray-700 mt-4">
      {subtitle}
    </p>
  </div>
);

const PortfolioPage = () => {
  return (
    <main className="overflow-hidden">
      <Gallery selectedPortfolio="Website Design" />

      <div className="container mx-auto text-center lg:w-[80vw]">
        <SectionHeader
          title="Design"
          highlight="Website"
          subtitle="Infusing Creativity into Your Digital Presences."
        />
        <CollectionDataWebsite />

        <SectionHeader
          title="And Design"
          highlight="Digital"
          subtitle="Infusing Creativity into Your Digital Presences."
        />
        <CollectionDataVideo category="2d-3d" />
      </div>
    </main>
  );
};

export default PortfolioPage;

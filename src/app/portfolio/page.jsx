import Gallery from "@/Components/portfolio/Gallery";
import React from "react";
import CollectionDataVideo from "@/Components/CollectionDataVideo";
import CollectionDataWebsite from "@/Components/CollectionDataWebsite";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Gallery selectedPortfolio={"Website Design"} />
      <div className="container mx-auto text-center lg:w-[80vw]">
        <h1 className="xl:text-6xl sm:text-4xl text-3xl font-bold my-0 xl:leading-[60px] leading-8 text-center mt-5">
          Masters Of <span className="text-primary">Website</span> Design
        </h1>
        <p className="font-semibold max-xl:text-sm lg:mt-10 text-gray-700">
          Infusing Creativity into Your Digital Presences.
        </p>
        <CollectionDataWebsite />
        <h1 className="xl:text-6xl sm:text-4xl text-3xl font-bold my-0 xl:leading-[40px] leading-40 text-center lg:mt-10">
          Masters Of <span className="text-primary">Digital</span> And Design
        </h1>
        <p className="font-semibold max-xl:text-sm mb-[-200px] lg:mt-10 md:mb-[-400px] text-gray-700 leading-8">
          Infusing Creativity into Your Digital Presences.
        </p>
        <CollectionDataVideo />
      </div>
    </main>
  );
};

export default page;

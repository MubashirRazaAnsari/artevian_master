import React from "react";
import CollectionDataVideo from "../CollectionDataVideo";

const Portfolio = () => {
  return (
    <main className="w-full flex justify-center items-center lg:py-16 py-8 px-4">
      <div className="container lg:w-[90%]">
        <h1
          className="lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 text-center"
          style={{ lineHeight: "1.4" }}
        >
          Choose The Right Type Of Video That 
          <span className="text-primary">Fits Your Brand</span>
        </h1>
        <p className="font-light mt-8 text-gray-500 text-center">
          Collaborate with Artevian for the best quality 2D/3D Animation
          services that will definitely last in the minds of viewers. Make an
          appointment today with our professional to feel the difference and to
          trigger all the creative talents supported by the technology of visual
          storytelling.
        </p>
        <CollectionDataVideo />
      </div>
    </main>
  );
};

export default Portfolio;

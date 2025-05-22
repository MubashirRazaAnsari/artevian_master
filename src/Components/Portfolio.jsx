import React from "react";
import Gallery from "../Components/portfolio/Gallery";

const Portfolio = ({
  text_colored,
  text_one,
  text_two,
  selectedPortfolio,
  parag,
}) => {
  return (
    <div className="w-full flex justify-center items-center lg:py-16 py-8 px-4">
      <div className="container lg:w-[90%]">
        <h1
          className="lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 text-center"
          style={{ lineHeight: "1.4" }}
        >
          {text_one} <span className="text-primary">{text_colored}</span>{" "}
          {text_two}
        </h1>
        <p className="font-light mt-8 text-gray-500 text-center">
          {parag || (
            <>
              {" "}
              The impressive services that Artevian offers are proof of our
              competence. We use our expertise as digital agents to pick fonts
              with care and combine them with colour and imagery in a way that
              accurately represents your ideas.Individuals and Businesses of all
              sizes, from fledgling startups to long-standing corporations, can
              benefit from our expert services.{" "}
            </>
          )}
        </p>
        <Gallery selectedPortfolio={selectedPortfolio} />
      </div>
    </div>
  );
};

export default Portfolio;

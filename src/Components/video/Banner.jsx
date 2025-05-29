import React from "react";

const Banner = ({ page_title, text_colored, text_one, text_two, cn }) => {
  return (
    <div
      className="w-full flex justify-center items-center px-4 mt-8 lg:py-16 py-8 "
      data-aos-delay="0"
      data-aos="fade-down"
    >
      <div className="lg:py-16 py-8 w-full flex justify-center items-center">
        <div className="container lg:w-[90%]">
          <h4 className="lg:text-3xl sm:text-2xl text-xl font-bold text-primary text-center">
            Our Services - {page_title}
          </h4>
          <h1
            className={`lg:text-6xl sm:text-4xl text-3xl font-bold text-center lg:py-10 py-5 ${cn}`}
          >
            {text_one}
            <span className="text-primary"> {text_colored} </span>
            {text_two}
          </h1>
          <p
            className={`font-light max-xl:text-sm text-center text-gray-700 ${cn}`}
          >
            Get Your Brands Connected With Your Customers 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

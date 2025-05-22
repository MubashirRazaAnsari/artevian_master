import React from "react";
import Image from "next/image";
import hero from "@/assets/logo-hero.png";
import Link from "next/link";
const Hero = ({ hero_title }) => {
  return (
    <div className="w-full flex justify-center items-center lg:py-16 py-8 px-4 max-h-screen">
      <div className="container lg:w-[90%]">
        <div className="grid grid-cols-12 lg:gap-4 gap-3">
          <div
            className="md:col-span-6 col-span-12"
            data-aos-delay="100"
            data-aos="fade-right"
          >
            <h4 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 lg:mb-8 mb-3">
              {hero_title} <span className="text-primary">Services</span>
            </h4>
            <p className="text-gray-500 lg:my-4 my-2">
              Consider us as your dedicated branding collaborators and commence
              your branding expedition with Artevian, encompassing logo creation
              and comprehensive branding solutions.
            </p>
            <p className="text-gray-500">
              We create logos and build designer brands that mesh well with your
              target demographic. Our extensive logo design portfolio includes
              mascots, abstract marks, emblems, logos, and monograms, so every
              company can stand out
            </p>
            <Link href="/contact">
              <button className="btn lg:mt-8 mt-4">Contact Us</button>
            </Link>
          </div>

          <div
            className="md:col-span-6 col-span-12 flex justify-end max-sm:justify-center"
            data-aos-delay="100"
            data-aos="fade-left"
          >
            <Image
              src={hero}
              alt="hero"
              width={1000}
              height={1000}
              className="xl:w-[70%] lg:w-[90%] max-sm:w-[75%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

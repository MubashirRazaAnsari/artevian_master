import React from "react";
import Image from "next/image";
import hero from "@/assets/video-hero.png";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center lg:py-10 py-5 px-4 max-h-screen max-sm:mt-5 mb-10">
      <div className="container lg:w-[90%]">
        <div className="grid grid-cols-12 lg:gap-4 gap-3">
          <div
            className="md:col-span-6 col-span-12"
            data-aos-delay="100"
            data-aos="fade-right"
          >
            <h4 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 lg:mb-8 mb-3">
              <span className="text-primary">Hand-Crafted</span> Animated Videos
            </h4>
            <p className="text-gray-500 lg:my-4 my-2">
              Artevian's top 2D/3D Animation services unleash incredible
              stories. As a prominent digital agency, we offer specialized
              skills in creating captivating and dynamic logo animations that
              are customized to meet the specific requirements of your business.
              If you need 2D animation, 3D animation, explainer videos, or
              motion graphics services, our skill and knowledge will
              consistently transform your ideas into visually captivating and
              innovative creations.
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
            <div className="w-full h-full xl:w-[70%] lg:w-[90%] max-sm:w-[75%]">
            <div className="px-2">
            <iframe
              src="https://www.youtube.com/embed/PhPyEVzhu5Q?si=h12IONKJmsLWwqPA"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

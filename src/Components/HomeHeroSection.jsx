"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import homeRobot from "../assets/home-robot.png";
import { GoArrowUpRight } from "react-icons/go";
import QuoteModal from "./QuoteModal";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const images = [
  "/assets/bgHero1.png",
  "/assets/bgHero2.png",
  "/assets/bgHero3.png",
];
const HomeHeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center justify-center text-white transition-all duration-1000 ease-in-out "
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/80 h-full flex justify-center items-end w-full px-4 mx-auto ">
        <div className="container h-full lg:w-[100%] text-gray-900 w-full flex lg:px-4 lg:gap-0 gap-0 max-md:flex-col-reverse sm:justify-between items-center py-12 mt-6">
          <div data-aos="fade-up" data-aos-delay="50">
            <h1 className="lg:text-[1.8rem] md:text-5xl sm:text-4xl mt-7  text-1xl sm:leading-10 font-bold mb-4">
              A digital agency for the future. We create
              <br />
              end-to-end
            </h1>
            <h1 className="text-primary lg:text-7xl md:text-5xl sm:text-4xl text-3xl sm:leading-10 font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Websites",
                    "Mobile Apps",
                    "Web Apps",
                    "Digital Experiences",
                    "Arts & Illustrations",
                    "2D & 3D Designs",
                    "2D & 3D Animations",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h1>

            <p className="sm:my-4 my-2 text-lg text-gray-700">
              Custom Websites, Branding & Digital Marketing Solutions
            </p>

            <div className="flex gap-6 items-center">
              <button className="btn" onClick={() => setShowModal(true)}>
                Get A Quote
              </button>
              <Link href="/contact">
                <button className=" border-b-[2px] transition-all duration-200 ease-in-out border-transparent hover:border-gray-800 flex gap-1 items-center font-medium">
                  Contact Us <GoArrowUpRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="fadeIn-animation">
            <Image
              src={homeRobot}
              alt="hero"
              width={1000}
              height={1000}
              className="md:h-[44rem] max-sm:h-[30rem] h-full w-full object-contain roboUpAndDown"
            />
          </div>
        </div>
      </div>
      <QuoteModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default HomeHeroSection;

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import homeRobot from "../assets/home-robot.png";
import { GoArrowUpRight } from "react-icons/go";
import QuoteModal from "./QuoteModal";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const images = [
  "/assets/bgHero1.webp",
  "/assets/bgHero2.webp",
  "/assets/bgHero3.webp",
];

const HomeHeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new window.Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true); // Continue even if some images fail to load
      }
    };

    preloadImages();
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/20 min-h-screen flex justify-center items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="container h-full w-full flex flex-col-reverse lg:flex-row justify-between items-center py-8 sm:py-12 lg:py-16 gap-8 lg:gap-4 lg:ml-[150px]">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight text-white">
              A digital agency for the future. We create
              <br className="hidden sm:block" />
              end-to-end
            </h1>
            <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
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
                  delay: 50,
                }}
              />
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
              Custom Websites, Branding & Digital Marketing Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <button
                className="btn w-full sm:w-auto px-6 py-3 text-base sm:text-lg"
                onClick={() => setShowModal(true)}
              >
                Get A Quote
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-white border-gray-500 border rounded-2xl px-5 py-2.5 hover:bg-slate-100 hover:text-gray-900"
              >
                <button className="w-full sm:w-auto border-b-[2px] transition-all duration-200 ease-in-out border-transparent hover:border-gray-900 flex gap-1 items-center justify-center font-medium text-base sm:text-lg">
                  Contact Us <GoArrowUpRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={homeRobot}
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-contain roboUpAndDown"
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
      <QuoteModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default HomeHeroSection;

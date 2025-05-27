"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { hover } from "framer-motion";

const HomeServiceSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !isHovered,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    if (!isHovered && sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, [isHovered]);

  return (
    <div
      className="bg-my-gradient uppercase w-full text-white text-center lg:text-3xl sm:text-xl text-lg px-4 py-6 font-bold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Link href={"/branding"}>
            <h3>BRANDING</h3>
          </Link>
        </div>
        <div>
          <Link href={"/e-commerce"}>
            <h3>E-COMMERCE</h3>
          </Link>
        </div>
        <div>
          <Link href={"/branding"}>
            <h3>advertising</h3>
          </Link>
        </div>
        <div>
          <Link href={"/2d-3d"}>
            <h3>ANIMATION</h3>
          </Link>
        </div>
        <div>
          <Link href={"/website"}>
            <h3>WEBSITES DESIGN</h3>
          </Link>
        </div>
        <div>
          <Link href={"/art-illustration"}>
            <h3>Art & Illustration</h3>
          </Link>
        </div>
        <div>
          <Link href={"/mobile-app"}>
            <h3>Mobile Apps</h3>
          </Link>
        </div>
        <div>
          <Link href={"/video-animation"}>
            <h3>Video Editing</h3>
          </Link>
        </div>
        <div>
          <Link href={"/digital-marketing"}>
            <h3>Digital Marketing</h3>
          </Link>
        </div>
        <div>
          <Link href={"/logo-design"}>
            <h3>Logo Design</h3>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default HomeServiceSlider;

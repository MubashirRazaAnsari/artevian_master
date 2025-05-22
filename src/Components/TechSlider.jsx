"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import python from "../assets/python.png";
import html from "../assets/html.png";
import shopify from "../assets/shopify.png";
import laravel from "../assets/laravel.png";
import photoshop from "../assets/photoshop.png";
import illustrator from "../assets/illustrator.png";
import blender from "../assets/blender.png";
import zbrush from "../assets/ZBrush-logo-43D6324DC8-seeklogo.com.png";
import aftereffect from "../assets/adobe_aftereffect.png";
import maya from "../assets/PngItem_1966079.png";
import react from "../assets/React.webp";
import mysql from "../assets/pngimg.com - mysql_PNG17.png";
import mongo from "../assets/Mongodb-PNG-Image-HD.png";
import vite from "../assets/vite-logo-BFD4283991-seeklogo.com.png";
import unreal from "../assets/unreal.png";
import unity from "../assets/unity.png";

const TechSlider = () => {
  const settings = {
    dots: false, // Disable dots for smoother appearance
    arrows: false,
    infinite: true,
    speed: 5000, // Slow transition speed (in milliseconds)
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 0, // 0 because we want continuous sliding without delay
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
  return (
    <div className="w-full py-6 px-4 bg-[#E7DAED]">
      <Slider {...settings}>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={python}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={html}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={shopify}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={laravel}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={illustrator}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={blender}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={zbrush}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={photoshop}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={maya}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={aftereffect}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={mysql}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={react}
            width={2000}
            height={2000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={mongo}
            width={2000}
            height={2000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={vite}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={unreal}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="techSlideData flex items-center justify-center h-24">
          <Image
            src={unity}
            width={1000}
            height={1000}
            alt="tech"
            className="w-16 h-16 object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default TechSlider;

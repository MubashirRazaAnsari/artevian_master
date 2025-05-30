"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import web1 from "../assets/web1.webp";
import web2 from "../assets/web2.webp";
import web3 from "../assets/web3.webp";
import web4 from "../assets/web4.webp";
import web5 from "../assets/web5.webp";
import web6 from "../assets/web6.webp";
import web7 from "../assets/web7.webp";
import web8 from "../assets/web8.webp";
import web9 from "../assets/web9.webp";
import web10 from "../assets/web10.webp";

const CollectionDataWebsite = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full collectionSlider lg:py-16 py-8">
        <Slider {...settings}>
          <div className="px-2">
            <Image src={web1} alt="Python" className="object-contain  zoom" />
          </div>

          <div className="px-2">
            <Image
              src={web2}
              alt="Python"
              className="h-full mt-1   zoom object-contain"
            />
          </div>

          <div className="px-2">
            <Image
              src={web3}
              alt="Python"
              className="h-full  object-contain zoom"
            />
          </div>

          <div className="px-2">
            <Image src={web4} alt="Python" className="object-contain  zoom" />
          </div>

          <div className="px-2">
            <Image src={web5} alt="Python" className="object-contain  zoom" />
          </div>

          <div className="px-2">
            <Image
              src={web6}
              alt="Python"
              className="h-full  zoom object-contain"
            />
          </div>

          <div className="px-2">
            <Image
              src={web7}
              alt="Python"
              className="h-full  zoom object-contain"
            />
          </div>

          <div className="px-2">
            <Image
              src={web8}
              alt="Python"
              className="h-full  zoom object-contain"
            />
          </div>

          <div className="px-2">
            <Image
              src={web9}
              alt="Python"
              className="h-full  zoom object-contain"
            />
          </div>
          <div className="px-2">
            <Image
              src={web10}
              alt="Python"
              className="h-full  zoom object-contain"
            />
          </div>
        </Slider>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <p className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          At Artevian, we craft websites that captivate, engage, and inspire.
          Our team of expert web designers and developers create bespoke
          websites that reflect your brand's unique identity, values, and
          mission
        </p>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={web1}
            alt="web1"
            className="object-contain sm:w-full w-full mx-auto"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={web2}
            alt="web2"
            className="object-contain sm:w-full w-full mx-auto"
            objectFit="contain"
          />
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <p className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          At Artevian, we believe that a website is more than just a digital
          presence – it's a reflection of your brand's essence, a symphony of
          style and substance, and a journey of discovery for your audience. Our
          bespoke websites are crafted to harmonize form and function, art and
          technology, and creativity and innovation.
        </p>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <p className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          In t he world of Artevian websites are not just static pages – they're
          dynamic experiences that pulse with life, energy, and emotion. Our
          team of expert designers and developers create bespoke websites that
          respond, adapt, and evolve, providing a seamless and unforgettable
          user experience.
        </p>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={web3}
            alt="web3"
            className="object-contain sm:w-full w-full mx-auto"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={web4}
            alt="web4"
            className="object-contain sm:w-full w-full mx-auto"
            objectFit="contain"
          />
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <p className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          At Artevian, we're the guardians of digital excellence, upholding the
          highest standards of creativity, innovation, and quality in every
          website we craft. Our bespoke websites are the testament to our
          unwavering commitment to excellence, reflecting the unique essence,
          values, and mission of your brand.
        </p>
      </div>
    </>
  );
};

export default CollectionDataWebsite;

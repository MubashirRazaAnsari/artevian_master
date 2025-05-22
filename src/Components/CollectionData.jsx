"use client";
import Image from "next/image";
import React from "react";

const CollectionData = ({
  image_one,
  image_two,
  image_three,
  image_four,
  text_one,
  text_two,
  text_three,
  text_four,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          {text_one || (
            <>
              <span className="text-primary">At Artevian</span>, we're a
              creative studio dedicated to crafting captivating art and
              illustrations that inspire and delight. With a passion for
              storytelling and visual exploration, our team of talented artists
              and illustrators bring ideas to life through traditional and
              digital media.
            </>
          )}
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={image_one}
            alt="BiteMaBiscuits"
            className="object-contain sm:w-full w-4/5 mx-auto"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={image_two}
            alt="death"
            className="object-contain sm:w-full w-4/5 mx-auto"
            objectFit="contain"
          />
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          {text_two || (
            <>
              <span className="text-primary">At Artevian</span>, we believe that
              art has the power to transform and uplift. That's why we're
              dedicated to creating art that inspires, motivates, and connects
              people.
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          {text_three || (
            <>
              Our <span className="text-primary">creative process</span> is
              built on a foundation of{" "}
              <span className="text-primary">
                collaboration, innovation, and attention
              </span>{" "}
              to detail.
            </>
          )}
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={image_three}
            alt="Fr0sty1"
            className="object-contain sm:w-full w-4/5 mx-auto"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <Image
            src={image_four}
            alt="Sattler"
            className="object-contain sm:w-full w-4/5 mx-auto"
            objectFit="contain"
          />
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          {text_four || (
            <>
              In a world where art and technology collide, we're{" "}
              <span className="text-primary">the masters of fusion</span>. Our
              team of visionary artists and illustrators weave together
              traditional and digital media.
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionData;

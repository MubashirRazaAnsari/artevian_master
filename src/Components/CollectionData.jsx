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
            <p>
              <span className="text-primary">At Artevian</span>, we're a
              creative studio dedicated to crafting captivating art and
              illustrations that inspire and delight. With a passion for
              storytelling and visual exploration, our team of talented artists
              and illustrators bring ideas to life through traditional and
              digital media.
            </p>
          )}
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image_one}
              alt="Collection Image 1"
              fill
              className="object-contain sm:w-full w-4/5 mx-auto p-2"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image_two}
              alt="Collection Image 2"
              fill
              className="object-contain sm:w-full w-4/5 mx-auto p-2"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base flex justify-center items-center">
          {text_two || (
            <p>
              Our team combines technical expertise with artistic vision to
              create illustrations that not only look stunning but also
              effectively communicate your message. From concept sketches to
              final artwork, we ensure every detail is perfect.
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          {text_three || (
            <p>
              Whether you need custom illustrations for your brand, editorial
              artwork, or unique digital art, we have the skills and creativity
              to bring your vision to life. Let's create something extraordinary
              together.
            </p>
          )}
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image_three}
              alt="Collection Image 3"
              fill
              className="object-contain sm:w-full w-4/5 mx-auto p-2"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image_four}
              alt="Collection Image 4"
              fill
              className="object-contain sm:w-full w-4/5 mx-auto p-2"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base flex justify-center items-center">
          {text_four || (
            <p>
              Our illustrations are more than just images—they're stories
              waiting to be told. We blend creativity with strategy to create
              artwork that resonates with your audience and elevates your brand.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionData;

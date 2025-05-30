import React from "react";
import Image from "next/image";
import hero from "@/assets/logo-hero.png";
import Link from "next/link";

const Hero = ({ hero_title, paragraph1, paragraph2, img }) => {
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
            {paragraph1 ? (
              <p className="text-gray-500 lg:my-4 my-2">{paragraph1}</p>
            ) : (
              <p className="text-gray-500 lg:my-4 my-2">
                At Artevian, we're more than just a creative service—we're your
                strategic design ally. Whether you're launching a new venture or
                refining your existing brand, we bring clarity, creativity, and
                consistency to every project.
              </p>
            )}

            {paragraph2 ? (
              <p className="text-gray-500">{paragraph2}</p>
            ) : (
              <p className="text-gray-500 lg:my-4 my-2">
                Our tailored solutions are crafted to align with your goals,
                speak to your audience, and elevate your digital presence. From
                concept to execution, Artevian ensures every visual element
                tells your brand's story with precision, purpose, and style.
              </p>
            )}
            <Link href="/contact">
              <button className="btn lg:mt-8 mt-4">Contact Us</button>
            </Link>
          </div>

          <div
            className="md:col-span-6 col-span-12 flex justify-end max-sm:justify-center"
            data-aos-delay="100"
            data-aos="fade-left"
          >
            <div className="relative xl:w-[70%] lg:w-[90%] max-sm:w-[75%] aspect-square">
              <Image
                src={img || hero}
                alt={`${hero_title || "Hero"} image`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 75vw, (max-width: 1200px) 90vw, 70vw"
                priority={true}
                quality={85}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

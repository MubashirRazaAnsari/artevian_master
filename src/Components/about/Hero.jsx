import Image from "next/image";
import React from "react";
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import about4 from "@/assets/about-4.png";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 mt-8 px-4">
      <div className="container lg:w-[90%]">
        <div className="grid grid-cols-12 lg:gap-10 gap-4">
          <div className="lg:col-span-6 col-span-12 aboutInfo flex-col justify-between gap-4">
            <h4 className="lg:text-3xl text-xl font-bold text-primary">
              About Us
            </h4>
            <h1 className="xl:text-5xl sm:text-4xl text-3xl font-bold my-0 xl:leading-[60px] leading-8">
              Masters Of <span className="text-primary">Digital</span> And
              Design
            </h1>
            <p className="font-semibold max-xl:text-sm">
              Infusing Creativity into Your Digital Presences.
            </p>
            <p className="xl:mt-4 mt-2 text-gray-500 max-xl:text-sm">
              Artevian works as your digital agent with a core ofvaluing client
              satisfaction. Our expertise lies in various market niches,
              involving digital marketing, content creation, logo design,
              branding, and web development.
            </p>

            <Link href="/contact">
              <button className="btn w-fit">Contact Us</button>
            </Link>
          </div>

          <div className="lg:col-span-6 col-span-12 flex gap-3 items-end">
            <Image
              data-aos-delay="0"
              data-aos="fade-up"
              src={about1}
              alt="hero"
              width={1000}
              height={1000}
              className="w-1/2 object-contain"
            />
            <Image
              data-aos-delay="0"
              data-aos="fade-down"
              src={about2}
              alt="hero"
              width={1000}
              height={1000}
              className="w-1/2 object-contain"
            />
          </div>

          <div
            className="lg:col-span-6 col-span-12 hidden lg:flex flex-col justify-between gap-4"
            data-aos-delay="0"
            data-aos="fade-right"
          >
            <h4 className="lg:text-3xl text-xl font-bold text-primary">
              About Us
            </h4>
            <h1 className="xl:text-5xl text-3xl font-bold my-0 xl:leading-[60px] leading-8">
              Masters Of <span className="text-primary">Digital</span> And
              Design
            </h1>
            <p className="font-semibold max-xl:text-sm">
              Infusing Creativity into Your Digital Presences.
            </p>
            <p className="xl:mt-4 mt-2 text-gray-500 max-xl:text-sm xl:leading-10 lg:leading-8">
              At Artevian, we are masters of digital innovation and creative
              design, committed to transforming brands through strategic and
              visually compelling digital solutions. As your trusted digital
              partner, we prioritize client satisfaction by delivering tailored
              services that drive visibility, engagement, and growth. Our team
              specializes in a wide spectrum of services—including digital
              marketing, content strategy, logo design, brand identity, and
              responsive web development—all crafted to elevate your online
              presence and position you competitively in today’s digital
              landscape.
            </p>

            <Link href="/contact">
              <button className="btn w-fit">Contact Us</button>
            </Link>
          </div>

          <div className="col-span-6">
            <Image
              data-aos-delay="0"
              data-aos="fade-down"
              src={about3}
              alt="hero"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
          <div className="col-span-6">
            <Image
              data-aos-delay="0"
              data-aos="fade-up"
              src={about4}
              alt="hero"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

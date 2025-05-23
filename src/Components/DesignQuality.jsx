import React from "react";
import Image from "next/image";
import quality from "../assets/quality-service.png";
import team from "../assets/team-collab.png";
import quick from "../assets/quick-time.png";
import service from "../assets/full-service.png";
const DesignQuality = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 lg:py-16 py-8 bg-[#F7F7FA]">
      <div className="container lg:w-[90%] w-full">
        <h1
          className="text-gray-900 font-bold text-center 
                 text-xl sm:text-2xl md:text-3xl lg:text-6xl 
                 leading-snug md:leading-normal"
        >
          Digitally Focused <span className="text-primary">Quality Design</span>{" "}
          Services
        </h1>
        <p className="sm:my-6 my-2 text-center text-gray-700 max-sm:text-sm">
          Artevian is committed to creating a digital presence that has a
          lasting impact. At Artevian, we strive to ensure that your brand
          resonates strongly across all online platforms.
        </p>
        <p className="text-center text-gray-700 max-sm:text-sm">
          Here at Artevian, we can make your brand stand out on any and all
          digital platforms.
        </p>

        <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:my-8 my-3">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image src={quality} alt="hero" className="w-10" />
            </div>
            <p className="text-xl mt-2.5 font-bold">
              <span className="text-primary mr-2">#1</span> Quality Services
            </p>

            <p className="text-gray-500 mt-4">
              Whatever may come our way, we will never give up on our relentless
              quest of excellence. We are thrilled to meet your expectations
              with exceptional quality that sets us apart from others, being
              pioneers in the digital realm.s
            </p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="150"
            className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image src={team} alt="hero" className="w-10" />
            </div>
            <p className="text-xl mt-2.5 font-bold">
              <span className="text-primary mr-2">#2</span> Team Collaboration
            </p>

            <p className="text-gray-500 mt-4">
              At Artevian, we believe in the power of teamwork and digital
              branding. As a group, Artevian's members bring a wealth of
              knowledge to the table, and the sum of their individual
              contributions yields remarkable outcomes.
            </p>
          </div>
        </div>

        <div className="lg:block hidden my-20 relative">
          <div className="w-full border-[1px] border-primary"></div>

          <div className="absolute -top-10 left-1/4 border-[1px] border-primary rounded-full  h-20"></div>
          <div className="absolute -top-10 right-1/4 border-[1px] border-primary rounded-full  h-20"></div>
        </div>

        <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:my-8 my-0">
          <div
            data-aos="fade-down"
            data-aos-delay="150"
            className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image src={service} alt="hero" className="w-10" />
            </div>
            <p className="text-xl mt-2.5 font-bold">
              <span className="text-primary mr-2">#3</span> ROI Focused
            </p>

            <p className="text-gray-500 mt-4">
              Our digital techniques have been thoughtfully developed to be both
              effective and cost-effective, ensuring that every campaign
              contributes to increased earnings.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image src={quick} alt="hero" className="w-10" />
            </div>
            <p className="text-xl mt-2.5 font-bold">
              <span className="text-primary mr-2">#4</span> Quick Delivery
            </p>

            <p className="text-gray-500 mt-4">
              We proudly promote efficiency and precision as our service slogan.
              Our skilled team will efficiently accomplish your projects,
              ensuring quality and your pleasure throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignQuality;

import React from "react";

const Experience = () => {
  return (
    <div className="lg:py-6 pt-0 pb-3 flex justify-center items-center px-3">
      <div className="container lg:w-[90%] flex flex-col items-center">
        <h1 className="lg:text-5xl font-bold text-gray-900 sm:text-4xl text-3xl text-center">
          Decades of <span className="text-primary">Experience</span>
        </h1>
        <h1 className="lg:text-5xl font-bold text-gray-900 sm:text-4xl text-3xl text-center sm:mt-3">
          Meeting <span className="text-primary">The Digital</span> Requirements
          of Our Clients!
        </h1>
        <p className="md:py-6 py-4 text-center">
          We work to achieve design excellence for our clients so that they can
          shine brightly in the digital universe.
        </p>
        <div className="flex justify-center items-center xl:w-[80%]">
          <div className="grid grid-cols-12 xl:gap-10 lg:gap-6 gap-3 px-1 ">
            <div
              data-aos-delay="50"
              data-aos="fade-down"
              className="md:col-span-6 col-span-12 lg:py-6 py-4 lg:px-12 px-8 bg-[#F4F4F4] rounded-xl text-center"
            >
              <h1 className="lg:text-2xl text-xl  font-semibold">Our Vision</h1>

              <p className="xl:mt-6 lg:mt-4 mt-2 xl:text-base lg:text-sm text-xs">
                To be a transformative force in digital branding—empowering
                businesses of all sizes to shine with distinction in a
                competitive digital world. At Artevian, we envision a future
                where bold creativity, purposeful strategy, and accessible
                innovation converge to make digital success achievable for all.
              </p>
              <p className="xl:mt-6 lg:mt-4 mt-2 xl:text-base lg:text-sm text-xs">
                Our commitment lies in unlocking potential, amplifying voices,
                and leading the charge in reshaping how brands build presence
                and influence online.
              </p>
            </div>

            <div
              data-aos-delay="250"
              data-aos="fade-up"
              className="md:col-span-6 col-span-12 lg:py-6 py-4 lg:px-12 px-8 bg-my-gradient rounded-xl text-center text-white"
            >
              <h1 className="lg:text-2xl text-xl  font-semibold">
                Our Mission
              </h1>

              <p className="xl:mt-6 lg:mt-4 mt-2 xl:text-base lg:text-sm text-xs">
                We are dedicated to crafting exceptional digital experiences
                through creative design, strategic branding, and results-driven
                marketing. Artevian exists to help businesses establish a
                powerful digital identity—blending affordability with creativity
                to deliver scalable, sustainable growth.
              </p>
              <p className="xl:mt-6 lg:mt-4 mt-2 xl:text-base lg:text-sm text-xs">
                With a client-first mindset, we strive to break barriers,
                deliver excellence, and drive meaningful impact in every pixel,
                post, and campaign we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

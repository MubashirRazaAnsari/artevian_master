import React from "react";
import Link from "next/link";
const Hero = ({
  videoID,
  hero_title,
  hero_title_colored,
  paragraph1,
  paragraph2,
  cn,
}) => {
  return (
    <div className="w-full flex justify-center items-center lg:py-10 py-5 px-4 max-h-screen max-sm:mt-5 mb-10">
      <div className="container lg:w-[90%]">
        <div className="grid grid-cols-12 lg:gap-4 gap-3">
          <div
            className="md:col-span-6 col-span-12"
            data-aos-delay="100"
            data-aos="fade-right"
          >
            <h4
              className={`lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 lg:mb-8 mb-3 ${cn}`}
            >
              <span className="text-primary">{hero_title_colored}</span>{" "}
              {hero_title}
            </h4>
            <p className={`lg:my-4 my-2 ${cn}`}>{paragraph1}</p>
            <p className={`lg:my-4 my-2 ${cn}`}>{paragraph2}</p>
            <Link href="/contact">
              <button className="btn lg:mt-8 mt-4">Contact Us</button>
            </Link>
          </div>

          <div
            className="md:col-span-6 col-span-12 flex justify-end max-sm:justify-center"
            data-aos-delay="100"
            data-aos="fade-left"
          >
            {/* <div className="w-full h-full xl:w-[70%] lg:w-[90%] max-sm:w-[75%]">
              <div className="px-2">
                <iframe
                  src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&controls=0&showinfo=0&modestbranding=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-72 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

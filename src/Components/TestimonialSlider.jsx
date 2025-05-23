"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick/lib/slider";
import testimonial1 from "../assets/testimonial-1.png";
import star from "../assets/star.png";
import prevBtn from "../assets/prev-btn.png";
import nextBtn from "../assets/next-btn.png";
import quoteT from "../assets/quote-t.png";
import quoteB from "../assets/quote-b.png";
import test1 from "../assets/testimonial-1.webp";
import test2 from "../assets/testimonial-2.webp";
import test3 from "../assets/testimonial-3.webp";
import test4 from "../assets/testimonial-4.webp";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slide-btn`} onClick={onClick}>
      <Image
        src={nextBtn}
        width={1000}
        height={1000}
        alt="next-btn"
        className=""
      />
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slide-btn`} onClick={onClick}>
      <Image
        src={prevBtn}
        width={1000}
        height={1000}
        alt="prev-btn"
        className=""
      />
    </button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TestimonialData = [
    {
      name: "Michelle McWeldin",
      desc: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      img: testimonial1.src,
      desig: "Software Engineer",
    },
    {
      name: "Colette Brown",
      desc: "I am the post-production supervisor for Zach King. We worked with Remy's company on VFX for a recent brand deal. Fame Itech did a fantastic job. They handled the client notes quickly and efficiently. I would recommend them.",
      img: test1.src,
      desig: "Project Manager",
    },
    {
      name: "Sydney Stewart",
      desc: "Hakeem did an amazing job with my video even after I had several edits and a lot of the videos quality I had were poor. He made them look super professional with a title page and edit the music. The video definitely exceeded my expectations.",
      img: test2.src,
      desig: "Designer",
    },
    {
      name: "Amanda Parker",
      desc: "I had an exceptional experience working with Fameitech - a remarkable team of professionals. Austin Weber responsiveness and consistent communication throughout the process were impressive. In the realm of web development and graphic design.",
      img: test3.src,
      desig: "Editor",
    },
    {
      name: "Patrick Hill",
      desc: "I really had a great experience working with this team. They understand my vision for my first book and they were great with all my questions and requests. They took the time to really understand what I was wanting and were extremely timely with my deadline.",
      img: test4.src,
      desig: "Manager",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="testimonials lg:w-[80%] w-full">
        <Slider {...settings}>
          {TestimonialData?.map((data, i) => (
            <div
              key={i}
              className="p-4 flex justify-center items-center md:max-w-[25rem] sm:max-w-[20rem] max-w-[18rem] sm:h-[32rem]"
            >
              <div className="rounded-xl border-[1px] border-gray-300 md:p-6 p-4 shadow-lg w-full h-full">
                <div className="p-3 relative">
                  <Image
                    src={quoteT}
                    width={1000}
                    height={1000}
                    alt="STAR"
                    className="sm:w-4 w-3 object-contain absolute top-0 left-[-5px]"
                  />
                  <p className="text-gray-700 text-center max-sm:text-xs ml-1">
                    {data.desc}
                  </p>
                  <Image
                    src={quoteB}
                    width={1000}
                    height={1000}
                    alt="STAR"
                    className="sm:w-4 w-3 object-contain absolute bottom-0 right-0"
                  />
                </div>
                <div className="flex justify-center items-center w-full flex-col">
                  <Image
                    src={data.img}
                    width={1000}
                    height={1000}
                    className="sm:w-20 w-16 mt-6 mb-4 rounded-full object-contain"
                    alt=""
                  />
                  <div className="flex gap-1 justify-center items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <Image
                          key={j}
                          src={star}
                          width={1000}
                          height={1000}
                          alt="STAR"
                          className="md:w-5 w-4"
                        />
                      ))}
                  </div>
                  <h4 className="font-bold sm:text-xl text-base text-[#57007B]">
                    {data.name}
                  </h4>
                  <p className="font-medium sm:text-base text-sm text-gray-700">
                    {data.desig}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;

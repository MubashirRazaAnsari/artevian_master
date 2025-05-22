"use client";
import React from "react";
import Slider from "react-slick";

const CollectionDataVideo = () => {
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
    <div>
      <div className="w-full collectionSlider lg:py-16 py-8">
        <Slider {...settings}>
          <div className="px-2">
            {/* <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlqaDI2cW1hMWtiY2V0ZGlhYXZseDJiYmk3eTlxYzF6d3djcnZjMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6zoIUqcgC5PrlAkgYH/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe> */}
            <video
              autoPlay
              loop
              muted
              className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
            >
              <source src={"/assets/Bins.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="px-2">
            <iframe
              src="https://www.youtube.com/embed/YkVbyWJO-sc?si=6o5Gl-tbipYLimAq"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            {/* <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FpcDR6NDE5N3BzeXBxNDc0djd2MHZyenF1NXJnM2dsdGgzOHJuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xXlI1tVPfxTLAqAzWh/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe> */}
            <video
              autoPlay
              loop
              muted
              className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
            >
              <source src={"/assets/Cameron.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="px-2">
            <iframe
              src="https://www.youtube.com/embed/PhPyEVzhu5Q?si=h12IONKJmsLWwqPA"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            {/* <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWF5Mm05NHQ5cHJma2p2YWM3ZGx5czJxa2I4cHBxMHYxcTYyNTI5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y6fTZBJBQZ9Ye5RGWX/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe> */}
            <video
              autoPlay
              loop
              muted
              className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
            >
              <source src={"/assets/eisforevil1.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="px-2">
            <iframe
              src="https://www.youtube.com/embed/PCaHueOwhdo?si=OEATq2kLXEf2l64Q"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            {/* <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXB2d2JnZWJtZ29yM3p5ODdrbDU3a2F0OTVweGZxenVqazFrNHhqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JjFRS6fmbgvg15ST53/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe> */}
            <video
              autoPlay
              loop
              muted
              className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
            >
              <source src={"/assets/FreezeMaster1.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="px-2">
            <iframe
              src="https://www.youtube.com/embed/bmkvlSVPecc?si=ENvq-igwCZRG5VX7"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          {/* <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGxwNTBiZDFtMGszMngyN283Zmk5ZHNlb3M4dzBqM3k0ZXJibjVwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i54KXXcclNRWYm48mm/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2QxbG9lcTBzYnRvNTNnN2tyeWtmMWdmcWliZXJxYzhmbXR1c3F6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Hcao8d9Rq62lYVYPp8/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2J6YjA5Ym5tYjBzNW00ZW96ZnhpdzhpanEzNXA0eTkzc3M4YWF2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NQA5Lgl6XYu2jXsRiS/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW42YzdrOTlma3dvajBudHdzeTVobmplZGRkejVzbm83cXN5Ym8zOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CxFWFv38IP3v3q0yj8/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>

          <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWR1MWxoYThwcnE0MHUyM3NwYTlweXpoZndpNTFsajI2NDd3eXZ6OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GpZwN9OTLdv8YDcafh/giphy.gif
"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div>
          <div className="px-2">
            <iframe
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnM3bzE5cWp4bDFyMTZ6MngxMWx2aXI0czdtamUwa3ZwYW93aHBjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gRRn8ExbIv9J2ACpRg/giphy.gif"
              frameborder="0"
              className="w-full lg:h-72 h-full"
            ></iframe>
          </div> */}
        </Slider>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          <div>
            <span className="text-primary">At Artevian</span>, we're the masters
            of motion, weaving tales that mesmerize, educate, and inspire. Our
            2D and 3D animations are crafted with precision, passion, and a deep
            understanding of what makes stories unforgettable.
          </div>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <video
            autoPlay
            loop
            muted
            className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
          >
            <source src={"/assets/Bins.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <video
            autoPlay
            loop
            muted
            className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
          >
            <source src={"/assets/Cameron.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          <div>
            <span className="text-primary">Imagine a world</span> where ideas
            come to life, where characters leap off the screen, and where
            emotions are evoked with every frame. At Artevian, we're the
            architects of this world, building bespoke animations that
            transport, transform, and captivate.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          <div>
            <span className="text-primary">
              In a world of noise and distraction,
            </span>{" "}
            we believe that animation has the power to cut through, connect, and
            resonate. At Artevian, our team of expert animators is committed to
            crafting bespoke animations that capture the essence of your brand,
            message, or story.
          </div>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <video
            autoPlay
            loop
            muted
            className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
          >
            <source src={"/assets/eisforevil1.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="grid grid-cols-12 sm:gap-0 gap-0 lg:py-6 py-4">
        <div className="xl:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 order-1 sm:order-none">
          <video
            autoPlay
            loop
            muted
            className="object-cover sm:h-96 mx-auto w-full zoom lg:col-span-3 col-span-6"
          >
            <source src={"/assets/FreezeMaster1.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="sm:col-span-2 col-span-0"></div>
        <div className="sm:col-span-6 col-span-12 text-gray-700 font-medium xl:text-2xl text-base order-2 sm:order-none max-sm:mt-4 flex justify-center items-center">
          <div>
            <span className="text-primary">
              Artevian is the symphony orchestra
            </span>{" "}
            of animation, where every frame is a note, every color is a chord,
            and every movement is a melody. Our 2D and 3D animations are the
            harmonies of imagination, playing in perfect syncopation to create a
            world of beauty, wonder, and enchantment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDataVideo;

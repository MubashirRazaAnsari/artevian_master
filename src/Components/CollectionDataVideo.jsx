"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const CollectionDataVideo = ({ category }) => {
  const [activeCategory] = useState(category);

  const videoData = {
    "2d-3d": {
      slider: [
        {
          videoId: "RGNoDy5s83g",
          title: "2D Animation Showcase",
          description:
            "At Artevian, we're the masters of motion, weaving tales that mesmerize, educate, and inspire. Our 2D and 3D animations are crafted with precision, passion, and a deep understanding of what makes stories unforgettable.",
        },
        {
          videoId: "4UHw3L3LPuc",
          title: "2D Animation Showcase",
          description:
            "At Artevian, we're the masters of motion, weaving tales that mesmerize, educate, and inspire. Our 2D and 3D animations are crafted with precision, passion, and a deep understanding of what makes stories unforgettable.",
        },
        {
          videoId: "VwoaAIqG29E",
          title: "2D Animation Showcase",
          description:
            "At Artevian, we're the masters of motion, weaving tales that mesmerize, educate, and inspire. Our 2D and 3D animations are crafted with precision, passion, and a deep understanding of what makes stories unforgettable.",
        },
        {
          videoId: "qOHBq8FAAbk",
          title: "3D Animation Excellence",
          description:
            "Imagine a world where ideas come to life, where characters leap off the screen, and where emotions are evoked with every frame. At Artevian, we're the architects of this world, building bespoke animations that transport, transform, and captivate.",
        },
        {
          videoId: "YkVbyWJO-sc",
          title: "Animation Mastery",
          description:
            "Artevian is the symphony orchestra of animation, where every frame is a note, every color is a chord, and every movement is a melody. Our 2D and 3D animations are the harmonies of imagination, playing in perfect syncopation to create a world of beauty, wonder, and enchantment.",
        },
      ],
      grid: [
        {
          videoId: "5RKcyOr7le0",
          title: "Visual Effects",
          description:
            "From cinematic spark to subtle style—our visual effects team adds flair and impact that elevates your message and keeps your audience hooked.",
        },
        {
          videoId: "PCaHueOwhdo",
          title: "Animation Innovation",
          description:
            "We go beyond basic movement. With fluid transitions, unique characters, and smart storytelling, our animations break through the noise and make people pay attention.",
        },
        {
          videoId: "YkVbyWJO-sc",
          title: "Creative Animation",
          description:
            "Our animators build immersive scenes with emotion and energy. Whether it's a character-driven story or sleek explainer, your vision becomes engaging reality.",
        },
        {
          videoId: "qOHBq8FAAbk",
          title: "Motion Graphics",
          description:
            "Enhance your content with smart, stylish motion graphics. From branded intros to animated infographics, we create visuals that inform and impress.",
        },
      ],
    },
    "video-editing": {
      slider: [
        {
          videoId: "1_hKTGvo2A4",
          title: "Video Animation Innovation",
          description:
            "We go beyond basic movement. With fluid transitions, unique characters, and smart storytelling, our animations break through the noise and make people pay attention.",
        },
        {
          videoId: "zvBu_S2-cMI",
          title: "Motion Graphics",
          description:
            "From concept to completion, we craft motion graphics that engage and inspire. Every frame is an opportunity to tell your story in a unique and compelling way.",
        },
        {
          videoId: "QD_C-M0mfIo",
          title: "Visual Effects",
          description:
            "From cinematic spark to subtle style—our visual effects team adds flair and impact that elevates your message and keeps your audience hooked.",
        },
        {
          videoId: "AhApbhV_tEU",
          title: "Visual Effects",
          description:
            "From cinematic spark to subtle style—our visual effects team adds flair and impact that elevates your message and keeps your audience hooked.",
        },
        {
          videoId: "QD_C-M0mfIo",
          title: "Visual Effects",
          description:
            "From cinematic spark to subtle style—our visual effects team adds flair and impact that elevates your message and keeps your audience hooked.",
        },
      ],
      grid: [
        {
          videoId: "1_hKTGvo2A4",
          title: "Precision Editing",
          description:
            "From sharp cuts to seamless blends—our editors craft visually compelling narratives that hold attention and highlight your message with cinematic polish.",
        },
        {
          videoId: "zvBu_S2-cMI",
          title: "Editing That Speaks",
          description:
            "We don't just trim clips—we shape stories. With rhythmic pacing, layered audio, and scene-enhancing transitions, every second is designed to keep your audience engaged.",
        },
        {
          videoId: "QD_C-M0mfIo",
          title: "Dynamic Story Cuts",
          description:
            "Our editors breathe life into raw footage—building emotion, energy, and clarity. Whether it's a product showcase, a brand video, or a full-length feature, we bring your footage to life.",
        },
        {
          videoId: "AhApbhV_tEU",
          title: "Stylized Content Overlays",
          description:
            "Boost your message with modern text overlays, branded lower thirds, and visual accents that sync with your voice. We add clarity, energy, and style—all with a clean, cohesive flow.",
        },
      ],
    },
  };

  // Add validation for category
  if (!videoData[activeCategory]) {
    console.warn(
      `Invalid category "${activeCategory}" provided to CollectionDataVideo. Defaulting to "2d-3d".`
    );
    return <CollectionDataVideo category="2d-3d" />;
  }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rows: 1,
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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block bg-purple-100 text-purple-500 px-3 py-1 sm:px-4 sm:py-2 border rounded-lg mb-3 sm:mb-4 text-sm sm:text-base font-semibold">
          {activeCategory === "2d-3d" ? "2D/3D ANIMATION" : "VIDEO ANIMATION"}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black px-4">
          {activeCategory === "2d-3d"
            ? "Bringing Imagination to Life with 2D & 3D Animation"
            : "Creating Captivating Video Experiences"}
        </h2>
      </div>

      <div className="w-full collectionSlider lg:py-16 py-8">
        <Slider {...settings}>
          {videoData[activeCategory].slider.map((video, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-xl bg-purple-800/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=0&showinfo=0&modestbranding=1&rel=0}`}
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay
                    title={video.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="space-y-16 mt-16">
        {videoData[activeCategory].grid.map((video, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`md:col-span-6 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`}
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
              </div>
            </div>
            <div
              className={`md:col-span-6 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionDataVideo;

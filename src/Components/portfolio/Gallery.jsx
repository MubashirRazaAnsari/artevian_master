"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../../../data/gallery";
import { categories } from "../../../data/pricing";
import { usePathname } from "next/navigation";

const Gallery = ({ selectedPortfolio }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    selectedPortfolio || "Website Design"
  );
  const [isHovered, setIsHovered] = useState(null);
  const pathname = usePathname();

  // Convert category to URL-friendly format
  const getCategoryPath = (category) => {
    // Special case for Art & Illustration
    if (category === "Art & Illustration") {
      return "art-illustration";
    }
    if (category === "Domain & Hosting") {
      return "domain-hosting";
    }
    if (category === "Website Design") {
      return "website";
    }
    if (category === "Website Maintenance") {
      return "maintenance";
    }
    if (category === "Video Editing") {
      return "video";
    }
    return category
      .toLowerCase()
      .replace(/[&]/g, "and") // Replace & with "and" for other categories
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove any other special characters
  };

  // Check if we're on a specific portfolio page
  const isPortfolioPage = categories.some((category) =>
    pathname.includes(getCategoryPath(category))
  );

  // Get the current category from the URL
  const getCurrentCategory = () => {
    // Special case for art-illustration
    if (pathname.includes("art-illustration")) {
      return "Art & Illustration";
    }

    for (const category of categories) {
      if (pathname.includes(getCategoryPath(category))) {
        return category;
      }
    }
    return null;
  };

  // Filter categories based on whether we're on a portfolio page
  const filteredCategories = isPortfolioPage
    ? categories.filter((cat) => cat === getCurrentCategory())
    : categories;

  const getCategoryAnimation = (category) => {
    switch (category) {
      case "Website Design":
        return {
          initial: { y: 0 },
          hover: {
            y: -400,
            transition: {
              duration: 4,
              ease: "linear",
            },
          },
        };

      case "E-Commerce":
        return {
          initial: { y: 0 },
          hover: {
            y: -400,
            transition: {
              duration: 4,
              ease: "linear",
            },
          },
        };
      case "Mobile Apps":
        return {
          hover: {
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.3 },
          },
        };
      case "Branding":
        return {
          hover: {
            scale: 1.1,
            filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            },
          },
        };
      case "Video Editing":
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.05,
            transition: {
              duration: 0.3,
            },
          },
        };
      case "2D/3D Animation":
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.05,
            transition: {
              duration: 0.3,
            },
          },
        };
      default:
        return {};
    }
  };

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : "";
  };

  return (
    <div className="min-h-screen p-8 lg:mt-10">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block bg-purple-100 text-purple-500 px-3 py-1 sm:px-4 sm:py-2 border rounded-lg mb-3 sm:mb-4 text-sm sm:text-base font-semibold">
          OUR PORTFOLIO
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black px-4">
          Elevate Your Brand with Expert Web Design and Development
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center items-center flex-wrap py-2 w-full max-x-6xl mx-3">
        {filteredCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-3 m-2 rounded-full text-white font-semibold whitespace-nowrap ${
              selectedCategory === category ? "btn" : "btnNonActive"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </nav>

      {/* Gallery Grid */}
      <div className="w-[80vw] mx-auto">
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {galleryData
                .filter((item) => item.category === selectedCategory)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className={
                      selectedCategory === "Mobile Apps"
                        ? `relative overflow-hidden rounded-xl backdrop-blur-sm`
                        : `relative overflow-hidden rounded-xl bg-purple-800/20 backdrop-blur-sm`
                    }
                    onHoverStart={() => setIsHovered(item.id)}
                    onHoverEnd={() => setIsHovered(null)}
                  >
                    {item.category === "Mobile Apps" ? (
                      // 📱 Mobile Mockup
                      <div className="relative w-72 h-[500px] bg-black rounded-[2rem] border-[10px] border-gray-800 overflow-hidden mx-auto shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-700 rounded-b-lg z-10" />
                        <div className="relative w-full h-full">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    ) : item.category === "Website Design" ? (
                      // 🖥️ Website Scroll-Up Image
                      <div className="relative w-full h-[400px] overflow-hidden">
                        <motion.div
                          className="relative w-full h-[800px]"
                          initial="initial"
                          animate={isHovered === item.id ? "hover" : "initial"}
                          variants={getCategoryAnimation(item.category)}
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      </div>
                    ) : item.category === "E-Commerce" ? (
                      // 🖥️ E-commerce Scroll-Up Image
                      <div className="relative w-full h-[400px] overflow-hidden">
                        <motion.div
                          className="relative w-full h-[800px]"
                          initial="initial"
                          animate={isHovered === item.id ? "hover" : "initial"}
                          variants={getCategoryAnimation(item.category)}
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      </div>
                    ) : item.category === "Video Editing" ? (
                      // 🎥 YouTube Video Embed
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                        <motion.div
                          className="relative w-full h-full"
                          initial="initial"
                          animate={isHovered === item.id ? "hover" : "initial"}
                          variants={getCategoryAnimation(item.category)}
                        >
                          <iframe
                            src={item.videoUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={item.title}
                          />
                        </motion.div>
                      </div>
                    ) : item.category === "2D/3D Animation" ? (
                      // 🎬 Local Video Player
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                        <motion.div
                          className="relative w-full h-full"
                          initial="initial"
                          animate={isHovered === item.id ? "hover" : "initial"}
                          variants={getCategoryAnimation(item.category)}
                        >
                          <video
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                            autoPlay
                          >
                            <source src={item.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </motion.div>
                      </div>
                    ) : (
                      <motion.div
                        className="aspect-video relative overflow-hidden"
                        initial="initial"
                        animate={isHovered === item.id ? "hover" : "initial"}
                        variants={getCategoryAnimation(item.category)}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="object-fill w-full h-full"
                        />
                      </motion.div>
                    )}

                    {/* Shared Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHovered === item.id ? 1 : 0,
                        y: isHovered === item.id ? 0 : 20,
                      }}
                      className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      {item.title ? (
                        <h3 className="text-xl font-bold text-white mb-2">
                          {" "}
                          {item.title}{" "}
                        </h3>
                      ) : (
                        ""
                      )}

                      {item.description ? (
                        <p className="text-gray-200">{item.description}</p>
                      ) : (
                        ""
                      )}
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;

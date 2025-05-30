"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../../../data/gallery";
import { categories } from "../../../data/pricing";
import { usePathname, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const Gallery = ({ selectedPortfolio, portfolio_title }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    selectedPortfolio || "Website Design"
  );
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  // Listen for category changes from Pricing component
  useEffect(() => {
    const handleCategoryChange = (event) => {
      if (pathname === "/") {
        setSelectedCategory(event.detail.category);
      }
    };

    window.addEventListener("categoryChange", handleCategoryChange);
    return () => {
      window.removeEventListener("categoryChange", handleCategoryChange);
    };
  }, [pathname]);

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
      return "video-editing";
    }
    if (category === "Mobile Apps") {
      return "mobile-app";
    }
    if (category === "2D/3D Animation") {
      return "2d-3d";
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
      case "E-Commerce":
        return {
          initial: { y: 0 },
          hover: {
            y: -200,
            transition: {
              duration: 2,
              ease: "linear",
            },
          },
        };

      case "Mobile Apps":
      case "Branding":
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.05,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
        };

      case "Video Editing":
      case "2D/3D Animation":
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.03,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
        };

      default:
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.03,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
        };
    }
  };

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (urlOrId) => {
    if (!urlOrId) return "";

    // If only video ID is passed (like "qOHBq8FAAbk"), just return the embed URL directly
    if (urlOrId.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
      return `https://www.youtube.com/embed/${urlOrId}?autoplay=1&mute=1&loop=1&playlist=${urlOrId}&controls=0&showinfo=0&modestbranding=1&rel=0`;
    }

    // Otherwise, try to extract from full URL
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/;
    const match = urlOrId.match(regExp);

    const videoId = match ? match[1] : null;

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`
      : "";
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // If on landing page, emit event to sync with Pricing component
    if (pathname === "/") {
      const event = new CustomEvent("categoryChange", { detail: { category } });
      window.dispatchEvent(event);
    }
  };

  const handleCardClick = (item) => {
    // If we're on the home page, redirect to the services page
    if (pathname === "/") {
      const categoryPath = getCategoryPath(item.category);
      router.push(`/${categoryPath}`);
    } else {
      // On service or portfolio pages, show the modal
      setSelectedItem(item);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Memoize filtered gallery items
  const filteredGalleryItems = useMemo(() => {
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen p-8 lg:mt-10">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block bg-purple-100 text-purple-500 px-3 py-1 sm:px-4 sm:py-2 border rounded-lg mb-3 sm:mb-4 text-sm sm:text-base font-semibold">
          OUR PORTFOLIO
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black px-4">
          {portfolio_title}
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center gap-3 py-2 w-full max-w-5xl mx-auto px-4">
        {filteredCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap text-sm md:text-base ${
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
              className={`grid ${
                selectedCategory === "Mobile Apps"
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-6 md:gap-8`}
            >
              {filteredGalleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`relative overflow-hidden rounded-xl ${
                    selectedCategory === "Mobile Apps"
                      ? "bg-transparent"
                      : "bg-purple-800/20 backdrop-blur-sm"
                  } shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                  onHoverStart={() => setIsHovered(item.id)}
                  onHoverEnd={() => setIsHovered(null)}
                  onClick={() => handleCardClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.category === "Mobile Apps" ? (
                    // 📱 Multiple Mobile Mockups
                    <div className="flex flex-row items-center justify-center gap-1 sm:gap-3 p-2 sm:p-4">
                      {[0, 1, 2].map((index) => (
                        <div
                          key={index}
                          className={`relative w-28 sm:w-28 md:w-40 h-[220px] sm:h-[280px] md:h-[320px] bg-black rounded-[1.5rem] sm:rounded-[2rem] border-[4px] sm:border-[6px] md:border-[8px] border-gray-800 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                            index === 2 ? "hidden md:hidden lg:block" : ""
                          }`}
                        >
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-1 sm:h-1.5 md:h-2 bg-gray-700 rounded-b-lg z-10" />
                          <div className="relative w-full h-full">
                            <Image
                              src={item.mockupImages?.[index] || item.imageUrl}
                              alt={`${item.title} - Mockup ${index + 1}`}
                              fill
                              className="object-cover w-full h-full"
                              sizes="(max-width: 640px) 112px, (max-width: 768px) 112px, 160px"
                              loading="lazy"
                              quality={60}
                            />
                          </div>
                        </div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isHovered === item.id ? 1 : 0,
                          y: isHovered === item.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                      >
                        {item.title && (
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="text-gray-200 text-sm">
                            {item.description}
                          </p>
                        )}
                      </motion.div>
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
                          loading="lazy"
                          quality={60}
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
                          loading="lazy"
                          quality={60}
                        />
                      </motion.div>
                    </div>
                  ) : item.category === "Video Editing" ||
                    item.category === "2D/3D Animation" ? (
                    // 🎥 YouTube Video Embed
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <motion.div
                        className="relative w-full h-full rounded-lg"
                        initial="initial"
                        animate={isHovered === item.id ? "hover" : "initial"}
                        variants={getCategoryAnimation(item.category)}
                      >
                        {/* <iframe
                          src={`https://www.youtube.com/embed/${item.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${item.videoUrl}&controls=0&showinfo=0&modestbranding=1&rel=0`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                        /> */}
                        <iframe
                          src={getYouTubeEmbedUrl(item.videoUrl)} // Use your utility
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={item.title}
                        />
                      </motion.div>
                    </div>
                  ) : (
                    // Default Image Display
                    <div className="relative w-full h-[300px] overflow-hidden">
                      <motion.div
                        className="relative w-full h-full"
                        initial="initial"
                        animate={isHovered === item.id ? "hover" : "initial"}
                        variants={getCategoryAnimation(item.category)}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={60}
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isHovered === item.id ? 1 : 0,
                      y: isHovered === item.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                  >
                    {item.title && (
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Portfolio Modal - Only show on service and portfolio pages */}
      {pathname !== "/" && (
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                >
                  <IoClose size={24} />
                </button>

                <div className="relative w-full aspect-video">
                  {selectedItem.category === "Video Editing" ||
                  selectedItem.category === "2D/3D Animation" ? (
                    <iframe
                      src={selectedItem.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedItem.title}
                    />
                  ) : (
                    <Image
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      loading="lazy"
                      quality={75}
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Gallery;

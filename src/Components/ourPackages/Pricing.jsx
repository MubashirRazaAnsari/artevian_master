"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { categories, pricingData } from "/data/pricing";
import { usePathname } from "next/navigation";
import CheckoutButton from "../CheckoutButton";

const Pricing = ({ initialActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialActiveTab || "Website Design"
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

  return (
    <div className="min-h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="lg:text-6xl font-bold text-gray-900 sm:text-4xl text-3xl text-center">
          Discover Our <span className="text-primary">Competitive</span> Rates
        </h1>
        <p className="text-center text-gray-700 lg:my-8 my-3 md:px-8 max-sm:text-sm">
          Explore our transparent pricing model designed to offer competitive
          rates tailored to meet your needs. We believe in clarity and fairness,
          ensuring you have full visibility into our pricing structure for a
          seamless experience.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="relative mb-12">
        <div className="flex justify-center items-center flex-wrap py-2 w-full max-x-6xl mx-3">
          {filteredCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-3 m-2 rounded-full text-white font-semibold whitespace-nowrap
                ${selectedCategory === category ? "btn" : "btnNonActive"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="w-[80vw] mx-auto">
        <AnimatePresence>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {pricingData
              .filter((pkg) => pkg.category === selectedCategory)
              .map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className="btn rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-[500px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-semibold text-center text-gray-100 mb-2">
                      {pkg.name} <span className="mr-6">PACKAGE</span>
                    </h3>
                    <div className="text-center mb-6">
                      <span className="text-5xl text-gray-100 font-semibold">
                        ${pkg.price}
                      </span>
                      <div className="text-gray-100 line-through mt-1">
                        ${pkg.originalPrice} ONLY
                      </div>
                    </div>
                    <div className="space-y-4 h-[280px] overflow-y-auto custom-scrollbar pr-2">
                      {pkg.features.map((feature, index) => (
                        <div
                          key={`${pkg.id}-feature-${index}`}
                          className="flex items-center gap-3"
                        >
                          <Check className="text-purple-100 w-5 h-5 flex-shrink-0" />
                          <span className="text-gray-100">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <CheckoutButton
                        priceId={pkg.stripePriceId}
                        packageName={pkg.name}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <motion.div
            key="custom-package"
            className="w-[77vw] mx-auto mt-6 bg-gradient-to-br from-purple-600 to-indigo-500 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              Need a Custom Package?
            </h3>
            <p className="text-white text-center mb-6">
              Can't find a plan that fits your needs? Let's craft something
              unique for your business.
            </p>
            <a
              href="/contact"
              className="w-1/4 mx-auto mt-auto inline-block text-center bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Pricing;

"use client";
import { useState, useEffect, Suspense, lazy } from "react";
import BusinessCounter from "@/Components/BusinessCounter";
import BusinessRock from "@/Components/BusinessRock";
// import Collection from "@/Components/Collection";
import HomeHeroSection from "@/Components/HomeHeroSection";
import HomeServiceSlider from "@/Components/HomeServiceSlider";
import ContactPopUp from "@/Components/ContactPopUp";

// Lazy load heavy components
const MagicHappens = lazy(() => import("@/Components/MagicHappens"));
const TechSlider = lazy(() => import("@/Components/TechSlider"));
const Gallery = lazy(() => import("@/Components/portfolio/Gallery"));
const Pricing = lazy(() => import("@/Components/ourPackages/Pricing"));
const DesignQuality = lazy(() => import("@/Components/DesignQuality"));
const Testimonials = lazy(() => import("@/Components/Testimonials"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Function to safely handle localStorage
  const safeLocalStorage = {
    getItem: (key) => {
      try {
        if (typeof window !== "undefined") {
          return localStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn("Error accessing localStorage:", error);
        return null;
      }
    },
    setItem: (key, value) => {
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem(key, value);
        }
      } catch (error) {
        console.warn("Error setting localStorage:", error);
      }
    },
    removeItem: (key) => {
      try {
        if (typeof window !== "undefined") {
          localStorage.removeItem(key);
        }
      } catch (error) {
        console.warn("Error removing from localStorage:", error);
      }
    },
  };

  useEffect(() => {
    const shown = safeLocalStorage.getItem("artevian_popup_shown");
    const hasInteracted = safeLocalStorage.getItem("artevian_user_interacted");

    // For testing: Show popup after 2 seconds if not shown
    if (!shown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        safeLocalStorage.setItem("artevian_popup_shown", "true");
      }, 2000); // Reduced to 2 seconds for testing

      return () => clearTimeout(timer);
    }
  }, []);

  // Track user interaction
  useEffect(() => {
    const handleInteraction = () => {
      safeLocalStorage.setItem("artevian_user_interacted", "true");
      // Remove event listeners after first interaction
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <main>
      {/* Add a test button to reset popup state */}

      <HomeHeroSection />
      <HomeServiceSlider />

      <Suspense fallback={<LoadingSpinner />}>
        <MagicHappens />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TechSlider />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Gallery />
      </Suspense>

      <BusinessRock />

      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>

      <BusinessCounter />

      <Suspense fallback={<LoadingSpinner />}>
        <DesignQuality />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white p-0 rounded-xl w-full max-w-2xl shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 z-50 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            {/* Form Component */}
            <ContactPopUp onClose={() => setShowPopup(false)} />
          </div>
        </div>
      )}
    </main>
  );
}

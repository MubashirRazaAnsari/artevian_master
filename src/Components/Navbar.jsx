"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import logo from "../assets/black-logo.png";
import {
  IoIosArrowDown,
  IoIosArrowDropright,
  IoIosArrowRoundUp,
} from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const endpoint = pathname.substring(pathname.lastIndexOf("/"));

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized menu handlers
  const handleMenuEnter = useCallback(() => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setShowMenu(true);
    setIsHoveringMenu(true);
  }, [menuTimeout]);

  const handleMenuLeave = useCallback(() => {
    setIsHoveringMenu(false);
    if (menuTimeout) clearTimeout(menuTimeout);
    setMenuTimeout(
      setTimeout(() => {
        if (!isHoveringSubmenu) {
          setShowMenu(false);
          setActiveCategory(null);
        }
      }, 200)
    );
  }, [menuTimeout, isHoveringSubmenu]);

  const handleSubmenuEnter = useCallback(() => {
    setIsHoveringSubmenu(true);
    if (menuTimeout) clearTimeout(menuTimeout);
  }, [menuTimeout]);

  const handleSubmenuLeave = useCallback(() => {
    setIsHoveringSubmenu(false);
    if (menuTimeout) clearTimeout(menuTimeout);
    setMenuTimeout(
      setTimeout(() => {
        setShowMenu(false);
        setActiveCategory(null);
      }, 200)
    );
  }, [menuTimeout]);

  const handleClose = (route) => {
    router.push(`/${route}`);
    setTimeout(() => setShow(false), 300);
  };

  const isActiveLink = (path) => endpoint === path;

  const serviceLinks = {
    webServices: {
      title: "Web Services",
      links: [
        { href: "/website", label: "Website Design" },
        { href: "/e-commerce", label: "E-Commerce" },
        { href: "/maintenance", label: "Website Maintenance" },
      ],
    },
    mobileApps: {
      title: "Mobile & Apps",
      links: [{ href: "/mobile-app", label: "Mobile Apps" }],
    },
    branding: {
      title: "Branding & Creative",
      links: [
        { href: "/logo-design", label: "Logo Design" },
        { href: "/branding", label: "Branding" },
        { href: "/art-illustration", label: "Art & Illustration" },
      ],
    },
    marketing: {
      title: "Marketing & SEO",
      links: [
        { href: "/seo", label: "SEO" },
        { href: "/digital-marketing", label: "Digital Marketing" },
        { href: "/smm", label: "Social Media Marketing" },
      ],
    },
    video: {
      title: "Video & Animation",
      links: [
        { href: "/video-animation", label: "Video Editing" },
        { href: "/2d-3d", label: "2D/3D Animation" },
      ],
    },
  };

  const ServiceSubMenu = ({ title, links }) => (
    <div
      className="group relative"
      onMouseEnter={() => {
        setActiveCategory(title);
        handleSubmenuEnter();
      }}
      onMouseLeave={handleSubmenuLeave}
    >
      <button
        className="w-full text-left flex items-center justify-between py-2 px-4 hover:bg-gray-50 rounded-lg transition-all duration-150"
        onClick={() =>
          setActiveCategory(activeCategory === title ? null : title)
        }
      >
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
        <IoIosArrowDropright
          className={`text-sm transition-transform duration-150 ${
            activeCategory === title ? "rotate-90" : ""
          }`}
        />
      </button>
      {activeCategory === title && (
        <div className="absolute left-full top-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ml-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block w-full text-gray-700 py-2 px-4 hover:bg-gray-50 hover:text-primary text-base transition-all duration-150 ${
                isActiveLink(link.href) ? "text-primary bg-gray-50" : ""
              }`}
            >
              <span className="block">{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <header
        className={`${
          isScrolled ? "bg-[#e2e2e2cc]" : "bg-transparent"
        } transition-colors duration-300 ease-in-out w-full fixed z-30 top-0 py-3 px-4 flex justify-center items-center`}
      >
        <nav className="container flex justify-between gap-3 text-base lg:w-[90%]">
          <Image
            src={logo}
            alt="logo"
            width={1000}
            height={1000}
            priority
            className="cursor-pointer lg:w-52 md:w-48 w-40 object-contain"
            onClick={() => router.push("/")}
          />

          <ul className="lg:flex lg:gap-8 gap-4 font-medium justify-center items-center text-gray-800 hidden xl:text-xl text-lg">
            <li>
              <Link
                href="/"
                className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                  isActiveLink("/") ? "text-primary" : "text-gray-800"
                }`}
              >
                <span className="block">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                  isActiveLink("/about") ? "text-primary" : "text-gray-800"
                }`}
              >
                <span className="block">About</span>
              </Link>
            </li>
            <li
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              className={`flex gap-1 items-end hover:text-primary transition-all duration-150 ease-in-out cursor-pointer relative ${
                Object.values(serviceLinks).some((section) =>
                  section.links.some((link) => isActiveLink(link.href))
                )
                  ? "text-primary"
                  : "text-gray-800"
              }`}
            >
              <span>Services</span>
              {showMenu && (
                <div
                  className="absolute top-7 left-1/2 transform -translate-x-1/2 z-[999999] transition-all duration-150"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="bg-white w-72 rounded-lg shadow-lg p-2">
                    {Object.values(serviceLinks).map((section) => (
                      <ServiceSubMenu
                        key={section.title}
                        title={section.title}
                        links={section.links}
                      />
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                  isActiveLink("/portfolio") ? "text-primary" : "text-gray-800"
                }`}
              >
                <span className="block">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                  isActiveLink("/contact") ? "text-primary" : "text-gray-800"
                }`}
              >
                <span className="block">Contact</span>
              </Link>
            </li>
          </ul>

          <div className="lg:block hidden mt-3">
            <Link href="/contact">
              <span className="btn">Hire Us Now</span>
            </Link>
          </div>

          <button className="lg:hidden block" onClick={() => setShow(true)}>
            <RiMenu3Fill color="#059CC5" size={28} />
          </button>
        </nav>
      </header>

      {show && (
        <div className="fixed z-50">
          <div
            className="fixed z-40 bg-gray-950 top-0 left-0 w-full h-screen opacity-35"
            onClick={() => setShow(false)}
          ></div>
          <div
            className={`fixed z-50 right-0 top-0 ${
              show ? "swipeToLeft" : "swipeToRight"
            } w-3/4 h-screen bg-gray-900 p-3`}
          >
            <div className="flex justify-end">
              <button
                className="lg:hidden block text-primary"
                onClick={() => setShow(false)}
              >
                <IoCloseSharp size={30} className={show ? "block" : "hidden"} />
              </button>
            </div>
            <div className="overflow-y-scroll h-full">
              <ul className="text-white text-center mt-12 gap-8 text-2xl flex justify-center flex-col items-center font-semibold">
                <li
                  onClick={() => handleClose("")}
                  className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                    isActiveLink("/") ? "text-primary" : "text-gray-200"
                  }`}
                >
                  Home
                </li>
                <li
                  onClick={() => handleClose("about")}
                  className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                    isActiveLink("/about") ? "text-primary" : "text-gray-200"
                  }`}
                >
                  About
                </li>
                <li
                  onClick={() => setShowMenuMobile(!showMenuMobile)}
                  className={`hover:text-primary flex gap-2 items-end transition-all duration-150 ease-in-out cursor-pointer ${
                    Object.values(serviceLinks).some((section) =>
                      section.links.some((link) => isActiveLink(link.href))
                    )
                      ? "text-primary"
                      : "text-gray-200"
                  }`}
                >
                  Services
                </li>

                {showMenuMobile && (
                  <ul className="flex flex-col gap-4 text-xl font-[600] bg-gray-800 mx-2 rounded-lg text-gray-200 p-3 m-0">
                    {Object.values(serviceLinks).map((section) => (
                      <li key={section.title} className="space-y-2">
                        <h3 className="text-primary font-semibold">
                          {section.title}
                        </h3>
                        <ul className="pl-4 space-y-2">
                          {section.links.map((link) => (
                            <li
                              key={link.href}
                              onClick={() =>
                                handleClose(link.href.substring(1))
                              }
                              className={`hover:text-gray-900 transition-all duration-150 text-base ease-in-out cursor-pointer ${
                                isActiveLink(link.href)
                                  ? "text-gray-900"
                                  : "text-gray-200"
                              }`}
                            >
                              {link.label}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}

                <li
                  onClick={() => handleClose("portfolio")}
                  className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                    isActiveLink("/portfolio")
                      ? "text-primary"
                      : "text-gray-200"
                  }`}
                >
                  Portfolio
                </li>
                <li
                  onClick={() => handleClose("contact")}
                  className={`hover:text-primary transition-all duration-150 ease-in-out cursor-pointer ${
                    isActiveLink("/contact") ? "text-primary" : "text-gray-200"
                  }`}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

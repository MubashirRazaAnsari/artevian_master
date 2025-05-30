"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDropright } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/logo.webp";
import logo2 from "../assets/black-logo.png";

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
      { href: "/video-editing", label: "Video Editing" },
      { href: "/2d-3d", label: "2D/3D Animation" },
    ],
  },
};

const useMenuHoverHandlers = ({
  setShowMenu,
  setActiveCategory,
  setMenuTimeout,
  setHoverState,
}) => {
  const handleEnter = useCallback(() => {
    setHoverState((prev) => ({ ...prev, menu: true }));
    setShowMenu(true);
    setMenuTimeout((timeout) => {
      if (timeout) clearTimeout(timeout);
      return null;
    });
  }, []);

  const handleLeave = useCallback(() => {
    setHoverState((prev) => ({ ...prev, menu: false }));
    setMenuTimeout(
      setTimeout(() => {
        setShowMenu(false);
        setActiveCategory(null);
      }, 150)
    );
  }, []);

  const handleSubEnter = () =>
    setHoverState((prev) => ({ ...prev, submenu: true }));
  const handleSubLeave = () =>
    setHoverState((prev) => ({ ...prev, submenu: false }));

  return { handleEnter, handleLeave, handleSubEnter, handleSubLeave };
};

const ServiceSubMenu = ({
  title,
  links,
  activeCategory,
  setActiveCategory,
  handleSubEnter,
  handleSubLeave,
  isActiveLink,
}) => (
  <div
    className="group relative"
    onMouseEnter={() => {
      setActiveCategory(title);
      handleSubEnter();
    }}
    onMouseLeave={handleSubLeave}
  >
    <button
      className="w-full text-left flex items-center justify-between py-2 px-4 hover:bg-gray-50 rounded-lg"
      onClick={() => setActiveCategory(activeCategory === title ? null : title)}
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
            className={`block py-2 px-4 hover:bg-gray-50 transition-all text-base ${
              isActiveLink(link.href)
                ? "text-primary bg-gray-50"
                : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const MobileMenu = ({
  showMenuMobile,
  setShowMenuMobile,
  serviceLinks,
  isActiveLink,
  handleClose,
}) => (
  <>
    <li
      onClick={() => setShowMenuMobile(!showMenuMobile)}
      className="hover:text-primary flex gap-2 items-end cursor-pointer"
    >
      Services
    </li>
    {showMenuMobile && (
      <ul className="flex flex-col gap-4 text-xl font-[600] mx-2 rounded-lg text-gray-200 p-3">
        {Object.values(serviceLinks).map((section) => (
          <li key={section.title} className="space-y-2">
            <h3 className="text-primary font-semibold">{section.title}</h3>
            <ul className="pl-4 space-y-2">
              {section.links.map((link) => (
                <li
                  key={link.href}
                  onClick={() => handleClose(link.href.substring(1))}
                  className={`cursor-pointer ${
                    isActiveLink(link.href)
                      ? "text-gray-900"
                      : "text-gray-200 hover:text-gray-900"
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
  </>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null);
  const [hoverState, setHoverState] = useState({ menu: false, submenu: false });

  const router = useRouter();
  const pathname = usePathname();
  const endpoint = pathname.substring(pathname.lastIndexOf("/"));

  const isActiveLink = (path) => endpoint === path;

  const handleClose = (route) => {
    router.push(`/${route}`);
    setTimeout(() => setShowMobileNav(false), 300);
  };

  const isDarkLogo =
    isScrolled || !["/", "/2d-3d", "/video-editing"].includes(endpoint);
  const logoSrc = isDarkLogo ? logo : logo2;

  const { handleEnter, handleLeave, handleSubEnter, handleSubLeave } =
    useMenuHoverHandlers({
      setShowMenu,
      setActiveCategory,
      setMenuTimeout,
      setHoverState,
    });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
    setShowMenuMobile(false);
    setActiveCategory(null);
    setHoverState({ menu: false, submenu: false });
    if (menuTimeout) clearTimeout(menuTimeout);
  }, [pathname]);

  return (
    <div>
      <header
        className={`fixed z-30 top-0 w-full py-3 px-4 transition-colors duration-300 ${
          isScrolled ? "bg-[#e2e2e2cc]" : "bg-transparent"
        }`}
      >
        <nav className="container flex justify-between items-center lg:w-[90%]">
          <Image
            src={logoSrc}
            alt="logo"
            width={1000}
            height={1000}
            priority
            className="cursor-pointer lg:w-52 md:w-48 w-40 object-contain"
            onClick={() => router.push("/")}
          />
          <ul
            className={`hidden lg:flex gap-8 font-medium items-center xl:text-xl text-lg ${
              isDarkLogo ? "text-gray-800" : "text-white/80"
            }`}
          >
            {["/", "/about", "/portfolio", "/contact"].map((path) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`hover:text-primary transition-all duration-150 ${
                    isActiveLink(path) ? "text-primary" : ""
                  }`}
                >
                  <span className="block">
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </span>
                </Link>
              </li>
            ))}
            <li
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className={`relative flex gap-1 items-end cursor-pointer hover:text-primary ${
                Object.values(serviceLinks).some((section) =>
                  section.links.some((link) => isActiveLink(link.href))
                )
                  ? "text-primary"
                  : ""
              }`}
            >
              <span>Services</span>
              {showMenu && (
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 z-50">
                  <div className="bg-white w-72 rounded-lg shadow-lg p-2">
                    {Object.values(serviceLinks).map((section) => (
                      <ServiceSubMenu
                        key={section.title}
                        title={section.title}
                        links={section.links}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        handleSubEnter={handleSubEnter}
                        handleSubLeave={handleSubLeave}
                        isActiveLink={isActiveLink}
                      />
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>

          <div className="hidden lg:block mt-3">
            <Link href="/contact">
              <span className="btn">Hire Us Now</span>
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setShowMobileNav(true)}>
            <RiMenu3Fill size={28} color="#059CC5" />
          </button>
        </nav>
      </header>

      {showMobileNav && (
        <div className="fixed z-50 inset-0">
          <div
            className="absolute inset-0 bg-black opacity-35"
            onClick={() => setShowMobileNav(false)}
          />
          <div className="fixed right-0 top-0 bg-gradient-to-t from-blue-900 to-purple-900 w-3/4 h-screen p-3 z-50">
            <div className="flex justify-end">
              <IoCloseSharp
                size={30}
                className="text-primary"
                onClick={() => setShowMobileNav(false)}
              />
            </div>
            <div className="overflow-y-auto h-full">
              <ul className="text-white text-center mt-12 gap-8 text-2xl flex flex-col items-center font-semibold">
                {["", "about", "portfolio", "contact"].map((page) => (
                  <li
                    key={page}
                    onClick={() => handleClose(page)}
                    className={`hover:text-primary cursor-pointer ${
                      isActiveLink(`/${page}`)
                        ? "text-primary"
                        : "text-gray-200"
                    }`}
                  >
                    {page === ""
                      ? "Home"
                      : page.charAt(0).toUpperCase() + page.slice(1)}
                  </li>
                ))}
                <MobileMenu
                  showMenuMobile={showMenuMobile}
                  setShowMenuMobile={setShowMenuMobile}
                  serviceLinks={serviceLinks}
                  isActiveLink={isActiveLink}
                  handleClose={handleClose}
                />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

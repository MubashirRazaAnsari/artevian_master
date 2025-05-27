"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
const ContactPopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setStatus(null);
          if (onClose) onClose();
        }, 1500);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative h-auto max-h-[85vh] bg-my-gradient px-4 lg:py-8 py-4 rounded-2xl w-[95%] sm:w-[90%] md:w-[85%] lg:w-[65%] xl:w-[55%] max-w-3xl mx-auto ">
        <button onClick={onClose} className="font-bold ml-1">
          <IoClose size={24} />
        </button>
        <div className="text-center">
          <h4 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Get In Touch
          </h4>
          <p className="font-light text-white text-center mt-4 sm:mt-6 text-sm sm:text-sm">
            Ready to elevate your brand with Artevian? Contact us today to
            explore our digital marketing, web development, Mobile App
            development, Logo Design, Branding, Illustration and Animation
          </p>
        </div>
        {status && (
          <div
            className={`mt-4 text-center ${
              status.type === "success" ? "text-green-200" : "text-red-200"
            }`}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="text-white grid grid-cols-12 lg:gap-3 gap-3 mt-4 sm:mt-6">
            <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
              <label
                htmlFor="firstName"
                className="my-1 sm:my-2 text-sm sm:text-base"
              >
                First Name
              </label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-2 sm:p-3 rounded-lg text-base sm:text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
              <label
                htmlFor="lastName"
                className="my-1 sm:my-2 text-sm sm:text-base"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-2 sm:p-3 rounded-lg text-base sm:text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label
                htmlFor="phone"
                className="my-1 sm:my-2 text-sm sm:text-base"
              >
                Phone
              </label>
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-2 sm:p-3 rounded-lg text-base sm:text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label
                htmlFor="email"
                className="my-1 sm:my-2 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-2 sm:p-3 rounded-lg text-base sm:text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label
                htmlFor="message"
                className="my-1 sm:my-2 text-sm sm:text-base"
              >
                Inquiry
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-2 sm:p-3 rounded-lg text-base sm:text-lg outline-none border-none"
                rows="4"
                disabled={loading}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn lg:mt-10 mt-5 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopUp;

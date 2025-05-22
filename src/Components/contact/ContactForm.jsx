"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
    <div className="bg-my-gradient px-4 lg:py-10 py-5 h-full flex justify-center items-center">
      <div className="container xl:w-[80%] lg:w-[90%] w-full">
        <div className="text-center">
          <h4 className="text-3xl font-bold text-white text-center">
            Get In Touch
          </h4>
          <p className="font-light text-white text-center mt-6">
            Ready to elevate your brand with Artevian? Contact us today to
            explore our digital marketing , web development , Mobile App
            development , Logo Design , Branding , Illustration and Animation
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
          <div className="text-white grid grid-cols-12 lg:gap-6 gap-3 mt-10">
            <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
              <label htmlFor="firstName" className="my-2">
                First Name
              </label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
              <label htmlFor="lastName" className="my-2">
                Last Name
              </label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label htmlFor="phone" className="my-2">
                Phone
              </label>
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label htmlFor="email" className="my-2">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none"
                disabled={loading}
              />
            </div>
            <div className="col-span-12 flex flex-col gap-0.5">
              <label htmlFor="message" className="my-2">
                Inquiry
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none"
                rows="5"
                disabled={loading}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="btn lg:mt-10 mt-5"
              type="submit"
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

export default ContactForm;

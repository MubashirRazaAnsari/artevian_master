"use client";

import React, { useState } from "react";

export default function QuoteModal({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => {
          setStatus(null);
          setShowModal(false);
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

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-sm:w-full w-auto max-sm:mx-2 my-6 mx-auto max-w-4xl">
              {/*content*/}
              <form
                onSubmit={handleSubmit}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-my-gradient"
              >
                {/*header*/}
                <div className="flex items-start justify-between px-5 pt-5 rounded-t">
                  <h3 className="text-2xl text-gray-200 font-semibold">
                    Get A Quote
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-1 flex-auto ">
                  <div className=" p-4 rounded-lg">
                    <div className="text-white grid grid-cols-12 lg:gap-3 gap-1.5">
                      <div className="sm:col-span-6 col-span-12 flex flex-col">
                        <label htmlFor="firstName" className="my-1">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                          disabled={loading}
                        />
                      </div>

                      <div className="sm:col-span-6 col-span-12 flex flex-col">
                        <label htmlFor="lastName" className="my-1">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                          disabled={loading}
                        />
                      </div>
                      <div className="sm:col-span-6 col-span-12 flex flex-col">
                        <label htmlFor="email" className="my-1">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                          disabled={loading}
                        />
                      </div>

                      <div className="sm:col-span-6 col-span-12 flex flex-col">
                        <label htmlFor="phone" className="my-1">
                          Phone
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                          disabled={loading}
                        />
                      </div>

                      <div className="col-span-12 flex flex-col">
                        <label htmlFor="message" className="my-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white text-gray-500 p-3 rounded-lg text-sm outline-none border-none"
                          rows="3"
                          disabled={loading}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {status && (
                  <div
                    className={`text-center mb-2 ${
                      status.type === "success"
                        ? "text-green-200"
                        : "text-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <div className="flex items-center justify-end pb-4 pr-4 rounded-b">
                  <button
                    className="text-gray-100 px-6 py-2 text-sm outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 border-[1px] rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={loading}
                  >
                    Close
                  </button>
                  <button
                    className="py-1.5 px-4 font-medium rounded-lg bg-gray-100 text-gray-800"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

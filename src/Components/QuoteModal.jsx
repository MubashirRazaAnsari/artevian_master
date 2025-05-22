"use client";

import React from "react";

export default function QuoteModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-sm:w-full w-auto max-sm:mx-2 my-6 mx-auto max-w-4xl">
              {/*content*/}
              <form
                onSubmit={(e) => e.preventDefault()}
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
                        <label htmlFor="f-name" className="my-1">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          name="f-name"
                          id="f-name"
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                        />
                      </div>

                      <div className="sm:col-span-6 col-span-12 flex flex-col">
                        <label htmlFor="l-name" className="my-1">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          name="l-name"
                          id="l-name"
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                        />
                      </div>

                      <div className="col-span-12 flex flex-col">
                        <label htmlFor="phone" className="my-1">
                          Phone
                        </label>
                        <input
                          required
                          type="number"
                          name="phone"
                          id="phone"
                          className="w-full bg-white text-gray-500 p-1.5 rounded-lg text-sm outline-none border-none"
                        />
                      </div>

                      <div className="col-span-12 flex flex-col">
                        <label htmlFor="msg" className="my-1">
                          Message
                        </label>
                        <textarea
                          name="msg"
                          id="msg"
                          className="w-full bg-white text-gray-500 p-3 rounded-lg text-sm outline-none border-none"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end pb-4 pr-4 rounded-b">
                  <button
                    className="text-gray-100 px-6 py-2 text-sm outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 border-[1px] rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="py-1.5 px-4 font-medium rounded-lg bg-gray-100 text-gray-800"
                    type="submit"
                    // onClick={() => setShowModal(false)}
                  >
                    Submit
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

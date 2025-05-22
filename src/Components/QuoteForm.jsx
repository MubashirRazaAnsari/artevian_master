"use client"
import React from 'react'

const QuoteForm = () => {
    return (
        <div className="bg-my-gradient px-4 lg:py-10 py-5 h-full flex justify-center items-center">
            <div className="container xl:w-[80%] lg:w-[90%] w-full">
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-white text-center">Get In Touch</h4>
                    <p className="font-light text-white text-center mt-6">Ready to elevate your brand with Artevian? Contact us today to explore our digital marketing and web development solutions.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>

                    <div className="text-white grid grid-cols-12 lg:gap-6 gap-3 mt-10">
                        <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
                            <label htmlFor="f-name" className="my-2">First Name</label>
                            <input required type="text" name="f-name" id="f-name" className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none" />
                        </div>

                        <div className="sm:col-span-6 col-span-12 flex flex-col gap-0.5">
                            <label htmlFor="l-name" className="my-2">Last Name</label>
                            <input required type="text" name="l-name" id="l-name" className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none" />
                        </div>

                        <div className="col-span-12 flex flex-col gap-0.5">
                            <label htmlFor="phone" className="my-2">Phone</label>
                            <input required type="number" name="phone" id="phone" className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none" />
                        </div>

                        <div className="col-span-12 flex flex-col gap-0.5">
                            <label htmlFor="msg" className="my-2">Inquiry</label>
                            <textarea name="msg" id="msg" className="w-full bg-white text-gray-500 p-3 rounded-lg text-lg outline-none border-none" rows="5"></textarea>
                        </div>




                    </div>

                    <div className="flex justify-center items-center">
                        <button className="btn lg:mt-10 mt-5">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuoteForm
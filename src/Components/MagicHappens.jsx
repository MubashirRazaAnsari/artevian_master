import React from "react";
import Image from "next/image";
import magic1 from "../assets/magic-happens-1.png";
import magic2 from "../assets/magic-happens-2.png";
import magic3 from "../assets/magic-happens-3.png";

const MagicHappens = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="container xl:w-[90%] px-4">
        <h1
          className="text-gray-900 font-bold text-center 
                 text-xl sm:text-2xl md:text-3xl lg:text-6xl 
                 leading-snug md:leading-normal"
        >
          At <span className="text-primary">Artevian</span> We Make Magic
          Happen!
        </h1>
        <p className="text-center my-6 text-gray-700">
          We guarantee that you will receive design and development services
          that focus on generating a high return on investment with our smart
          web design services. Our web design pricing and combo packages are
          affordable and customized to match your business goals with a unique
          approach that maximizes your brand’s revenue.
        </p>
        <div className="grid grid-cols-12 gap-3 mt-16">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="lg:col-span-4 md:col-span-6 col-span-12 rounded-md  shadow-md border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg mx-auto bg-my-gradient">
              <Image
                src={magic1}
                alt="hero"
                width={1000}
                height={1000}
                className="w-10"
              />
            </div>
            <p className="text-xl mt-2.5 text-center font-bold">
              Initial Phase
            </p>

            <p className="text-gray-500 text-center mt-4">
              We actively engage with our clients to get the original concept of
              the project. Next, our creative teams collaborate and refine it
              into a brilliant masterpiece.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:col-span-4 md:col-span-6 col-span-12 rounded-md  shadow-md border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg mx-auto bg-my-gradient">
              <Image
                src={magic2}
                alt="hero"
                width={1000}
                height={1000}
                className="w-10"
              />
            </div>
            <p className="text-xl mt-2.5 text-center font-bold">Execution</p>

            <p className="text-gray-500 text-center mt-4">
              We possess a highly skilled workforce and cutting-edge rendering
              machines. Innovation is ingrained in our nature, leading us to
              consistently develop exceptional products.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="lg:col-span-4 md:col-span-6 col-span-12 rounded-md  shadow-md border-[1px] border-gray-300 p-4"
          >
            <div className="w-fit p-2 rounded-lg mx-auto bg-my-gradient">
              <Image
                src={magic3}
                alt="hero"
                width={1000}
                height={1000}
                className="w-10"
              />
            </div>
            <p className="text-xl mt-2.5 text-center font-bold">Delivery</p>

            <p className="text-gray-500 text-center mt-4">
              Punctual delivery is our most exceptional service. Our conducive
              work environment guarantees prompt delivery of your assignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicHappens;

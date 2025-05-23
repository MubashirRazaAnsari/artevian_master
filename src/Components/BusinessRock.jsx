import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import Image from "next/image";
import Link from "next/link";
const BusinessRock = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="container">
        <div className="w-full my-10 lg:py-20 md:py-16 py-8 bg-[#F7F7FA] rounded-lg relative">
          <h1
            className="text-gray-900 font-bold text-center 
                 text-xl sm:text-2xl md:text-3xl lg:text-6xl 
                 leading-snug md:leading-normal"
          >
            Our Digital Products will make your{" "}
            <span className="text-primary">Business Rock!</span>
          </h1>
          <Image
            src={person1}
            width={1000}
            height={1000}
            alt="person-1"
            className="sm:w-20 w-14 absolute -top-5 p-0 right-[45%]"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <Image
            src={person2}
            width={1000}
            height={1000}
            alt="person-2"
            className="sm:w-20 w-14 absolute bottom-0 p-0 left-[14%]"
            data-aos="fade-out"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <Image
            src={person3}
            width={1000}
            height={1000}
            alt="person-3"
            className="sm:w-20 w-14 absolute bottom-0 p-0 right-[14%]"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <p className="xl:px-64 lg:px-36 px-0 text-center text-gray-700 sm:my-10 my-2 max-sm:text-sm">
            We are a team of enthusiastic, committed, and competent
            professionals and marketing professionals that are working hard to
            expand your user base.
          </p>

          <div className="flex justify-center mt-6 mb-7">
            <Link href="/contact">
              <button className="btn">Contact Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRock;

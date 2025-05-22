import React from "react";
import mailIcon from "@/assets/mail-icon.png";
import callIcon from "@/assets/call-icon.png";
import locatinIcon from "@/assets/location-icon.png";
import map from "@/assets/map.png";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="flex lg:flex-col sm:flex-row flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-gray-800">
          Let's Collaborate
        </h1>

        <p className="text-gray-500">
          Let’s collaborate and create something amazing together! Reach out to
          us today.
        </p>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <Image
              src={mailIcon}
              alt="location icon"
              className="w-6 object-contain"
            />{" "}
            <Link href="mailto:info@artevian.com" className="text-gray-500">
              info@artevian.com
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Image
              src={callIcon}
              alt="location icon"
              className="w-6 object-contain"
            />{" "}
            <Link href="tel:+17195173486" className="text-gray-500">
              +1 719 517 3486
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Image
              src={locatinIcon}
              alt="location icon"
              className="w-6 object-contain"
            />{" "}
            <p className="text-gray-500">
              1942 Broadway St. STE 314C BOULDER COUNTY Boulder, CO, 80302, USA
            </p>
          </li>
        </ul>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.586972476677!2d-105.27958079999999!3d40.017672499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec26470e9301%3A0x60b2893c672fc78!2s1942%20Broadway%20%23314c%2C%20Boulder%2C%20CO%2080302%2C%20USA!5e0!3m2!1sen!2s!4v1747357199915!5m2!1sen!2s"
        className="w-full h-[450px] rounded-lg"
        frameBorder={"0"}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactInfo;

"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const BusinessCounter = () => {
  const [projects, setProjects] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [clients, setClients] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      const projectsGoal = 200;
      const reviewsGoal = 50;
      const clientsGoal = 1000;
      const duration = 2000;

      const increment = (setFunction, goal) => {
        let start = 0;
        const step = Math.ceil(goal / (duration / 10));
        const interval = setInterval(() => {
          start += step;
          if (start > goal) {
            start = goal;
            clearInterval(interval);
          }
          setFunction(start);
        }, 10);
      };

      increment(setProjects, projectsGoal);
      increment(setReviews, reviewsGoal);
      increment(setClients, clientsGoal);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full bg-my-gradient sm:py-12 py-4 sm:px-4 flex justify-center items-center"
    >
      <div className="container lg:w-[90%] w-full flex justify-between items-center">
        <div className="text-white w-full border-r-2 border-white px-0.5">
          <h1 className="lg:text-5xl sm:text-2xl text-xl font-bold text-center w-full">
            {projects}+
          </h1>
          <p className="text-center lg:text-xl text-xs md:text-lg">
            Projects completed successfully
          </p>
        </div>
        <div className="text-white w-full border-r-2 border-white px-0.5">
          <h1 className="lg:text-5xl sm:text-2xl text-xl font-bold text-center w-full">
            {reviews}+
          </h1>
          <p className="text-center lg:text-xl text-xs md:text-lg">
            Projects completed successfully
          </p>
        </div>
        <div className="text-white w-full px-0.5">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-center w-full">
            {clients}+
          </h1>
          <p className="text-center lg:text-xl md:text-lg text-xs">
            Satisfied Clients Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCounter;

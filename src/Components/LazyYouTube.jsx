"use client";
import React, { useState } from "react";
import Image from "next/image";

const LazyYouTube = ({
  videoId,
  title,
  thumbnailQuality = "maxresdefault",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
      {!isLoaded ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsLoaded(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={title || "YouTube video thumbnail"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyYouTube;

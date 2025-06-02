"use client";
import { useState } from "react";

export default function LazyYoutubeEmbed({ videoId, title }) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-black">
      {isIframeLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setIsIframeLoaded(true)}
          className="w-full h-full relative group"
        >
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

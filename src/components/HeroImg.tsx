// HeroImg.tsx
// This is for the Hero Image that is to be displayed on the front page.

import React from "react";

type HeroImgProps = {
  background: string;
  title: string;
  subtitle?: string;
};

const HeroImg = ({ background, title, subtitle }: HeroImgProps) => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden flex items-center justify-center text-white text-center my-2">
      {/* Background Image */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl md:text-3xl font-light drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroImg;


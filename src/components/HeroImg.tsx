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
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-2xl font-medium drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroImg;


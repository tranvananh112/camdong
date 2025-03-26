"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  slogan?: string;
  ctaText?: string;
  backgroundImage?: string;
  onExploreClick?: () => void;
}

const HeroSection = ({
  title = "Thôn Cẩm Đồng",
  slogan = "Vẻ đẹp mộc mạc của miền quê Quảng Nam",
  ctaText = "Khám phá thêm",
  backgroundImage = "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2024-04/z5359616206266_b3201c63c8f2cba0d7dce52dc9b7b817.jpg",
  onExploreClick = () => {
    const locationSection = document.getElementById("location-section");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <div
      className="relative h-[700px] w-full bg-gray-100 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 leading-relaxed">
          {slogan}
        </p>
        <Button
          onClick={onExploreClick}
          size="lg"
          className="bg-white text-green-800 hover:bg-green-100 hover:text-green-900 transition-colors duration-300 text-lg px-8 py-6 rounded-full"
        >
          {ctaText}
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Decorative element - bamboo bridge silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

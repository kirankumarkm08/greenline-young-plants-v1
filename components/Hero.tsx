"use client";

import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoHeroBanner() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://youtu.be/6Zcwqx_oFV4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto  text-center text-white">
            {/* Main Heading */}
            <h1 className="mb-6 font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Cultivating Quality, Growing Excellence{" "}
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-xl font-semibold ">
              At Greenline Young Plants, we are passionate growers and suppliers
              of premium quality young plants. With years of experience and a
              commitment to excellence, we have become a trusted name in the
              field of horticulture, serving nurseries, farmers, landscapers,
              and exporters across India and beyond.{" "}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-green-600 text-white  uppercase font-bold hover:bg-pink-700"
              >
                Explore Our Varieties
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/50">
          <div className="mx-auto mt-2 h-2 w-1 animate-pulse rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}

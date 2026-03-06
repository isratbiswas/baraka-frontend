"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

interface Slide {
  id: number;
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/heroImg1.jpg",
    title: "Fresh & Natural Fruits for a Healthy Life",
  },
  {
    id: 2,
    image: "/heroImg2.jpg",
    title: "Sweet & Healthy Dates Packed with Energy",
  },
  { id: 3, image: "/heroImg3.jpg", title: "Pure Honey Straight from Nature" },
  {
    id: 4,
    image: "/heroImg4.jpg",
    title: "Premium Quality Seeds for Daily Nutrition",
  },
  {
    id: 5,
    image: "/heroImg5.jpg",
    title: "100% Pure Desi Ghee for Authentic Taste",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative w-full group" aria-label="Hero Carousel">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full h-[50vh] sm:h-[70vh] lg:h-[85vh] flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="100vw"
              />

              {/* Responsive Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <div className="max-w-4xl">
                  <h2 className="text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {/* <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95">
                    Shop Now
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on small mobile, visible on hover for desktop */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronRight size={32} />
      </button>

      {/* Progress Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-white/50" />
        ))}
      </div>
    </section>
  );
}

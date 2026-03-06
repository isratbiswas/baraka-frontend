"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-w-full h-[60vh] md:h-[80vh] flex-[0_0_100%]"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={slide.id === 1}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

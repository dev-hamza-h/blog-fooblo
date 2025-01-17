"use client";

import { Orbitron } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroPic from "@/assets/rb_39405.png";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto bg-green-100 py-20 lg:py-6 ">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div
          ref={heroRef}
          className={`lg:w-1/2 text-center lg:text-left px-6 lg:px-24 mt-12 lg:mt-0 ${
            isVisible ? "animate-slideIn" : ""
          }`}
        >
          <h1
            className={`text-3xl lg:text-5xl font-bold text-red-500 ${
              orbitron.className
            } ${isVisible ? "animate-slideIn" : ""}`}
          >
            Let&apos;s get <br />
            cooking!
          </h1>
          <p
            className={`mt-4 text-red-500 text-base lg:text-lg ${
              isVisible ? "animate-slideIn" : ""
            }`}
          >
            A blog full of healthy and easy to make recipes that take the stress
            out of cooking.
          </p>
          <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 text-red-500 font-semibold border-2 border-red-500 rounded-xl hover:bg-red-500 hover:text-white">
            VIEW ALL RECIPES
          </button>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-44">
          <div className="relative w-72 h-72 lg:w-[1020px] lg:h-[520px]">
            <Image
              src={HeroPic}
              alt="Delicious Food"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

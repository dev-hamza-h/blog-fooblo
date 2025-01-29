"use client";

import Image from "next/image";
import ImageOne from "@/assets/russian-salad.jpg";
import ImageTwo from "@/assets/banana-bread.jpg";
import ImageThree from "@/assets/chicken-soap.jpg";
import ImageFour from "@/assets/chicken-biryani.webp";
import ImageFive from "@/assets/pea-maggi.jpg";
import ImageSix from "@/assets/watermelon-salad.jpg";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, MessageCircle, } from "lucide-react"; // Import icons

const Receips = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  const Recipes = [
    {
      id: 1,
      image: ImageOne,
      name: "Russian Salad",
      rating: "★",
      score: "4.5/5",
      time: "3 min",
    },
    {
      id: 2,
      image: ImageTwo,
      name: "Best Banana Bread",
      rating: "★",
      score: "3.5/5",
      time: "3 min",
    },
    {
      id: 3,
      image: ImageThree,
      name: "Chicken Soap",
      rating: "★",
      score: "4.5/5",
      time: "3 min",
    },
    {
      id: 4,
      image: ImageFour,
      name: "Chicken Biryani",
      rating: "★",
      score: "4.5/5",
      time: "3 min",
    },
    {
      id: 5,
      image: ImageFive,
      name: "Pea Maggi",
      rating: "★",
      score: "4.5/5",
      time: "3 min",
    },
    {
      id: 6,
      image: ImageSix,
      name: "Watermelon Salad",
      rating: "★",
      score: "4.5/5",
      time: "3 min",
    },
  ];

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-20 py-8  bg-green-100">
      <h2 className="text-3xl font-extrabold text-start mb-8 text-red-500 mt-24">
        Latest Blog
      </h2>
      <div
        className={`grid gap-8 transition-all duration-300 ${
          showAll
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-h-[900px]"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-h-[400px]"
        }`}
      >
        {Recipes
          .slice(0, showAll ? Recipes.length : window.innerWidth < 768 ? 3 : 9)
          .map((product2) => (
            <div key={product2.id} className="p-4 border-2 rounded-xl shadow-xl ">
              <Link href={`/product2/${product2.id}`}>
                <Image
                  src={product2.image}
                  alt={product2.name}
                  className="w-full h-64 mb-4 rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{product2.name}</h3>
               
              <div className="flex items-center justify-between text-xl ">
                <p className="text-red-500">{product2.time}</p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-xl">{product2.rating}</span>
                  <span className="text-sm text-gray-500">{product2.score}</span>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4 text-gray-600 mt-2">
                <Heart className="w-5 h-5 cursor-pointer hover:text-red-500" />
                <MessageCircle className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              </div>
              {/* View Recipe Button */}
              <div>
                <button className="px-6 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600">
                  View Recipe
                </button>
              </div>
              </Link>
            </div>
          ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleView}
          className="px-6 py-2 text-red-500 font-semibold border-2 border-red-500 rounded-xl hover:bg-red-500 hover:text-white"
        >
          {showAll ? "Show Less" : "Load more ..."}
        </button>
      </div>
    </section>
  );
};

export default Receips;

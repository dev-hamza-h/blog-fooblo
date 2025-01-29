'use client';
 
import Image from 'next/image';
import About from "@/assets/about.jpg"

const AboutPage = () => {
  return (
    <section className="bg-green-100 py-16 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="text-4xl font-bold text-red-500 mb-4 mt-24">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to FoodBlo, your go-to destination for easy and delicious recipes! 
          Our mission is to make cooking enjoyable and stress-free for everyone, whether you&apos;re 
          a beginner or an experienced chef. We bring you a collection of healthy and tasty recipes 
          that suit every occasion.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image src={About} width={500} height={350} alt="Cooking" className='rounded-full shadow-2xl' />
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-2xl font-semibold text-green-600">Our Story</h3>
          <p className="text-gray-600 mt-4">
            Founded with a passion for good food and healthy living, FoodBlo started as a simple blog to share 
            home-cooked recipes with the world. Today, we are a growing community of food lovers who believe 
            that great meals bring people together.
          </p>
          <h3 className="text-2xl font-semibold text-green-600 mt-6">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Easy-to-follow recipes</li>
            <li>Healthy and delicious meal ideas</li>
            <li>Expert cooking tips and tricks</li>
            <li>A vibrant food-loving community</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

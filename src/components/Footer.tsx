import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto bg-green-400 text-white py-20 px-6 md:px-20 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-6 md:mb-0">
          <h1 className="mt-2 text-2xl font-extrabold text-red-600">
            FOO<span className="text-black">BLO</span>
          </h1>
          <p className="text-black mb-4">Subscribe to Our Newsletter:</p>
          <p className="text-black mb-4">
            Receive Updates on New Posts and Special Offers!
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email here"
              className="bg-black text-white px-4 py-2 rounded-l-md outline-none w-full"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">
              Submit
            </button>
          </div>
          <div className="flex space-x-4 mt-8 text-2xl lg:text-3xl">
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaTwitter className="text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-blue-700 cursor-pointer" />
            <FaInstagram className="text-pink-500 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
          <div>
            <h3 className="text-red-500 font-semibold mb-2">Categories</h3>
            <ul className="text-black space-y-1">
              <li>Recipes</li>
              <li>Health</li>
              <li>Travel</li>
              <li>Tech</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold mb-2">Support</h3>
            <ul className="text-black space-y-1">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Advertise with us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold mb-2">Pages</h3>
            <ul className="text-black space-y-1">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-black border-t border-black pt-4">
        © 2025 FOOBLO. All rights reserved
      </div>
    </footer>
  );
}

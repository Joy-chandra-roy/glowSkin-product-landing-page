import React from "react";
import { motion } from 'motion/react';
import { fadeUp } from "../animations/fade";

const Footer = () => {
  return (
    <footer className="bg-[#FBCEDD]/60 text-slate-800 py-10 px-6 lg:px-2">
      <motion.div
      variants={fadeUp()}
      initial="hidden"
      animate="visible"
       className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
          <h3 className="text-3xl font-bold text-[#F6339A]">GlowSkin</h3>
          <p className="mt-3 text-sm">
            Premium skincare products for healthy glowing skin.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-black">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Home</li>
            <li>Features</li>
            <li>Product</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black">Support</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black">Newsletter</h4>
          <p className="mt-3 text-sm">Subscribe to get special offers.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-3 w-full px-3 py-2 rounded bg-gray-800 border border-pink-500 text-sm"
          />
          <button className="mt-3 w-full px-4 py-2 bg-pink-500 text-white rounded">
            Subscribe
          </button>
        </div>
        </div>

       <div className="text-center text-sm mt-10 border-t border-pink-500 pt-5 ">
          © 2026 GlowSkin. All rights reserved.
        </div>
      </motion.div>
       
    </footer>
  );
};

export default Footer;

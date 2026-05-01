import React from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../animations/fade';

const CallToAction = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6 bg-pink-500">
        <motion.div 
        variants={fadeUp()}
        initial="hidden"
        animate="visible"
        className=' text-white text-center'>
        <h2 className="text-3xl font-bold">Get Your Glow Today</h2>
        <p className="mt-4">Limited time offer. Don't miss out!</p>
        <button className="mt-6 px-6 py-3 bg-white text-pink-500 rounded-full shadow hover:bg-gray-100">
          Order Now
        </button>
        </motion.div>
      </section>
    );
};

export default CallToAction;
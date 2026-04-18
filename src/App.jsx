import React from 'react';
import { easeInOut, motion } from "motion/react"

const App = () => {
  return (
    <div className='mx-20'>

      <motion.h1 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
      className='text-5xl text-purple-700 font-bold text-center shadow shadow-blue-300 pb-3'>
        Hello Everybody, Good Afternoon
      </motion.h1>

    </div>
  );
};

export default App;
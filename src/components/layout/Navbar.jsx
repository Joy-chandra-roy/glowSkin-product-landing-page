import React, { useState } from 'react';
import { motion } from 'motion/react';
import { scaleHover } from '../animations/scale';


const Navbar = () => {
    const navItems=[
        {name:"Home", id:"home"},
        {name:"Features", id:"features"},
        {name:"Product", id:"product"},
        {name:"Reviews", id:"reviews"},
        {name:"Contact", id:"contact"},
    ]

const [active, setActive]=useState("")


    return (
        <header className='bg-white/80 border-b border-slate-200 shadow-sm sticky top-0 z-50 '>
            <div className='max-w-7xl md:mx-auto px-4 '>
                <div className='flex justify-between items-center h-15'>
                    <h1 className='text-3xl font-bold text-[#F6339A]'>GlowSkin</h1>
                    <nav className='hidden md:flex items-center gap-5'>
                        {
                            navItems.map((item, index)=>(
                                <a 
                                href=''
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setActive(item.name)
                                }}
                                className={` text-sm font-semibold ${active==item.name? "text-[#F6339A]":"hover:text-pink-600"} `}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </nav>
                    
                    <motion.button
                     {...scaleHover}
                     className='bg-[#F6339A] px-4 py-2 rounded-xl font-semibold text-white'>
                        Buy Now
                    </motion.button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
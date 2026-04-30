export const scaleUp=()=>({
    hidden:{opacity:0, scale:0.8},
    visible:{
        opacity:1,
        scale:1,
        transition:{duration:0.6}
    }
})

export const scaleHover={
    whileHover:{scale:1.05  },
    whileTap:{scale:0.95}
}
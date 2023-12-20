import React from 'react'
import { motion } from "framer-motion"

export default function SpringScreen({screenHeight_1,screenHeight_2,screenColor_1,screenColor_2,children}) {

  return (
    <div className={`w-full ${screenColor_1}`}>
        <motion.div 
          whileHover={{scaleY:2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          onScroll={{scaleY:2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          transition={{ type: 'spring' }}  
          className={`flex justify-center w-full h-[${screenHeight_1}vh] ${screenColor_1} border-b-4  border-solid border-black`}>              
        </motion.div>          
        <div className={`w-full h-[${screenHeight_2}vh] ${screenColor_2}`} >
        {children}        
        </div>    
    </div>
  )
}

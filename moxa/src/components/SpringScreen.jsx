import React, { useEffect , useState} from 'react';
import picture from '../assets/icons_images/mobile_color.jpg';
import { useScrollPosition } from '../hooks/position';
import { motion} from "framer-motion"
import {useOnScreen} from '../hooks/position'

export default function SpringScreen({ pictureUrl, screenHeight_1, screenHeight_2, screenColor_1, screenColor_2, children }) {
  const scrollY = useScrollPosition();
  
  const [setRef, visible] = useOnScreen({ threshold: 0.1 });
  const [elPos,setElPos] = useState(0)
  const pictureParallax = Math.trunc((scrollY-elPos) / 40);

  const imgStyle = {
    transform: `translate(0%,-${scrollY > elPos && pictureParallax}%)`,
    width:"100%",
  };

  useEffect(() => console.log(setElPos(scrollY)),[visible])

  return (
    <div className={`w-full ${screenColor_1}`}>
      {pictureUrl ? (
        <div ref={setRef} className={`w-full h-[${screenHeight_1}vh] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] overflow-hidden`}>
          <img 
            alt="mobile"
            style={imgStyle}
            src={pictureUrl === "hand" ? picture : pictureUrl}
          /> 
        </div>
      ) :          
        (<motion.div 
          whileHover={{scaleY:1.2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          onScroll={{scaleY:1.2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          transition={{ type: 'spring' }}  
          className={`flex justify-center w-full h-[${screenHeight_1}vh] ${screenColor_1} border-b-4  border-solid border-black}`}>              
        </motion.div> )}         
        <div className={`w-full h-[${screenHeight_2}vh] ${screenColor_2}`} >
        {children}        
        </div>     
    </div>
  );
}

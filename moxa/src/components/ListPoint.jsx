import React,{memo, useState,useEffect} from 'react'
import { motion,useAnimation } from "framer-motion"
import colors from '../utils/colors'
import arrow from '../assets/icons_images/arrow.svg'
import { variants } from './animations'
import { useInView } from 'react-intersection-observer';
import { useHistory } from "react-router-dom";

function ListPoint({content,index}) {
  const controls = useAnimation();
 const [ref, inView] = useInView(); 
 let history = useHistory();

  useEffect(() => {
    if (inView) {
      controls.start('visibleCard');
    }
  }, [controls, inView]);

  const handleClick= (index) => {
    history.push(`/steps/${index}`)
  }

  const[isHovered,setIsHovered] = useState(false)
  return (
    <motion.div 
      ref={ref}
      initial="hiddenList"
      animate={controls}
      variants={variants}
      onClick={() => handleClick(index+1)}
      onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} key={index} whileHover={{scale:1.2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2,backgroundColor: colors.col_neon_green  }} className='h-[10.5vh] w-[70vw] flex flex-row justify-start rounded-full '>
        <div className='flex justify-center items-center w-[10.5vh] h-[10.5vh] border-solid border-2 border-background rounded-full '>
        <div className={`w-[2vh] h-[2vh] ${!isHovered && "bg-highlight text-black"} font-montserrat rounded-full text-[3vw] ${isHovered && "flex justify-center items-center"}`}>
          {isHovered && index+1}
        </div> 
        </div> 
        <div className={`w-[60vw] h-[10vh] flex items-center justify-between font-montserrat mt-2 rounded-full -translate-y-2 pl-10 text-[1vw] ${isHovered ? "text-black" : "text-white "}`}>{content}
        {isHovered && <img alt='arrow icon' src={arrow} className='w-12 h-12 -rotate-90'/>}
        </div>                      
    </motion.div>
  )
}

export default memo(ListPoint)
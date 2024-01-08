import React,{memo, useState,useEffect} from 'react'
import { motion,useAnimation } from "framer-motion"
import colors from '../utils/colors'
import arrow from '../assets/icons_images/arrow.svg'
import { variants } from './animations'
import { useInView } from 'react-intersection-observer';
import { useHistory } from "react-router-dom";
import { useScreenWidth } from '../hooks/position'

function ListPoint({content,index}) {
  const controls = useAnimation();
  const [ref, inView] = useInView(); 
  let history = useHistory();
  const screenWidth =useScreenWidth();

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
      onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} key={index} whileHover={{scale:1.2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2,backgroundColor: colors.col_neon_green  }} className={`h-[${screenWidth < 720 ? "5.5" : "10.5"}vh] w-[70vw] flex flex-row justify-start rounded-full`} >
        <div className={`flex justify-center items-center  border-solid border-2 border-background rounded-full ${screenWidth < 720 ? "w-[5.5vh] h-[5.5vh]" : "w-[10.5vh] h-[10.5vh]"}`}>
        <div className={`w-[2vh] h-[2vh] ${!isHovered && "bg-highlight text-black"} font-montserrat rounded-full text-[3vw] ${isHovered && "flex justify-center items-center"}`}>
          {isHovered && index+1}
        </div> 
        </div> 
        <div className={`w-[60vw] items-center justify-between ${screenWidth < 720 ? "h-[5.5] text-[3vw] pt-[1vh] " : " h-[10] pl-10 text-[1vw]"} flex  font-montserrat mt-2 rounded-full -translate-y-2  ${(isHovered && screenWidth <720) ? "text-black text-[2vw]" : (isHovered && screenWidth <720) ? "text-black text-[1vw]" :"text-white "}`}>
         <div className={`flex ${screenWidth < 720 ? "flex-col" : "flex-row"}`}>{content.headlines.map((el) => <p className='ml-[2vh]'>{el}</p>)}</div>
        {isHovered && <img alt='arrow icon' src={arrow} className='w-12 h-12 -rotate-90'/>}
        </div>                      
    </motion.div>
  )
}

export default memo(ListPoint)
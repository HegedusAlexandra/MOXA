import React,{memo, useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { variants } from './animations';
import { useScreenWidth } from '../hooks/position';

const Card = ({ title, title_2, content }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const screenWidth = useScreenWidth();

 useEffect(() => {
    if (inView) {
      controls.start('visibleCard');
    }
  }, [controls, inView]);


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`w-[${screenWidth < 720 ? 90 : 24}vw] bg-white rounded-md drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] ${screenWidth < 720 && "mb-[6vh]"}`}
    >
      <h2 className={`font-montserrat text-headline h-[10vh] font-bold text-start py-[4vh] text-gray-900 drop-shadow-md shadow-black-600/50 shadow-3xl ${screenWidth < 720 ? "text-2xl px-[4vw]" : "text-[1.6vw] px-[2vw]"}`}>{title}</h2>
      <h2 className={`font-montserrat  h-[14vh] font-semibold text-start   shadow-md text-gray-700 ${screenWidth < 720 ? "text-lg px-[4vw] py-[4vh]" : "text-[1vw] px-[2vw] py-[2vh]"}`}>{title_2}</h2>
      <p className={`w-[100%] h-[40vh] font-montserrat font-regular text-start px-[2vw] pt-[4vh] ${screenWidth < 720 ? "text-md px-[4vw]" : "text-[1vw] "}`}>{content}</p>
    </motion.div>
  );
};

export default memo(Card);

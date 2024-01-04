import React,{memo, useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { variants } from './animations';

const Card = ({ title, title_2, content }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
      className="w-[24vw] bg-white rounded-md drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] "
    >
      <h2 className='font-montserrat text-headline text-[1.6vw] h-[10vh] font-bold text-start px-[2vw] py-[4vh] text-gray-900 drop-shadow-md shadow-black-600/50 shadow-3xl'>{title}</h2>
      <h2 className='font-montserrat text-[1vw] h-[14vh] font-semibold text-start px-[2vw] py-[2vh] shadow-md text-gray-700'>{title_2}</h2>
      <p className='w-[100%] h-[40vh] font-montserrat text-[1vw] font-regular text-start px-[2vw] pt-[4vh]'>{content}</p>
    </motion.div>
  );
};

export default memo(Card);

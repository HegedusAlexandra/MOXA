import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, title_2, content }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-[24vw] h-[70vh] bg-sky-100 rounded-md drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] "
    >
      <h2 className='font-montserrat text-[4vh] h-[10vh] font-bold text-start px-[2vw] py-[4vh] text-lime-600 drop-shadow-md shadow-black-600/50'>{title}</h2>
      <h2 className='font-montserrat text-[1vw] h-[14vh] font-bold text-start px-[2vw] py-[2vh] shadow-md '>{title_2}</h2>
      <p className='font-montserrat text-[1vw] font-regular text-start px-[2vw] pt-[4vh]'>{content}</p>
    </motion.div>
  );
};

export default Card;

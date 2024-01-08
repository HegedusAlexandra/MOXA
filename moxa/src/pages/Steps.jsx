import React,{memo,useRef,useEffect} from 'react'
import {
    useParams
  } from "react-router-dom";
import CircularMenu from '../components/CircularMenu';
import { motion } from "framer-motion"
import contentArr from '../utils/constants';
import Step from '../components/Step';

function Steps() {
    let { slug } = useParams();
    const stepRefs = useRef([]);

    useEffect(() => {
      const index = parseInt(slug, 10) - 1;
      console.log('Index:', index);
      if (!isNaN(index) && stepRefs.current[index]) {
          const element = stepRefs.current[index];
          setTimeout(() => {
              // Get the bounding rectangle of the target element
              const boundingRect = element.getBoundingClientRect();
              // Calculate the desired scroll position (30vh above the element)
              const scrollPosition = window.scrollY + boundingRect.top - window.innerHeight * 0.02;
              // Scroll to the calculated position
              window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }, 500);
      }
  }, [slug]);

  return (
    <motion.div exit={{ opacity: 0 }} className="w-[100%] h-[500vh] bg-secondary flex flex-col items-start"> 
      <CircularMenu/>
      {contentArr.map((el, index) => (
          <div key={el[0] + index} ref={el => {stepRefs.current[index] = el}}>
              <Step el={el} index={index} />
          </div>
      ))}
    </motion.div>
  )
}

export default memo(Steps)
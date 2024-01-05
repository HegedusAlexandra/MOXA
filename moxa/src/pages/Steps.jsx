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
      const index = parseInt(slug, 10)-1;
      console.log('Index:', index);
      if (!isNaN(index) && stepRefs.current[index]) {
          const element = stepRefs.current[index];
          console.log('Scrolling to:', element);
          setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
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
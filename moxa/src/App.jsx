import './index.css';
import React,{useState,useEffect} from "react";
import Menu from './components/Menu';
import Footer from './components/Footer';
import { motion } from "framer-motion"
import CircularMenu from './components/CircularMenu';
import { useLottie } from "lottie-react";
import compAnim from "./components/compAnim.json";
import { useSpring } from 'framer-motion';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const options = {
    animationData: compAnim,
    loop: true
  };

  const { View } = useLottie(options);

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] bg-sky-600 flex flex-col items-start ">    
      {(scrollY <= 0 && screenWidth > 720) ? <Menu screen={"home"}/> : <CircularMenu screen={"home"}/>}
        <motion.div className='flex flex-row justify-end items-end w-[100%] h-[70vh] px-[14%] bg-sky-600'> 
          <div className='flex flex-col justify-end w-[50%] h-[90%]'> 
            <h1 className='font-afacad text-[9vw] font-bold text-start'>EvoluCode</h1>
            <h1 className='font-afacad text-5xl font-bold w-[80%] text-sky-600 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] -translate-y-10'>web solutions.</h1>
            <h1 className='font-afacad text-5xl font-bold w-[100%] text-sky-600 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]  whitespace-normal -translate-y-10'>anywhere.</h1>
            <h1 className='font-afacad text-5xl font-bold w-[100%] text-sky-600 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]  whitespace-normal -translate-y-10'>anytime.</h1>
          </div> 
          <div className='flex items-end w-[44%] h-[90%] ml-[6%]'>        
            {View}
          </div>     
      </motion.div>
      <div className='w-full h-[106vh] overflow-hidden'>
        <motion.div 
          whileHover={{scaleY:2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          onScroll={{scaleY:2,mass:0.2,bounce: 0.4,damping: 300,stiffness: 50,velocity: 2  }}
          transition={{ type: 'spring' }}  
          className='flex justify-center w-full h-[16vh] bg-sky-600 border-b-2 border-solid border-black'>            
        </motion.div>          
        <div className='w-full h-[90vh] bg-lime-400 '/>    
      </div>
      {scrollY <= 0 && <button className='absolute z-3 bottom-[12vh] left-[45%] w-[10vw] h-[6vh] mt-4 rounded-xl bg-lime-300 shadow-[0_6px_1px_2px_rgba(0,0,0,1)] font-afacad'>Want more?</button>}
      <Footer/>
    </motion.main>
  );
}

import './index.css';
import React,{useState,useEffect} from "react";
import Menu from './components/Menu';
import Footer from './components/Footer';
import devices_screen_content from "./components/icons_images/home_background.gif"
import { motion } from "framer-motion"

export default function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenRatio, setScreenRatio] = useState(screenWidth / screenHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setScreenRatio(window.innerWidth / window.innerHeight);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] h-[100vh] bg-cyan-950 flex flex-col overflow-x-hidden justify-center items-start">    
      <Menu screen={"home"}/> 
      <img src={devices_screen_content} className={
        (screenWidth > 1500) ? 'absolute z-1 right-0 w-[80%] ' : 
        (screenWidth > 800 && screenWidth < 1500) ? 'absolute w-[100%] h-[100vh] object-cover bottom-8' : 
        "absolute h-[100vw] object-cover rotate-90 left-0"} 
        alt="loading..."/>     
      <div className={
          screenWidth < 1050 ? "absolute z-10 w-[100%] h-[30%] backdrop-blur-md bg-white/30 top-0 flex flex-col justify-end" :
          (screenWidth < 1500 && screenWidth > 1050) ? `absolute z-2 w-[60%] h-[20%] right-0 top-[20%] rounded-lg flex flex-col justify-end backdrop-blur-md bg-white/30` : `absolute z-2 w-[40%] h-[20%] right-0 top-[20%] rounded-lg flex flex-col justify-end backdrop-blur-md bg-white/30`}>
          <h1 className='font-montserrat text-[3vh] pl-4'>Welcome to</h1>
          <h1 className='font-montserrat text-[7vh] pl-4'>EvoluCode</h1>
          <h1 className='font-montserrat text-[3vh] pl-4'>web solutions</h1>
      </div>
      <div className='absolute z-1 w-[100%] h-[100%]'>        
        <div 
          className={`absolute z-2 w-[${screenWidth > 1500 ? 80 : 100}%] h-[100vh] bg-[url("./components/icons_images/comp.png")] ${(screenWidth <1000 && screenWidth > 500) && 0} right-0 bg-cover bg-right bg-no-repeat `} 
          style={{boxShadow:"rgba(0, 0, 0, 0.4) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 2px -3px 0px inset,rgba(0, 0, 0, 0.12) 1px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
        </div>  
        <div className={screenWidth > 1500 ? 'absolute z-2 w-[20%] h-[100%] rounded-lg flex flex-col justify-center px-10' : screenWidth < 500 ? "hidden" : `absolute z-3 left-[${screenWidth< 1050 ? 5 : 40}] w-[${screenWidth < 1050 ? 94 : 40}%] rounded-lg flex flex-col justify-center p-[${screenWidth < 1000 ? 6 : 10}] m-[6vw] bottom-20 backdrop-blur-lg bg-cyan-100/50`} >
          <p className={`text-[${screenWidth < 1000 ? 3 : 1.5}vw] font-montserrat p-[1%]`}>
          When you choose MOXA, you're not just hiring a web development company; you're enlisting a team of experienced professionals who are passionate about bringing your vision to life. We take pride in our ability to listen and understand your unique goals, ensuring that we tailor our services to meet your specific needs.
          </p>
          {screenWidth > 1400 && <p className={`text-[${screenWidth > 1500 ? 16 : 12}px] font-montserrat p-[1%]`}>
          What sets us apart is our unwavering dedication to providing you with the knowledge and attention you deserve. We know that navigating the digital landscape can be complex, but with us by your side, it becomes a seamless journey. Our experts are always ready to assist you, whether you have questions, need advice, or require technical support.
          </p>}
        </div> 
      </div>          
      <Footer/>
    </motion.main>
  );
}

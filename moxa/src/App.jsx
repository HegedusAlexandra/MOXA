import './index.css';
import React,{useState,useEffect} from "react";
import Menu from './components/Menu';
import Footer from './components/Footer';
/* import CustomComponent from './components/CustomComponent';
import empty_frame from "./components/icons_images/empty_frame.png" */
import cat_callcenter from "./components/icons_images/cat_callcenter.jpg" 
import devices_screen_content from "./components/icons_images/home_background.gif"
import { motion } from "framer-motion"

export default function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] h-[100vh] bg-cyan-950 flex flex-col overflow-x-hidden justify-center items-start">    
      <Menu screen={"home"}/> 
      <img src={devices_screen_content} className={screenWidth > 1400 ? 'absolute right-10 w-[70%]' : (screenWidth > 650 && screenWidth<1400) ? 'absolute right-10 w-[100%] bottom-8' : "absolute w-full h-full object-cover"} alt="loading..."/>
      <div className={screenWidth < 800 ? "absolute z-10 w-[100%] h-[22%] backdrop-blur-md bg-white/30 top-20" : `absolute w-[${screenWidth < 1400 ? 60 : 40}%] right-0 rounded-lg flex flex-col justify-center backdrop-blur-md bg-white/30 -translate-y-32`}>
        <h1 className='font-montserrat text-md pl-4'>Welcome to</h1>
        <h1 className='font-montserrat text-[7vh] pl-4'>EvoluCode</h1>
        <h1 className='font-montserrat text-md pl-4'>web solutions</h1>
      </div>
      {screenWidth > 1400 && <div className=' w-[24%] h-[80%] px-[6%] pl-[2%] ml-[2%] rounded-lg flex flex-col justify-center '>
      <><p className='text-sm font-montserrat p-[1%]'>
            When you choose MOXA, you're not just hiring a web development company; you're enlisting a team of experienced professionals who are passionate about bringing your vision to life. We take pride in our ability to listen and understand your unique goals, ensuring that we tailor our services to meet your specific needs.
            </p><p className='text-sm font-montserrat p-[1%]'>
            What sets us apart is our unwavering dedication to providing you with the knowledge and attention you deserve. We know that navigating the digital landscape can be complex, but with us by your side, it becomes a seamless journey. Our experts are always ready to assist you, whether you have questions, need advice, or require technical support.
            </p></>
      </div> }
        <div className={`absolute z-2 w-[${screenWidth > 1400 ? 80 : 100}%] h-[100vh] px-[20%] bg-[url("./components/icons_images/comp.png")] ${(screenWidth <1000 && screenWidth > 500) && 0} right-0 bg-cover bg-right bg-no-repeat `} style={{boxShadow:"rgba(0, 0, 0, 0.4) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 2px -3px 0px inset,rgba(0, 0, 0, 0.12) 1px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
        </div>              
      {/*  <div className='bg-teal-50 w-[100%] h-[100vh]'>
            <CustomComponent 
            className={`w-[72%] h-min-[50%] ml-[14%] -mt-[10%] bg-teal-50`} 
            scrollPos1={150}
            reveal={true}
            children={<><p className='text-sm font-montserrat p-[1%]'>
            So, let's embark on this digital adventure together. Your online success is not only achievable but well within reach. At MOXA, we're here to guide you every step of the way, delivering web development solutions that not only meet but exceed your expectations. Welcome to a new era of online excellence.</p></>}
            />
        </div> */}
        <Footer/>
    </motion.main>
  );
}

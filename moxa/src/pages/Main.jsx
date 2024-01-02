import '../index.css';
import React,{memo} from "react";
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { motion } from "framer-motion"
import CircularMenu from '../components/CircularMenu';
import { useLottie } from "lottie-react";
import compAnim from "../assets/compAnim.json";
import SpringScreen from '../components/SpringScreen';
import Card from '../components/Card';
import { useScrollPosition, useScreenWidth } from '../hooks/position'

function Main() {
  const scrollY = useScrollPosition();
  const screenWidth = useScreenWidth();
  
  const options = {
    animationData: compAnim,
    loop: true
  };

  const { View } = useLottie(options);

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] bg-sky-700 flex flex-col items-start ">    
      {(scrollY <= 0 && screenWidth > 720) ? <Menu screen={"home"}/> : <CircularMenu screen={"home"}/>}
      <motion.div className='flex flex-row justify-end items-end w-[100%] h-[80vh] px-[14%] pb-[10vh] bg-sky-700'> 
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
      <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={70}
        screenColor_2={"bg-amber-300"}
        screenColor_1={"bg-sky-700"}>
          <h1 className='font-afacad text-[4vw] font-bold text-start px-[2vw] pt-[4vw]'>
          "Explore the New Dimensions of Digital Presence with Our Cutting-Edge Website Features!"
          </h1>
      </SpringScreen>
      <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={90}
        screenColor_2={"bg-sky-700"}
        screenColor_1={"bg-amber-300"}>
          <div className='flex flex-row justify-center pt-[20vh] pb-[20vh] gap-[4vw]'>
            <Card 
            title="Web development"
            title_2="Innovative and Comprehensive Solutions"  
            content=
            "Our team of accredited professionals specializes in delivering sophisticated software solutions, encompassing back-end, front-end, cloud computing, artificial intelligence, and more, all while leveraging the most reliable and esteemed technologies in the industry."/>
            <Card 
            title="Mobile development"
            title_2="Versatile and Cutting-Edge Solutions"  
            content="Our experienced developers stand poised to craft any variety of mobile software you require, with expertise spanning native, hybrid, and cross-platform applications. Rest assured, we are committed to delivering solutions that precisely meet your mobile software needs." />
            <Card title="Upgrading your already existing project" content="Our skilled team is adept at revitalizing and enhancing your existing projects, infusing them with new vigor and advanced features. We are dedicated to elevating your current undertakings to new heights of innovation and efficiency." />
          </div>
          </SpringScreen>
          <SpringScreen 
          pictureUrl={"hand"}
          screenHeight_1={40}
          screenHeight_2={70}
          screenColor_2={"bg-amber-300"}
          screenColor_1={"bg-sky-700"}>
          <h1 className='font-afacad text-[6vw] font-bold text-start px-[2vw] pt-[4vw]'>
          "Explore the New Dimensions of Digital Presence with Our Cutting-Edge Website Features!"
          </h1>      
          </SpringScreen> 
      {scrollY <= 0 && <button className='absolute z-3 bottom-[8vh] left-[45%] w-[10vw] h-[6vh] mt-4 rounded-xl bg-amber-300 shadow-[0_6px_1px_2px_rgba(0,0,0,1)] font-afacad'>Want more?</button>}
      <Footer/>
    </motion.main>
  );
}

export default memo(Main)
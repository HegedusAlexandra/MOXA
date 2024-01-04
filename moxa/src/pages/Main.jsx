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
import ListPoint from '../components/ListPoint';

function Main() {
  const scrollY = useScrollPosition();
  const screenWidth = useScreenWidth();
  
  const options = {
    animationData: compAnim,
    loop: true
  };

  const { View } = useLottie(options);

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] bg-secondary flex flex-col items-start ">    
      {(scrollY <= 0 && screenWidth > 720) ? <Menu screen={"home"}/> : <CircularMenu screen={"home"}/>}
      <motion.div className='flex flex-row justify-end items-end w-[100%] h-[80vh] px-[14%] pb-[10vh] bg-background_light'> 
          <div className='flex flex-col justify-end w-[50%] h-[90%]'> 
            <h1 className='font-afacad text-[9vw] font-bold text-start text-headline'>EvoluCode</h1>
            <h1 className='font-afacad text-5xl font-bold w-[80%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)] -translate-y-10'>web solutions.</h1>
            <h1 className='font-afacad text-5xl font-bold w-[100%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)]  whitespace-normal -translate-y-10'>anywhere.</h1>
            <h1 className='font-afacad text-5xl font-bold w-[100%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)]  whitespace-normal -translate-y-10'>anytime.</h1>
            <button className=' w-[10vw] h-[6vh] mt-4 rounded-xl bg-secondary shadow-[0_6px_1px_2px_rgba(0,0,0,1)] font-afacad text-[1.5vw]'>Want more?</button>
          </div> 
          <div className='flex items-end w-[44%] h-[90%] ml-[6%]'>        
            {View}
          </div>     
      </motion.div>
      <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={50}
        screenColor_2={"bg-secondary"}
        screenColor_1={"bg-background_light"}>
          <h1 className='font-afacad text-[4vw] font-bold text-start px-[14vw] pt-[4vw]'>
          Explore the New Dimensions of Digital Presence with Our Cutting-Edge Website Features!
          </h1>
      </SpringScreen>
      <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={90}
        screenColor_2={"bg-background_light"}
        screenColor_1={"bg-secondary"}>
          <div className='flex flex-row justify-center pt-[20vh] pb-[20vh] gap-[2vw] px-[14vw]'>
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
          screenHeight_2={100}
          screenColor_2={"bg-headline"}
          screenColor_1={"bg-headline"}>
            <div className='flex flex-col justify-center items-center w-[100%] h-[100%]'>
              <h1 className='font-afacad w-[100%] h-[20%] text-[3vw] font-bold text-start px-[14vw] pb-[10vw] pt-[4vw] text-highlight'>
              Initial Consultation and Development Strategy:
              </h1> 
              <div className='flex flex-row w-[100%] h-[80%]'>               
                  <div className='w-[1vh] h-[80%] ml-[30vh] bg-background_light rounded-full'/>
                  <div className='h-[94%] flex flex-col justify-between -translate-y-[5.4vh]'>
                    <ListPoint 
                    content={"Understanding Your Vision , Defining the Scope , Technical Planning"}/>   
                    <ListPoint 
                    content={"Crafting the Blueprint , Visual Aesthetics , Iterative Feedback"}/>   
                    <ListPoint 
                    content={"Bringing Designs to Life , Developing the Engine Room , Seamless Integration , Collaborative Development"}/>   
                    <ListPoint 
                    content={"Comprehensive Testing , User-Centric Evaluation ,Performance Optimization"}/>   
                    <ListPoint 
                    content={"Launching Your Vision , Continuous Improvement"}/>  
                  </div>        
              </div>
            </div>     
          </SpringScreen> 
          <div className='w-[100%] h-[30%] px-[14%] bg-background_light'>      
            <Footer/>
          </div>
    </motion.main>
  );
}

export default memo(Main)
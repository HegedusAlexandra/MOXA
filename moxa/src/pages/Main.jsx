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
import contentArr from '../utils/constants';

function Main() {
  const scrollY = useScrollPosition();
  const screenWidth = useScreenWidth();
  
  const options = {
    animationData: compAnim,
    loop: true
  };

  const { View } = useLottie(options);

  return (   
    <motion.main exit={{ opacity: 0 }} className="w-[100%] bg-secondary flex flex-col items-start overflow-x-hidden">    
      {(scrollY <= 0 && screenWidth > 720) ? <Menu screen={"home"}/> : <CircularMenu screen={"home"}/>}
      <motion.div 
      className={`flex w-[100%]  bg-background_light ${screenWidth < 720 ? "flex-col pt-[16vh] h-[90vh] px-[6%]" : "flex-row pb-[10vh] justify-end items-end h-[80vh] px-[14%]"}`}> 
          <div className={`flex flex-col justify-end ${screenWidth < 720 ? "h-[30vh] w-[100%] mt-[4vh]" : "h-[90%] w-[50%]"}`}> 
            <h1 className={`font-afacad font-bold text-start text-headline ${screenWidth < 720 ? "text-[10vh] mt-[10vh]" :"text-[18vh]"} mb-[4vh]`}>EvoluCode</h1>
            <h1 className={`font-afacad text-5xl font-bold w-[80%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)] ${screenWidth < 720 ? "text-[6vh]" :"text-5xl -translate-y-10"}`}>web solutions.</h1>
            <h1 className={`font-afacad text-5xl font-bold w-[80%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)] ${screenWidth < 720 ? "text-[6vh]" :"text-5xl -translate-y-10"}`}>anywhere.</h1>
            <h1 className={`font-afacad text-5xl font-bold w-[80%] text-highlight drop-shadow-[2px_2px_1px_rgba(0,0,0,0.8)] ${screenWidth < 720 ? "text-[6vh]" :"text-5xl -translate-y-10"}`}>anytime.</h1>
           {screenWidth > 720 && <button className=' w-[10vw] h-[6vh] mt-4 rounded-xl bg-secondary shadow-[0_6px_1px_2px_rgba(0,0,0,1)] font-afacad text-[1.5vw]'>Want more?</button>}
          </div> 
          <div className={`flex  ${screenWidth < 720 ? "h-[30vh] w-[100%] items-start pt-[2vh]" : "h-[90%] w-[44%] ml-[6%] items-end"}`}>        
            {View}
          </div>     
          {screenWidth < 720 && <button className=' w-[40vw] h-[4vh] mt-4 rounded-xl bg-secondary shadow-[0_1px_1px_2px_rgba(0,0,0,1)] mb-[2vh] font-afacad text-[4vw]'>Want more?</button>}
      </motion.div>
      {screenWidth > 720 ? <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={50}
        screenColor_2={"bg-secondary"}
        screenColor_1={"bg-background_light"}>
          <h1 className={`font-afacad text-[4vw] font-bold text-start px-[14%] pt-[4vw]`}>
          Explore the New Dimensions of Digital Presence with Our Cutting-Edge Website Features!
          </h1>
      </SpringScreen> : <div className={`w-[100%] h-[60vh] px-[${screenWidth < 720 ? 6 :14}%] pt-[10vh] bg-secondary border-t-4  border-solid border-black flex justify-center items-center`}>
        <h1 className='font-afacad text-5xl font-bold text-start'>
          Explore the New Dimensions of Digital Presence with Our Cutting-Edge Website Features!
          </h1>
          </div>}
      <SpringScreen 
        screenHeight_1={10}
        screenHeight_2={screenWidth > 720 && 90}
        screenColor_2={"bg-background_light"}
        screenColor_1={"bg-secondary"}>
          <div className={`flex justify-center  gap-[2vw] px-[${screenWidth < 720 ? 6 :14}%] ${screenWidth < 720 ? "flex-col pt-[6vh] pb-[6vh]" : "flex-row pt-[20vh] pb-[20vh]"}`}>
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
              <h1 className={`font-afacad w-[100%] h-[20%] ${screenWidth < 720 ? "text-3xl": "text-7xl"} font-bold text-start px-[14vw] pb-[10vw] pt-[4vw] text-highlight`}>
              Initial Consultation and Development Strategy:
              </h1> 
              <div className={`flex flex-row w-[100%] ${screenWidth < 720 ? "h-[80%] mt-[10%]" :" h-[94%]"}`}>               
                  <div className={`w-[1vh] h-[80%] bg-background_light rounded-full translate-x-[2.7vw] ${screenWidth < 720 ? "ml-[14%]" : "ml-[30vh]"}`}/>
                  <div className={` w-[100%] flex flex-col justify-between  ${screenWidth < 720 ? "h-[88%] -translate-y-[3vh] -translate-x-[3.6vw]" : "h-[94%] -translate-y-[5.4vh]"}`}>
                    {contentArr.map((el,index) => 
                    <ListPoint 
                    content={el} index={index}/>
                    )}                      
                  </div>        
              </div>
            </div>     
          </SpringScreen> 
          <div className={`w-[100%] h-[30%] px-[${screenWidth < 720 ? 6 : 14}%] bg-background_light`}>      
            <Footer/>
          </div>
    </motion.main>
  );
}

export default memo(Main)
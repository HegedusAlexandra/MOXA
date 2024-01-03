import React from 'react'
import { motion } from "framer-motion";
import Form from '../components/Form';
import CircularMenu from '../components/CircularMenu';
import video from '../assets/icons_images/back.mp4'
import EmptyPage from '../components/EmptyPage'


export default function Contact() {

  const shadow = {boxShadow:" rgba(30, 50, 50, 0.38) 6px 4px 6px 0px, rgba(25, 55, 55, 0.3) -6px -2px 10px 0px"}

  return (<div className='w-[100vw] h-[100vh]'>
    <CircularMenu/>
    <EmptyPage/>
    {/* <motion.main exit={{ opacity: 0 }} className='flex flex-col w-[100%] h-[100vh] bg-black bg-fixed bg-cover overflow-hidden justify-center items-center content-center'>
      <CircularMenu/>
      <video className='w-[100%] bg-white' autoPlay loop controls>
      <source src={video} type="video/mp4"/>
     </video>
    <div className='absolute z-10 flex flex-col w-[90%] h-[70vh] backdrop-blur-md bg-white_op justify-center items-center content-center rounded-2xl'>
      
      <div 
      className='w-[90%] px-6 my-2 bg-background_light rounded-xl -translate-x-[7%]' 
      style={shadow}>
        <motion.h1 className='w-[30%] ml-[1vh] text-cyan-950 text-6xl font-semibold font-montserrat'  whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}>
          LET'S HAVE A TALK!
        </motion.h1>
      </div>
      <div 
      className='w-[103%] px-6 bg-highlight rounded-xl' 
      style={shadow}>
        <p className='w-[100%] ml-[1vh] text-cyan-950 text-md font-semibold font-montserrat'>Email : moxa@protonmail.com</p>
        <p className='w-[100%] ml-[1vh] text-cyan-950 text-md font-semibold font-montserrat'>Tel. : 00 56 499+6+ 599476</p>
      </div>
      <div 
      className='w-[80%] px-6 my-2 pl-3 bg-background_light rounded-xl translate-x-[14%]' 
      style={shadow}>     
        <Form/>
      </div>      
    </div>
    </motion.main> */}</div>
  )
}

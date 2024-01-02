import React from 'react'
import Menu from "../components/Menu"
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import Form from '../components/Form';



export default function Contact() {
  return (
    <motion.main exit={{ opacity: 0 }} className='w-[100%] h-[100vh] bg-gradient-to-r pl-[8%] from-cyan-950 to-cyan-500 overflow-hidden '>
      <Menu screen={"contact"}/>
      <div className='absolute right-0 bottom-0 w-[50%] h-[98%] bg-[url("./assets/icons_images/a.png")] bg-cover bg-center bg-no-repeat overflow-hidden'></div>
      <div className='w-[70%] mx-6 my-2 mt-12 bg-gradient-to-r from-cyan-50 from-50% to-transparent rounded-xl' style={{boxShadow:" rgba(30, 50, 50, 0.38) 6px 2px 6px 0px, rgba(255, 255, 255, 0.3) -6px -2px 16px 0px"}}>
        <motion.h1 className='w-[30%] ml-[1vh] text-cyan-950 text-6xl font-semibold font-montserrat'  whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}>LET'S HAVE A TALK!</motion.h1>
      </div>
      <div className='w-[70%] mx-6 p-1 bg-cyan-50 rounded-xl' style={{boxShadow:" rgba(30, 50, 50, 0.38) 6px 2px 6px 0px, rgba(255, 255, 255, 0.3) -6px -2px 16px 0px"}}>
        <p className='w-[100%] ml-[1vh] text-cyan-950 text-md font-semibold font-montserrat'>Email : moxa@protonmail.com</p>
        <p className='w-[100%] ml-[1vh] text-cyan-950 text-md font-semibold font-montserrat'>Tel. : 00 56 499+6+ 599476</p>
      </div>
      <div className='absolute w-[50%] mx-6 my-2 pl-3 bg-cyan-50 rounded-xl' style={{boxShadow:" rgba(30, 50, 50, 0.38) 6px 2px 6px 0px, rgba(255, 255, 255, 0.3) -6px -2px 16px 0px"}}>     
        <Form/>
      </div>
      <Footer/>
    </motion.main>
  )
}

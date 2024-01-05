import React,{useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {  motion } from "framer-motion";

export default function CircularMenu({screen}) {
const [isVisible,setIsVisible] = useState(false)

  return (
    <div id="circularMenu1" className={`circular-menu ${isVisible && "visible"}`}>
    {isVisible && <div  className={`circular-menu-2`}> </div>}
    {isVisible && <div  className={`circular-menu-3`}> </div>}
    {isVisible && <div className={`circular-menu-4`}> </div>}
        <button     
        onClick={() =>setIsVisible(!isVisible)}    
        className="main-btn" 
        >
            <motion.button  
            whileHover={{ scale: 0.9, rotate: 10 }}
            whileTap={{
            scale: 0.9,
            rotate: -90,
            borderRadius: "100%"
            }} 
            className='fixed z-1001 h-[8vh] w-[8vh]'>
                <div 
                className={isVisible ? 'absolute h-[10%] w-[70%]  mx-[5%] bg-background rounded-lg rotate-45' :  'h-[10%] w-[70%] my-[10%] mx-[5%] bg-background rounded-lg'}/>
                {!isVisible && <div className={screen === "contact" ? 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-background rounded-lg' : 'h-[10%] w-[70%] my-[10%] mx-[5%] bg-background rounded-lg '}/>}
                <div className={isVisible ? 'absolute h-[10%] w-[70%]  mx-[5%] bg-background rounded-lg -rotate-45' : 'h-[10%] w-[70%] my-[10%] mx-[5%] bg-background rounded-lg'}/>      
            </motion.button>
        </button>
        <menu className="items-wrapper">
        <Link to="/" className="menu-item">
         <p className='text-xs'>HOME</p>
        </Link>
        <Link to="/products" className="menu-item">
        <p className='text-xs'>PRODUCTS</p>
        </Link>
        <Link to="/contact" className="menu-item">
        <p className='text-xs'>CONTACT</p>
        </Link>
        <Link to="/blog" className="menu-item">
        <p className='text-xs'>BLOG</p>
        </Link>
      </menu>
   
    </div>


    

    
  )
}

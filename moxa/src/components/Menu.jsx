import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import colors from '../utils/colors'
import moxa_logo from '../assets/icons_images/ec_logo.png'
import arrow from '../assets/icons_images/arrow.svg'
import {  motion } from "framer-motion";

import { useScrollPosition, useScreenWidth } from '../hooks/position'

function Menu() {    
    const scrollY = useScrollPosition();
    const screenWidth = useScreenWidth();

  const edge = (str) => 
      <motion.li  
        whileHover={{ scale: 1.1 ,color:colors.col_neon_green}}
        transition={{ type: "spring", stiffness: 400, damping: 20}} key={str} style={{ color:colors.col_dark_blue,marginLeft:"14%",textTransform:"uppercase",letterSpacing:2,fontWeight:"bold",fontSize:"2vh"
      }}>
        <Link to={str === "home" ? "/" : `/${str}`}>{str}</Link>
      </motion.li>

    return (
    <>    
    <div className={`flex flex-row fixed z-10 top-0 w-full h-[8%] bg-transparent py-[1%] font-montserrat items-center px-[15%]`} style={{ top: scrollY > 0 ? '-100%' : '0', transition: 'top 0.2s ease-in-out' }}>
        <div className='w-[10%] h-[100%]'>
          <img className='h-[100%] border border-black' src={moxa_logo} alt={"logo"}/>
        </div>        
        <ul className={`flex flex-row w-[80%] ml-[10%] text-[${screenWidth < 1050 ? 3 : 2}vw]`}>
            {edge("home")}
            {edge("products")}
            {edge("contact")}
            {edge("blog")}
        </ul>
        <div className='flex w-[10%] h-[80%] justify-center items-center' style={{color:colors.cyan_300}}>{/* f / in /li */}</div>
        <div className='flex w-[10%] h-[80%] justify-end items-center' style={{color:colors.cyan_300}}>  
        EN   
        <img alt='arrow icon' src={arrow} className='w-6 h-6'/>      
        </div> 
    </div>
    </>
  )
}

export default memo(Menu)
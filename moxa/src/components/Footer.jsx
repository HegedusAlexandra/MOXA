import React from 'react'
import moxa_logo from '../assets/icons_images/ec_logo.png'
import {Link} from "react-router-dom"
import { useScreenWidth } from '../hooks/position'

export default function Footer() {
  const screenWidth = useScreenWidth()

  return (
  <footer className={`relative z-10 bottom-0 flex flex-row w-[100%] h-[30vh] bg-transparent py-[1%] font-montserrat justify-between`} >
          <div className={`flex items-center h-[100%] ${screenWidth < 720 ? "w-[30%]" : "w-[10%]"}`}>
              <img className={screenWidth < 720 ? 'h-[8vh]':`h-[10vh]`} src={moxa_logo} alt={"logo"}/>
          </div>        
          <div className={`flex flex-col  h-[100%]  items-start justify-center ${screenWidth < 720 ? "text-[1vh] w-[40%]" : "text-xs pl-[6%] w-[40%]"}`}>              
              <p className={screenWidth < 720 ? "mb-1" : 'mb-4'}>contact : moxa@protonmail.com</p>
              <p className={screenWidth < 720 ? "mb-1" : 'mb-4'}>tel : 0065 87 45988 265</p>
              <h6 className={screenWidth < 720 ? "mb-1" : 'mb-4'}><b>MOXA web solutions</b></h6>
              <p className={screenWidth < 720 ? "mb-1" : 'mb-4'}>Copyright © 2023 Alexandra Hegedüs</p>
          </div>
          <div className={`flex flex-col w-[${screenWidth < 720 ? 20 :10}%] h-[100%] items-start justify-center text-xs ml-[10%]`}>             
                <h1 className='mb-2 font-montserrat font-bold'>SITEMAP</h1>
                <Link to="/" >
                  <p className={screenWidth < 720 ? " text-[1vh] font-montserrat " : 'mb-4 text-[1vh] font-montserrat'}>About us</p>
                </Link>
                <Link to="/" >
                  <p className={screenWidth < 720 ? " text-[1vh] font-montserrat" : 'mb-4 text-[1vh] font-montserrat'}>Gallery</p>
                </Link>
                <Link to="/products" >
                  <p className={screenWidth < 720 ? " text-[1vh] font-montserrat" : 'mb-4 text-[1vh] font-montserrat'}>Products</p>
                </Link>
                <Link to="/contact" >
                  <p className={screenWidth < 720 ? " text-[1vh] font-montserrat" : 'mb-4 text-[1vh] font-montserrat'}>Contact</p>
                </Link>             
        </div>
      
  </footer>
  )
}

import React from 'react'
import moxa_logo from '../assets/icons_images/ec_logo.png'
import {Link} from "react-router-dom"

export default function Footer() {

  return (
  <footer className={`relative z-10 bottom-0 flex flex-row w-[100%] h-[30vh] bg-transparent py-[1%] font-montserrat justify-between`} >
          <div className='flex items-center w-[10%] h-[100%]'>
              <img className=' h-[10vh]' src={moxa_logo} alt={"logo"}/>
          </div>        
          <div className='flex flex-col w-[40%] h-[100%] pl-[6%] items-start justify-center text-xs'>              
              <p className='mb-4'>contact : moxa@protonmail.com</p>
              <p className='mb-4'>tel : 0065 87 45988 265</p>
              <h6 className='mb-4'><b>MOXA web solutions</b></h6>
              <p className='mb-4'>Copyright © 2023 Alexandra Hegedüs</p>
          </div>
          <div className='flex flex-col w-[10%] h-[100%] items-start justify-center text-xs' >
              <div className=' w-[7vw] bg-cyan-900 rounded-md'>
                <h1 className='mb-2 font-montserrat font-bold'>SITEMAP</h1>
                <Link to="/" >
                  <p className='mb-2 font-montserrat'>About us</p>
                </Link>
                <Link to="/" >
                  <p className='mb-2 font-montserrat'>Gallery</p>
                </Link>
                <Link to="/products" >
                  <p className='mb-2 font-montserrat'>Products</p>
                </Link>
                <Link to="/contact" >
                  <p className='mb-2 font-montserrat'>Contact</p>
                </Link>
              </div>
        </div>
      
  </footer>
  )
}

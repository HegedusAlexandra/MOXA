import React, { useState ,useEffect} from 'react'
import colors from '../colors'
import moxa_logo from './icons_images/ec_logo.png'
import {Link} from "react-router-dom"

export default function Footer() {

const [isSitemapEnabled,setIsSitemapEnabled] = useState(false)
/* const [scrollY, setScrollY] = useState(0); */

  const handleScroll = () => {
    /* setScrollY(window.scrollY); */
    setIsSitemapEnabled(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <footer>
    <div className='w-full h-[8%] bg-cyan-900 opacity-20'></div>
      <div className='flex flex-row w-full h-[8%] bg-transparent px-[14%] py-[1%] font-montserrat items-center' >
          <div className='w-[10%] h-[100%]'>
              <img className='h-[100%]' src={moxa_logo} alt={"logo"}/>
          </div>        
          <div className='flex flex-col w-[40%] h-[100%] pl-[6%] items-start text-xs'>
              <h6><b>MOXA web solutions</b></h6>
              <p>Copyright © 2023 Alexandra Hegedüs</p>
          </div>
          <div className='flex flex-col w-[40%] h-[100%] items-start text-xs' >
              <p>contact : moxa@protonmail.com</p>
              <p>tel : 0065 87 45988 265</p>
          </div>
          <div className='flex flex-col w-[10%] h-[100%] items-start text-xs' >
              <button onClick={() => setIsSitemapEnabled(!isSitemapEnabled)} className='w-[100%] h-[80%] rounded-md' style={{boxShadow:"2px 2px 4px #000"}}>
                  SITEMAP
              </button>
              {isSitemapEnabled && <div className=' w-[7vw] bg-cyan-900 rounded-md'>
              <Link to="/" ><p style={{margin:12,color:colors.cyan_50}}>About us</p></Link>
              <Link to="/" ><p style={{margin:12,color:colors.cyan_50}}>Gallery</p></Link>
              <Link to="/products" ><p style={{margin:12,color:colors.cyan_50}}>Products</p></Link>
              <Link to="/contact" ><p style={{margin:12,color:colors.cyan_50}}>Contact</p></Link>
              </div>}
        </div>
    </div>
  </footer>
  )
}

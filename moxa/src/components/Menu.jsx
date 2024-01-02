import React, { useState ,memo,useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import colors from '../colors'
import moxa_logo from '../assets/icons_images/ec_logo.png'
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";

function Menu({screen}) {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen,setIsOpen] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsOpen(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const edge = (str) => 
<motion.li  whileHover={{ scale: 1.1 ,color:"#f7fee7"}}
        transition={{ type: "spring", stiffness: 400, damping: 20}} key={str} style={{ color:colors.cyan_50,marginLeft:"14%",textTransform:"uppercase",letterSpacing:2,fontWeight:"bold",fontSize:"4vh"
}}>
<Link to={str === "home" ? "/" : `/${str}`}>{str}</Link>
</motion.li>

function Box() {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.()
      });
    } else {
      gsap.from(ref.current, {x: 400})
    }
  }, [isPresent, safeToRemove]);

  return <div className={`fixed z-9 w-[100%] h-[100%] right-0 top-0 bg-cyan-900 flew-col pt-[10%] flex flex-col justify-between font-montserrat`} ref={ref}>  
        <ul className={`flex flex-col w-[50%] gap-[6vh] mt-[16vh] text-[${screenWidth < 1050 ? 3 : 2}vw]`}>
            {edge("home")}
            {edge("products")}
            {edge("contact")}
        </ul>
        <div className='w-14 h-10 m-7 border border-black'><img className='h-10 w-14' src={moxa_logo} alt={"logo"}/></div> 
  </div>;
}

    const options = [
        { value: 'EN', label: 'EN' },
        { value: 'IT', label: 'IT' },
        { value: 'HU', label: 'HU' },
      ];

    return (
    <>
    {(screen === "home" && screenWidth > 1050) ? 
    (<header className={`flex flex-row fixed z-10 top-0 w-full h-[8%] bg-transparent py-[1%] font-montserrat items-center px-[15%]`} style={{ top: scrollY > 0 ? '-100%' : '0', transition: 'top 0.2s ease-in-out' }}>
        <div className='w-[10%] h-[100%]'>
          <img className='h-[100%] border border-black' src={moxa_logo} alt={"logo"}/>
        </div>        
        <ul className={`flex flex-row w-[50%] ml-[10%] text-[${screenWidth < 1050 ? 3 : 2}vw]`}>
            {edge("home")}
            {edge("products")}
            {edge("contact")}
        </ul>
        <div className='flex w-[30%] h-[80%] justify-center items-center' style={{color:colors.cyan_300}}>{/* f / in /li */}</div>
        {/* <div className='flex w-[10%] h-[80%] justify-end items-center' style={{color:colors.cyan_300}}>
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            placeholder={options[0].value}
            options={options}
            />
        </div> */}
    </header>) : (
      
    <header className='absolute w-100 h-100 z-20 op-0 right-0' >
    <motion.button 
    onClick={() => setIsOpen(!isOpen)} 
    whileHover={{ scale: 0.9, rotate: 10 }}
    whileTap={{
      scale: 0.9,
      rotate: -90,
      borderRadius: "100%"
    }} 
    className='fixed z-10 h-[8vh] w-[8vh] right-[2vh] top-[1vh]'>
        <div className={isOpen ? 'absolute h-[10%] w-[90%]  mx-[5%] bg-cyan-50 rounded-lg rotate-45' : screen === "contact" ? 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-200 rounded-lg' : 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-950 rounded-lg'}></div>
        {!isOpen && <div className={screen === "contact" ? 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-200 rounded-lg' : 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-950 rounded-lg '}></div>}
        <div className={isOpen ? 'absolute h-[10%] w-[90%]  mx-[5%] bg-cyan-50 rounded-lg -rotate-45' : screen === "contact" ? 'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-200 rounded-lg' :'h-[10%] w-[90%] my-[20%] mx-[5%] bg-cyan-950 rounded-lg'}></div>      
    </motion.button>
    <AnimatePresence>{isOpen ? <Box /> : null}</AnimatePresence></header>
    )}
    </>
  )
}

export default memo(Menu)
import React, {useCallback,useState,useEffect,memo} from 'react'
import Menu from "./Menu"
import Footer from './Footer'
import {motion} from "framer-motion";


function Products() {

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

  const quantity =  (arr) => arr.map((el,index) => <h2 key={el.toString()+"key"+index.toString()} className='text-cyan-800 h-8 w-[100%] rounded-2xl text-center'>{el}</h2>)
  

  return (
    <motion.main exit={{ opacity: 0 }} className='w-[100%] h-[200vh] bg-blue-200'>    
      <Menu screen={"products"}/>
      <div className='w-[100%] h-[100vh] bg-blue-200 bg-[url("./components/icons_images/laptop_color.jpg")] bg-cover bg-center'>
        <div className='absolute w-[100%] h-[1vh] bg-cyan-950'></div>
        <motion.h1 className={`w-[90%] pt-[1vh] pl-[1vh] font-montserrat text-cyan-950 text-[7vh] font-semibold`}  whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}>PROFESSIONAL WEBSITES</motion.h1>
        <div className={` rounded-2xl w-[50%] h-[58%] flex flex-row backdrop-blur-lg bg-white/10`} style={{transform:"translate(50%,14%)"}}>      
          <div className={screenWidth > 1000 && ` rounded-2xl w-[200px] p-2 h-[100%] text-md pt-10 font-semibold flex flex-col justify-between bg-white/50 text-cyan-900 uppercase`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>
            <h2>X changes per year</h2> 
            <h2>Drafts</h2> 
            <h2>Pages</h2>
            <h2>Domain name</h2>  
            <h2>Email address</h2>  
            <h2>Speed optimised</h2>  
            <h2>Responsive</h2>  
            <h2>Multilanguage</h2>  
            <h2>SEO</h2>  
            <h2>Analytics</h2>  
            <h2>Booking options / Webshop</h2>  
            <h2>Admin site</h2>
          </div>
          <div className={screenWidth > 1000 && ` rounded-2xl ml-[2%] w-[600px] h-[100%] flex flex-row`} >           
            <div className={` rounded-2xl w-[100%] h-[100%] flex flex-row justify-between text-cyan-900 uppercase text-xl font-semibold tracking-tighter`}>
            <div className='flex flex-col w-[22%] h-[100%]'>
              <div className={` w-[100%] h-[60%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter rounded-t-2xl`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>STANDARD</h2> 
                <div className='w-[100%] h-[14vh]'>     
                {quantity([1,1,1])} 
                </div>                 
                <div className=' w-[60%]  h-[10vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                        
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[40%] rounded-b-xl`} ></div>
            </div>
            <div className='flex flex-col w-[22%] h-[100%]'>
              <div className={` w-[100%] h-[70%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter rounded-t-2xl`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>Essential</h2> 
                <div className='w-[100%] h-[14vh]'>     
                {quantity([2,3,3])} 
                </div>                 
                <div className=' w-[60%] h-[10vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                        
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[30%] rounded-b-xl`} ></div>
            </div>
            <div className='flex flex-col w-[22%] h-[100%]'>
              <div className={` w-[100%] h-[80%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter rounded-t-2xl`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>GROW</h2> 
                <div className='w-[100%] h-[14vh]'>     
                {quantity([4,6,5])} 
                </div>                 
                <div className=' w-[60%]  h-[10vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                       
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[20%] rounded-b-xl`} ></div>
            </div>
            <div className='flex flex-col w-[22%] h-[100%]'>
              <div className={`rounded-2xl w-[100%] h-[100%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>PREMIUM</h2> 
                <div className='w-[100%] h-[14vh]'>     
                {quantity([8,"+","+"])} 
                </div>                 
                <div className=' w-[60%]  h-[10vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                       
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[0%] rounded-b-xl`} ></div>
            </div>                      
            </div>    
          </div>
        </div>
      </div>
      <div className='absolute w-[100%] h-[1vh] bg-cyan-950'></div> 
      <div className='w-[100%] h-[100vh] p-[2vh] bg-blue-200 bg-[url("./components/icons_images/mobile_color.jpg")] bg-cover bg-center flex flex-row'>
        <motion.h1 className='w-[20%] ml-[1vh] font-montserrat text-cyan-950 text-6xl font-semibold'  whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}>AWESOME MOBILE APPS</motion.h1>
        <div className={` rounded-2xl ml-[2%] mt-[8%] w-[80%] h-[74%] flex flex-row justify-start`} >
        <div className={` rounded-2xl w-[18%] p-2 h-[70%] mt-[9%] text-md font-semibold flex flex-col justify-between bg-white/50 text-cyan-900 uppercase`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>
            <h2>Email address</h2>  
            <h2>Speed optimised</h2>  
            <h2>Responsive</h2>  
            <h2>Multilanguage</h2>  
            <h2>Android / IOS</h2>  
            <h2>Landing page leads to store</h2>  
            <h2>Booking options / Webshop / Chat / Fileupload</h2>  
            <h2>Admin site</h2>     
          </div>                                          
            <div className={` rounded-2xl w-[20%] h-[80%] ml-[8%] mt-[5%] flex flex-row text-cyan-900 uppercase text-xl font-semibold tracking-tighter backdrop-blur-lg bg-white/10 gap-[1%]`}>                                                  
            <div className='flex flex-col w-[48%] h-[100%] mr-[4%]'>
              <div className={`rounded-t-2xl w-[100%] h-[60%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>BASIC</h2> 
                <div className='w-[100%] h-[16vh]'>     
                {quantity([8,"+","+"])} 
                </div>                 
                <div className='w-[60%] h-[8vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                       
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[40%] rounded-b-xl`} ></div>
            </div>                              
            <div className='flex flex-col w-[48%] h-[100%]'>
              <div className={`rounded-2xl w-[100%] h-[100%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 h-10 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>ELITE</h2> 
                <div className='w-[100%] h-[16vh]'>     
                {quantity([8,"+","+"])} 
                </div>                 
                <div className=' w-[60%] h-[8vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                       
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[0%] rounded-b-xl`} ></div>
            </div>                                               
            </div>    
          </div>
      </div>                         
      <Footer/>
    </motion.main>
  )
}

export default memo(Products)
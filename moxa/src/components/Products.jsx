import React, {useState,useEffect,memo} from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import Card from './Card';
import SpringScreen from './SpringScreen';

import '../styles.css';

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

  return (
    <div className='flex flex-row justify-center'>
           <SpringScreen 
            screenHeight_1={10}
            screenHeight_2={80}
            screenColor_2={"bg-sky-600"}
            screenColor_1={"bg-lime-300"}/>
          <Card title="Card Title" content="This is the card content." />
    {/* <motion.main exit={{ opacity: 0 }} className='w-[100%] h-[200vh] bg-blue-200'>    
      <Menu screen={"products"}/>
      <div className='absolute w-[100%] h-[1vh] bg-cyan-950'></div>
      <div className='w-[100%] h-[100vh] bg-blue-200 bg-[url("./components/icons_images/laptop_color.jpg")] bg-cover bg-center'>        
        <motion.h1 className={`w-[80%] pt-[1vh] pl-[1vh] font-montserrat text-cyan-950 text-[5vh] font-semibold`}  whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}>PROFESSIONAL WEBSITES</motion.h1>{screenWidth > 500 && 
        <div className={` rounded-2xl w-[${(screenWidth < 800) ? 90 : (screenWidth < 1000) ? 80 : (screenWidth < 1100) ? 58 : 50}%] h-[58%] flex flex-row backdrop-blur-lg bg-white/10 justify-between`} style={{transform:screenWidth < 800  ? "translate(6%,14%)" : screenWidth < 1000  ? "translate(12%,14%)" : screenWidth < 1100  ?"translate(36%,14%)" : "translate(50%,14%)"}}>
          {screenWidth > 500 && offer_col()}
          <div className={` rounded-2xl ml-[2%] w-[600px] h-[100%] flex flex-row`} >           
            <div className={` rounded-2xl w-[100%] h-[100%] flex flex-row justify-between text-cyan-900 uppercase text-xl font-semibold tracking-tighter`}>
            {first_col()}
            {second_col()}
            {third_col()}
            {forth_col()}                 
            </div>    
          </div>
        </div>}
        {screenWidth < 500 &&  <div className='w-[100%] h-[100%]'>          
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>{offer_col()}{first_col()}</SwiperSlide>
            <SwiperSlide>{offer_col()}{second_col()}</SwiperSlide>
            <SwiperSlide>{offer_col()}{third_col()}</SwiperSlide>
            <SwiperSlide>{offer_col()}{forth_col()}</SwiperSlide>
          </Swiper></div>}
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
                <h2 className='text-cyan-800 bg-teal-50 8 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>BASIC</h2> 
                <div className='w-[100%] h-[16vh]'>     
                {quantity([8,"+","+"])} 
                </div>                 
                <div className='w-[60%] h-[8vh] m-[20%] mb-[0%] bg-[url("./components/icons_images/yes.png")] bg-cover bg-center'></div>                       
              </div>
              <div className={`bg-red-500 opacity-50 w-[100%] h-[40%] rounded-b-xl`} ></div>
            </div>                              
            <div className='flex flex-col w-[48%] h-[100%]'>
              <div className={`rounded-2xl w-[100%] h-[100%] bg-white/50 flex flex-col justify-start text-cyan-900 uppercase text-md font-semibold tracking-tighter`} style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>   
                <h2 className='text-cyan-800 bg-teal-50 8 w-[100%] rounded-2xl px-2 mb-2' style={{boxShadow:"rgba(0, 0, 0, 0.12) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 4px 7px -3px, rgba(0, 0, 0, 0.08) 2px -3px 0px inset,rgba(0, 0, 0, 0.10) 1px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px"}}>ELITE</h2> 
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
    </motion.main> */}
    </div>
  )
}

export default memo(Products)
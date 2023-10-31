import './index.css';
import React from "react";
import Menu from './components/Menu';
import bg_color_abs from './components/icons_images/bg_color_abs.jpg'

export default function App() {

  return (   
    <div className="w-full h-full bg-cyan_50 flex flex-col overflow-x-hidden justify-center items-center">    
      <Menu screen={"home"}/>  
      <div className='w-[140%] h-[144vh] overflow-hidden rounded-b-[46%] px-[20%] pt-[2%]'>
        <img className='w-[100%] object-center' src={bg_color_abs} alt="bg_color_abs"/>
      </div>      
      <div className='bg-cyan_50 w-full h-[100vh]'></div>
    </div>
  );
}

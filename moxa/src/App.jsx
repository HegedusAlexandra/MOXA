import './index.css';
import React,{useState,useEffect} from "react";
import Menu from './components/Menu';
import bg_color_abs from './components/icons_images/bg_color_abs.jpg'
import Footer from './components/Footer';
import CustomComponent from './components/CustomComponent';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (   
    <div className="w-full h-full bg-cyan_50 flex flex-col overflow-x-hidden justify-center items-center">    
      <Menu screen={"home"}/>  
      <div className='w-[140%] h-auto overflow-hidden rounded-b-[50%] px-[20%] pt-[2%]'
        style={{ top: scrollY > 0 ? '-100%' : '-2%', transition: 'top 0.2s ease-in-out' }}>
        <img className='w-[100%] object-center' src={bg_color_abs} alt="bg_color_abs"/>        
      </div>
      <CustomComponent className={`w-[100%] h-[60%] top-[20%] px-[14%] absolute`} 
      style={{boxShadow:"0px 0px 0px #000"}}
      children={<>
      {/* w-72 h-100 */}
                <CustomComponent 
                className={`w-[46%] h-[14%] top-[20%] left-[30%] p-[1%] bg-cyan_300 absolute`} 
                children={<h1 className='text-3xl font-montserrat text-cyan_950 font-semibold'>MOXA web solution</h1>}
                />
                <CustomComponent 
                className={`w-[62%] h-min-[50%] top-[36%] bg-teal_50 absolute`} 
                children={<><p className='w-[65%] h-[40%] text-sm font-montserrat p-[2%]'>At MOXA, we understand that your online presence is more than just a website. It's your digital identity, your business's face to the world. That's why we're here to provide you with a trustworthy and reliable partner in web development.
                </p><p className='w-[50%] h-[60%] text-sm font-montserrat p-[2%]'>
                Our commitment goes beyond just creating websites; it's about turning your dreams and ideas into tangible, functional, and aesthetically pleasing digital solutions. We are dedicated to helping you achieve your online objectives with ease and precision.
                </p></>}
                />
                <CustomComponent 
                className={`w-[9.5%] h-[90%] top-[20%] right-[14%] bg-gradient-to-b from-teal_50 to-transparent absolute`} 
                children={<><h1 className='hidden'>Professional Website Development Services</h1></>}
                />
                <CustomComponent 
                className={`w-[9.5%] -bottom-[10%] left-[14%] bg-transparent absolute p-[1%]`} 
                children={<><p className='font-montserrat text-sm'>Scroll for more v</p></>}
                />
                </>}
      />
            <div className='bg-teal_50 w-full h-[100vh]'>
               <CustomComponent 
                className={`w-[72%] h-min-[50%] ml-[14%] -mt-[10%] bg-teal_50`} 
                scrollPos={200}
                reveal={true}
                children={<><p className='text-sm font-montserrat p-[1%]'>At MOXA, we understand that your online presence is more than just a website. It's your digital identity, your business's face to the world. That's why we're here to provide you with a trustworthy and reliable partner in web development.
                </p><p className='text-sm font-montserrat p-[1%]'>
                Our commitment goes beyond just creating websites; it's about turning your dreams and ideas into tangible, functional, and aesthetically pleasing digital solutions. We are dedicated to helping you achieve your online objectives with ease and precision.
                </p><p className='text-sm font-montserrat p-[1%]'>
                When you choose MOXA, you're not just hiring a web development company; you're enlisting a team of experienced professionals who are passionate about bringing your vision to life. We take pride in our ability to listen and understand your unique goals, ensuring that we tailor our services to meet your specific needs.
                </p><p className='text-sm font-montserrat p-[1%]'>
                What sets us apart is our unwavering dedication to providing you with the knowledge and attention you deserve. We know that navigating the digital landscape can be complex, but with us by your side, it becomes a seamless journey. Our experts are always ready to assist you, whether you have questions, need advice, or require technical support.
                </p><p className='text-sm font-montserrat p-[1%]'>
                So, let's embark on this digital adventure together. Your online success is not only achievable but well within reach. At MOXA, we're here to guide you every step of the way, delivering web development solutions that not only meet but exceed your expectations. Welcome to a new era of online excellence.</p></>}
                />
            </div>
      <Footer/>
    </div>
  );
}

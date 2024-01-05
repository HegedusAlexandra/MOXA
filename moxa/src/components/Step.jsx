import React,{useEffect} from 'react'
import { useAnimation } from "framer-motion"
import { variants } from './animations';
import { useInView } from 'react-intersection-observer';

function Step({el,index}) {
    const lines = el.split(',').map(line => line.trim());
    const controls = useAnimation();
    const [ref, inView] = useInView(); 

    useEffect(() => {
        if (inView) {
          controls.start('visibleCard');
        }
      }, [controls, inView]);

    return (
    <div
        ref={ref}
        initial="hiddenList"
        animate={controls}
        variants={variants}
    >
        {index === 0 && <div className="step-container" >
            <div className={`w-[30vw] h-[20vh] bg-background_light rounded-br-[10vh] p-[4vh]`}/>       
        </div>}
        <div className="step-container">       
            <div className={`w-[30vw] h-[${index === 4 ? 80 : 100}vh] bg-background_light ${index === 4 ? "rounded-tr-[10vh]" : "rounded-r-[10vh]"} p-[2vh] pt-[10vh]`}>
                {lines.map((line, lineIndex) => (
            <h1 key={lineIndex} className='text-headline text-[1.5vw]'>{line}</h1>
            ))} 
            </div>       
        </div>
      </div>
    );
}

export default Step
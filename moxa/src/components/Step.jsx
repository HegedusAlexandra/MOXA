import React,{useEffect} from 'react'
import { useAnimation } from "framer-motion"
import { variants } from './animations';
import { useInView } from 'react-intersection-observer';

function Step({el,index}) {
    const lines = el.headlines.map(line => line.trim());
    const content = el.desc
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
        className='flex flex-row bg-highlight shadow-[0_4px_4px_rgba(0,0,0,0.9)]'
    >
      <div>                   
        <div className={`w-[30vw] h-[90vh] my-[5vh] bg-background_light flex flex-col items-center justify-start shadow-[0_4px_4px_rgba(0,0,0,0.9)] -translate-y-[2vh]`}>
          <h1 className='text-headline text-[18vw]'>{index+1}</h1>
          <div>
            {lines.map((line, lineIndex) => (
            <h1 key={lineIndex} className='text-headline text-[1vw] font-montserrat'>{line}</h1>
        ))} 
          </div>
        </div>
      </div>
      <div> 
          <div className={`w-[60vw] h-[100vh] pt-[10vh]`}>
            {content.map((el) =>
            <p className='text-[4vh] px-[4vw] pb-[3vw] font-afacad'>
            {el}
            </p>)}
          </div>
      </div> 
    </div>
    );
}

export default Step
import React, {memo,useEffect} from 'react'
import { motion,useAnimation } from "framer-motion"
import { variants } from './animations'
import { useScreenWidth } from '../hooks/position'

function EmptyPage() {
    const textControls = useAnimation();
    const shadowControls = useAnimation();
    const screenWidth = useScreenWidth()

    useEffect(() => {
       textControls.start('visible')
       shadowControls.start('visible')
    },[shadowControls, textControls])

    const left = () => textControls.start("ascending")
  
  return (
    <div className='w-[100%] h-[100%] bg-gradient-to-r from-amber1 via-sky2  to-sky3 overflow-hidden'>
        <motion.h2 
        animate={textControls}
        variants={variants} 
        initial={["initial"]}>
            under construction
        </motion.h2>
        <motion.div
        animate={shadowControls}
        variants={variants} 
        initial={["initial"]}
        ></motion.div>
        {screenWidth > 720 ? <div onClick={left} className="absolute z-2 w-[100%] h-[100%] bg-desert bg-no-repeat bg-cover bg-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] bg-fixed"></div> : <div onClick={left} className="absolute z-2 w-[100%] h-[110vh] bg-desert_mobile bg-no-repeat bg-cover bg-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] bg-fixed "></div>}
    </div>
  )
}

export default memo(EmptyPage)
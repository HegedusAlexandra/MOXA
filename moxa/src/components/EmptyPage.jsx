import React, {memo,useEffect} from 'react'
import { motion,useAnimation } from "framer-motion"
import { variants } from './animations'

function EmptyPage() {
    const textControls = useAnimation();
    const shadowControls = useAnimation();

    useEffect(() => {
       textControls.start('visible')
       shadowControls.start('visible')
    },[textControls])

    const left = () => textControls.start("ascending")
  
  return (
    <div className='w-[100%] h-[100%] bg-gradient-to-r from-amber-100 via-sky-200  to-sky-300'>
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
        <div onClick={left} className="absolute z-2 w-[100%] h-[100%] bg-desert bg-no-repeat bg-cover bg-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] bg-fixed"></div>
    </div>
  )
}

export default memo(EmptyPage)
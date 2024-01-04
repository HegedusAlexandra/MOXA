import React,{memo} from 'react'

function ListPoint({content}) {
  return (
    <div className='h-[10vh] flex flex-row justify-between'>
        <div className='flex justify-center items-center w-[10vh] h-[10vh] border-solid border-2 border-background rounded-full -translate-x-[5.5vh]'>
        <div className='w-[2vh] h-[2vh] bg-highlight rounded-full'/>
        </div> 
        <div className='w-[90vh] h-[10vh] flex items-center text-white font-montserrat mt-2 rounded-full -translate-y-2'>{content}</div>                      
    </div>
  )
}

export default memo(ListPoint)
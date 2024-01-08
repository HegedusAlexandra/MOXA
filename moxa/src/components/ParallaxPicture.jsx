/* eslint-disable no-lone-blocks */
import React from 'react'

export default function ParallaxPicture({pictureUrl}) {
 {/* 
 steps:
 1# add image path to tailwind.config.js
 2# pass the name at the parent:

<ParallaxPicture pictureUrl={'name_comes_here'}/> 
*/}

  return (
    <div className={`w-[100%] h-[20vh] bg-no-repeat bg-cover bg-center bg-${pictureUrl}`}>fogalmam nincs</div>
  )
}

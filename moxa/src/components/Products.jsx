import React from 'react'
import Menu from "./Menu"
import Footer from './Footer'

export default function Products() {
  return (
    <div className='w-full h-full bg-blue-200'>
      <Menu screen={"products"}/>
      <Footer/>
    </div>
  )
}

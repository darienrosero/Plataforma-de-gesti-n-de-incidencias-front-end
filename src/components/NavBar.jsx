import React from 'react'
import logo from '../assets/logo.png'
import { useLocation } from 'wouter'

const NavBar = ({text, onClick}) => {
    const [location, setLocation] = useLocation()
  return (
    <nav className='flex justify-between items-center mx-8 my-2 font-jost'>
      <div>
        <img src={logo} className='w-[74px]' />
      </div>
      <div onClick={onClick} className=' bg-purple-custom flex items-center justify-center rounded-md w-28 h-8 cursor-pointer'>
      <p className='text-white'> {text} </p>
      </div>
    </nav>
  )
}

export default NavBar

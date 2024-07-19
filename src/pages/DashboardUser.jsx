import React, { useContext } from 'react'
import add from '../assets/add.png'
import logo from '../assets/logo.png'
import SearchBar from '../components/SearchBar'
import { useLocation } from 'wouter'
import { UseContext } from '../services/UseContext'
import MainCards from '../components/MainCards'

const DashboardUser = () => {
  const [location, setLocation] = useLocation()
  const { logout } = useContext(UseContext)

  const handelelogout = () => {
    logout()
  }
  return (
    <>

      <div className='flex font-jost'>
        <nav className='w-20 h-screen bg-purple-custom flex flex-col justify-between'>

          <div className='flex flex-col justify-between items-center h-screen'>

            <div className='flex flex-col h-[300px] justify-between items-center text-white'>

              <div className=''><img src={logo} className='w-20 ' /></div>

              <div className='bg-ligth-purple w-16 h-16 rounded-lg flex justify-center items-center text-[65px] cursor-pointer '><img src={add} /></div>
              <div className='bg-ligth-purple w-16 h-16 rounded-lg flex justify-center items-center p-2 cursor-pointer'>Reports</div>

            </div>

            <div onClick={handelelogout} className=' bg-ligth-purple flex items-center justify-center mb-3 rounded-md w-16 h-8 cursor-pointer'>
              <p className='text-white'> Logout </p>
            </div>

          </div>
        </nav>

        <div className="flex-1 flex flex-col">
          <SearchBar />
          <div className='flex-1 p-4 bg-gray-50'>
            <MainCards />
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardUser

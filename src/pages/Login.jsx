import latter from '../assets/icons8-letter.gif'
import lock from '../assets/icons8-lock.gif'
import logo from '../assets/logo.png'

import { useLocation } from 'wouter'
import { useContext } from 'react'
import { UseContext } from '../services/UseContext'
import DashboardAdmin from './DasboardAdmin'
import DashboardUser from './DashboardUser'


export default function Login() {

  const { login } = useContext(UseContext)
  const [location, setLocation] = useLocation()

  const handleLogin = async (e) => {
    e.preventDefault()

    const user_name = e.target[0].value
    const password = e.target[1].value

    try {
      await login(user_name, password)
      const token = localStorage.getItem('token')
      const decoded = jwtDecode(token)
      if (decoded.rol === 1) {
        return <DashboardAdmin />
    } else {
        return <DashboardUser />
    }
    } catch (error) {
      console.log(error.response?.data?.message);
    }

  }

  return (
    <>
      <div className=' right-0 left-0 mx-auto mt-28 flex flex-col justify-between w-[373px] h-[400px] gap-2 p-8 border border-gray-400 rounded-2xl font-jost '>
        <div className='flex gap-4'>
          <img onClick={() => setLocation('/')} src={logo} className='w-14 cursor-pointer' />
          <h1 className='text-[25px] font-bold '>Login</h1>
        </div>

        <form onSubmit={handleLogin} >
          <div className='flex border border-gray-400 h-[48px] items-center gap-3 p-3 rounded-lg  '>
            <img src={latter} className='w-[20px] h-[20px] ' />
            <input type="text" placeholder="Email" className='border-none w-[100%] focus:outline-none' />
          </div>

          <div className='flex border border-gray-400 h-[48px] items-center gap-3 p-3 mt-4 rounded-lg '>
            <img src={lock} className='w-[20px] h-[20px] ' />
            <input type="password" placeholder="Password" className='border-none w-[100%] focus:outline-none' />
          </div>

          <button typeof='submit' className='text-[14px] text-white bg-purple-custom w-full mt-4 h-[38px] rounded-lg '>
            Login
          </button>
        </form>

        <div className='flex justify-center'>
          <p className='text-[14px] flex'>
            Don’t have an account yet?
          </p>
          <p onClick={() => setLocation('/register')} className='text-sky-custom cursor-pointer text-blue-sky-custom'>
            Register
          </p>
        </div>
      </div>
    </>
  )
}

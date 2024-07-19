import React from 'react'
import { useLocation } from 'wouter'
import NavBar from '../components/NavBar'
import imgBagraund from '../assets/bagraund.jpg'

const Leanding = () => {
  const [location, setLocation] = useLocation()
  return (
    <>
      <NavBar text={'Login'} onClick={() => setLocation('/login')} />
      <main className='bg-slate-50 w-screen h-screen font-jost'>

        <div className='absolute'>
          <img src={imgBagraund} className=' w-[600px] ml-20 pt-10 ' />
        </div>

        <div className='absolute right-10 left-70 mx-auto mt-[75px] w-[490px]'>
          <p className='text-[44px]  p-5 font-bold '>
            La solucion a unos cuantos cliks.
          </p>
          <p className='text-gray-500'>
            Nuestra plataforma facilita la comunicación y el mantenimiento en edificios, permitiendo a los residentes reportar y seguir incidencias fácilmente. Garantizamos una administración eficiente y una mejor calidad de vida para todos.
          </p>

          <div className=' flex p-4 gap-[32px] '>
            <button className='w-[175px] bg-purple-custom text-white rounded-md py-2 '>
              Comienza sin costo
            </button>

            <button onClick={() => setLocation('/register')} className='w-[175px] bg-purple-custom text-white rounded-md py-2 '>
              Registrase
            </button>
          </div>

        </div>

      </main>
    </>
  )
}

export default Leanding

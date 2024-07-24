import logo from '../assets/logo.png'

import { useLocation } from 'wouter'
import { useContext } from 'react'
import { UseContext } from '../services/UseContext'


export default function Register() {

  const { register } = useContext(UseContext)
  const [location, setLocation] = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const last_name = formData.get('lastName');
    const user_name = formData.get('userName');
    const password = formData.get('password');
    const rol_id = formData.get('rolId');
    const departamento = formData.get('departamento');

    if (!name || !last_name || !user_name || !password || !rol_id || !departamento) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    const rolIdNumber = rol_id === 'administrador' ? 1 : 2;

    try {
      await register(name, last_name, user_name, password, rolIdNumber, departamento);
      setLocation('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  }

  return (
    <>
      <div className=' right-0 left-0 mx-auto mt-10 flex flex-col justify-between w-[490px] h-[540px] gap-2 p-8 border border-gray-400 rounded-2xl font-jost '>
        <div className='flex gap-4'>
          <img onClick={() => setLocation('/')} src={logo} className='w-14 cursor-pointer' />
          <h1 className='text-[25px] font-bold '>Registrate</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-[320px]'>
          <Info
            text1={'Nombres:'}
            text2={'Apellidos'}
            name1="name"
            name2="lastName"
            placeholder1={'Nombres'}
            placeholder2={'Apellidos'}
          />
          <Info
            text1={'Nombre de usuario:'}
            text2={'Contraseña'}
            name1="userName"
            name2="password"
            placeholder1={'Nombre de usuario'}
            placeholder2={'Contraseña'}
            type2={'password'}
          />
          <Info
            text1={'Tipo de cuenta:'}
            text2={'Departamento'}
            name1="rolId"
            name2="departamento"
            placeholder1={'Administrador o Residente'}
            placeholder2={'Departamento'}
          />

          <button type="submit" className='text-[14px] text-white bg-purple-custom w-full mt-4 h-[38px] rounded-lg'>
            Crear Cuenta
          </button>
        </form>

        <div className='flex justify-center'>
          <p className='text-[14px] flex'>
            No mas estres por los problas del hogar!!
          </p>
        </div>
      </div>
    </>
  )
}


const Info = ({ text1, text2, name1, name2, placeholder1, placeholder2, type1 = 'text', type2 = 'text' }) => (
  <div className='flex justify-between gap-4'>
    <div className='flex flex-col h-[48px] w-[200px] gap-3 rounded-lg  '>
      <label htmlFor={name1}>{text1}</label>
      <input
        type={type1}
        id={name1}
        name={name1}
        placeholder={placeholder1}
        className='border-b pl-2 border-gray-400 focus:outline-none'
      />
    </div>

    <div className='flex flex-col h-[48px] w-[200px] gap-3 rounded-lg '>
      <label htmlFor={name2}>{text2}</label>
      <input
        type={type2}
        id={name2}
        name={name2}
        placeholder={placeholder2}
        className='border-b pl-2 border-gray-400 focus:outline-none'
      />
    </div>
  </div>
)

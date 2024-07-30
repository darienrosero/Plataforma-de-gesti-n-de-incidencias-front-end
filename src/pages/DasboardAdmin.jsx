import React, { useContext, useState } from 'react'
import { UseContext } from '../services/UseContext'
import add from '../assets/add.png'
import logo from '../assets/logo.png'
import SearchBar from '../components/SearchBar'
import Report from './Report'
import MyReports from '../components/MyReports'
import MainCardsAdmin from '../components/MainCardsAdmin'
import hotel from '../assets/hotel-exterior-2004871948.jpg'

const DashboardAdmin = () => {
  const { logout } = useContext(UseContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState('welcome');
  const { createReport } = useContext(UseContext)

  const [formData, setFormData] = useState({
    section: '',
    description: '',
    location: '',
    img: ''

  });

  const sectionMapping = {
    'Edificio': 1,
    'Carpinteria': 2,
    'Plomeria': 3,
    'Electricidad': 4,
    'Otros': 5
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModal = () => setIsModalOpen(true);

  const handelelogout = () => {
    logout()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sectionId = sectionMapping[formData.section];
      const reportData = {
        ...formData,
        section: sectionId
      };
      await createReport(reportData);
      setIsModalOpen(false);
      setFormData({
        section: '',
        description: '',
        location: '',
        img: ''
      });
    } catch (error) {
      if (error.response) {
        console.error("Error del servidor:", error.response.data.message);
      } else {
        console.error("Error al crear el reporte:", error);
      }
    }
  };

  const renderView = () => {
    switch (view) {
      case 'myReports':
        return < MyReports />
      case 'mainCards':
        return <MainCardsAdmin />
      default:
        return <MainCardsAdmin />;
    }
  }

  return (
    <>

      <div className='flex font-jost'>
        <nav className='w-20 h-screen text-white bg-purple-custom flex flex-col justify-between'>
          <div className='flex flex-col justify-between items-center h-screen'>
            <div className='flex flex-col h-[300px] justify-between items-center'>
              <div onClick={() => setView('mainCards')} className='cursor-pointer'><img src={logo} className='w-20 ' /></div>
              <div onClick={openModal} className='bg-ligth-purple w-16 h-16 text-[10px] rounded-lg flex flex-col justify-center items-center cursor-pointer '><img src={add} className='w-[50px] ' /> </div>
              <Report isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit}>
                  <Data
                    placeholder={'Seleccione el tipo de incidencia'}
                    text={'Tipo de incidencia'}
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    options={Object.keys(sectionMapping)}
                  />
                  <Data
                    placeholder={'Ingrese una descripcion del problema'}
                    text={'Descripcion'}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange} />
                  <Data
                    placeholder={'Ubicacion'}
                    text={'Donde se encontro el problema'}
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange} />
                  <Data
                    placeholder={'Imagenes de evidenvia'}
                    text={'Evidencias'}
                    name="img"
                    value={formData.img}
                    onChange={handleInputChange} />
                  <div>
                    <button type='submit' className='m-6 bg-ligth-purple hover:bg-purple-custom text-white w-[200px] p-2 rounded-2xl'>
                      Enviar Reporte
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </Report>
              <div onClick={() => setView('myReports')} className='bg-ligth-purple w-16 h-16 rounded-lg flex justify-center p-2 cursor-pointer'><p className='text-center'>Mis Reportes</p></div>
            </div>
            <div onClick={handelelogout} className=' bg-ligth-purple flex items-center justify-center mb-3 rounded-md w-16 h-8 cursor-pointer'>
              <p className='text-white'> Logout </p>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col">
          <img src={hotel} className='h-[605px] relative ' />
          <SearchBar />
          <div className='flex-1 absolute p-4 mt-14 '>
            {renderView()}
          </div>
        </div>
      </div>

    </>
  )
}

const Data = ({ text, placeholder, name, value, onChange, options }) => (
  <div className="flex flex-col mb-3">
    <label className="text-xl font-semibold text-gray-700">{text}</label>
    {name === 'section' ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='border-b-2 border-gray-300 focus:outline-none rounded-md bg-inherit px-3 py-1'
      >
        <option value="">Seleccione una sección</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        className='border-b-2 border-gray-300 focus:outline-none rounded-md bg-inherit px-3 py-1'
      />
    )}
  </div>
);

export default DashboardAdmin


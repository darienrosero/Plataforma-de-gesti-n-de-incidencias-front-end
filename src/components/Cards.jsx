import React from 'react'


const Cards = ({ id, status_report, date, section, description, location, img, edit, elimate, onEliminate }) => {

  if (status_report === null || status_report === 1) {
    status_report = 'Pendiente'
  } else if (status_report === 2) {
    status_report = 'En proceso'
  } else if (status_report === 3) {
    status_report = 'Finalizado'
  }

  const handleEliminate = () => {
    if (onEliminate) {
      onEliminate(id);
    }
  }

  return (
    <div className='w-[285px] h-[220px] bg-ligth-purple bg-opacity-35 backdrop-blur-lg rounded-2xl p-4 text-white overflow-y-auto '>
      <div className='w-[240px] flex justify-end bg-transparent absolute gap-3 cursor-pointer '><img src={elimate} onClick={handleEliminate} className='w-6' /> <img src={edit} className='w-6 cursor-pointer' /></div>
      <div className='mt-3'>
        <h1>Estado: {status_report} </h1>
        <p>fecha de informe: {date} </p>
        <p>Tipo de incidencia: {section} </p>
        <p>Descripcion: {description} </p>
        <p>Lugar de la incidencia: {location} </p>
      </div>
      <div>
        <p>
          Imagenes: {img}
        </p>
      </div>
    </div>
  )
}

export default Cards

import React from 'react'


const Cards = ({status_report, date, section, description, location, img}) => {
  
  if (status_report === null || status_report === 1 ) {
    status_report = 'Pendiente'
  } else if (status_report === 2) {
    status_report = 'En proceso'
  } else if (status_report === 3) {
    status_report = 'Finalizado'
  }

  return (
    <div className='w-[285px] h-[200px] bg-ligth-purple bg-opacity-35 backdrop-blur-lg rounded-xl cursor-pointer p-4 text-white overflow-y-auto '>
      <h1>Estado: {status_report} </h1>
      <p>fecha de informe: {date} </p>
      <p>Tipo de incidencia: {section} </p>
      <p>Descripcion: {description} </p>
      <p>Lugar de la incidencia: {location} </p>
      <div>
        <p>
            Imagenes: {img} 
        </p>
      </div>
    </div>
  )
}

export default Cards

import React from 'react'

const Cards = ({status_report, date, section, description, location, img}) => {
  return (
    <div className='w-[285px] h-[200px] bg-slate-400 rounded-xl cursor-pointer p-4 '>
      <h1>Estado:{status_report} </h1>
      <p>fecha de informe:{date} </p>
      <p>Tipo de incidencia:{section} </p>
      <p>Descripcion:{description} </p>
      <p>Lugar de la incidencia:{location} </p>
      <div>
        <p>
            Imagenes:{img} 
        </p>
      </div>
    </div>
  )
}

export default Cards

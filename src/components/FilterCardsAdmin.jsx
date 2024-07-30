import React, { useContext, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { UseContext } from '../services/UseContext';
import Cards from './Cards';

const FilterCardsAdmin = ({ filter }) => {
  const { report, allReports } = useContext(UseContext)

  useEffect(() => {
    allReports();
  }, []);

  const filteredReports = filter === 'all'
    ? report
    : report.filter(item => item.section === parseInt(filter));

    const sectionNames = {
      1: 'Edificio',
      2: 'Carpinteria',
      3: 'Plomeria',
      4: 'Electricidad',
      5: 'Otros'
  };

  return (
    <div className='w-[770px] h-[450px] bg-gray-700 bg-opacity-15 backdrop-blur-md justify-between flex-wrap grid grid-cols-2 gap-4 rounded-r-xl rounded-b-xl p-4 overflow-y-auto'>
      {filteredReports && filteredReports.length > 0 ? (
        filteredReports.map((item, index) => (
          <Cards
            key={index}
            status_report={item.status_report}
            date={format(parseISO(item.date), 'dd/MM/yyyy')}
            section={sectionNames[item.section] || 'Unknown'}
            description={item.description}
            location={item.location}
            img={item.img}
          />
        ))
      ) : (
        <p>No hay reportes disponibles para esta sección.</p>
      )}
    </div>
  )
}

export default FilterCardsAdmin;
import Cards from './Cards'
import { format, parseISO } from 'date-fns'
import React, { useContext, useEffect } from 'react'
import { UseContext } from '../services/UseContext';
import ShortCut from './ShortCut';

const MyReports = () => {
  const { report, allReports } = useContext(UseContext)
  useEffect(() => {
    allReports();
  }, []);

  return (
    <div className='w-[100%] bg-transparent h-[100%] rounded-xl font-jost '>

      <ShortCut />

      <div className='w-100% h-[450px] bg-white justify-between flex-wrap grid grid-cols-4 gap-4 rounded-r-xl rounded-b-xl p-4 overflow-y-auto  '>
        {report && report.length > 0 ? (
          report.map((item, index) => (
            <Cards
              key={index}
              status_report={item.status_report}
              date={format(parseISO(item.date), 'dd/MM/yyyy')}
              section={item.section}
              description={item.description}
              location={item.location}
              img={item.img}
            />
          ))
        ) : (
          <p>No hay reportes disponibles.</p>
        )}
      </div>
      hola
    </div>
  )
}

export default MyReports

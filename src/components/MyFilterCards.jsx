import React, { useContext, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { UseContext } from '../services/UseContext';
import Cards from './Cards';

const sectionNames = {
    1: 'Edificio',
    2: 'Carpinteria',
    3: 'Plomeria',
    4: 'Electricidad',
    5: 'Otros'
};

const MyFilterCards = ({ filter }) => {
    const { myreports, myReports } = useContext(UseContext)

    useEffect(() => {
        myReports();
    }, []);

    const filteredReports = filter === 'all'
        ? myreports
        : myreports.filter(item => item.section_id === parseInt(filter));

    return (
        <div className='w-100% h-[450px] bg-gray-700 bg-opacity-15 backdrop-blur-md justify-between flex-wrap grid grid-cols-4 gap-4 rounded-r-xl rounded-b-xl p-4 overflow-y-auto'>
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
                <p>No hay reportes disponibles.</p>
            )}
        </div>
    )
}

export default MyFilterCards;
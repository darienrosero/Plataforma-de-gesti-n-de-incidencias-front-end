import React, { useContext, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { UseContext } from '../services/UseContext';
import Cards from './Cards';

const MyFilterCards = ({ filter }) => {

    const { myreports, myReports } = useContext(UseContext)
    useEffect(() => {
        myReports();
    }, []);

    const filteredReports = filter === 'all'
        ? myreports
        : myreports.filter(item => item.section_id === parseInt(filter));

    const getSectionName = (id) => {
        switch (id) {
            case 1: return 'Building';
            case 2: return 'Carpentry';
            case 3: return 'Plumbing';
            case 4: return 'Electricity';
            case 5: return 'Others';
            default: return 'Unknown';
        }
    }

    return (
        <div className='w-100% h-[450px] bg-white justify-between flex-wrap grid grid-cols-4 gap-4 rounded-r-xl rounded-b-xl p-4 overflow-y-auto'>
            {filteredReports && filteredReports.length > 0 ? (
                filteredReports.map((item, index) => (
                    <Cards
                        key={index}
                        status_report={item.status_report}
                        date={format(parseISO(item.date), 'dd/MM/yyyy')}
                        section={getSectionName(item.section)}
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
import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full flex items-center bg-white h-14 p-4 font-jost'>
      <input
        type="text"
        placeholder="Search..."
        className="w-[800px] p-2 border border-gray-300 rounded-lg"
      />
    </div>
  )
}

export default SearchBar

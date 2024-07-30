import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[1286px] absolute flex items-center bg-gray-700 bg-opacity-50 backdrop-blur-lg h-14 p-4 font-jost'>
      <input
        type="text"
        placeholder="Search..."
        className="w-[800px] p-2 bg-purple-custom bg-opacity-30 backdrop-blur-md rounded-lg"
      />
    </div>
  )
}

export default SearchBar

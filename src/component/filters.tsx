import React from 'react'

interface Props {
  data: string;
}
const filters:React.FC<Props> = (props:Props) => {
  return (
    <div className="ml-10 h-35 mr-4">
    <div className='bg-white rounded-lg'>
      <h1 className='px-4 py-2 font-bold text-2xl text-black'> Selected Filters </h1>
      <p className='px-4 py-2 -mt-3 text-gray-400'>No Selected Filers</p>
    </div>
    </div>
  )
}

export default filters;

import React from 'react'

interface Props {
  data: string;
}
const filters:React.FC<Props> = (props:Props) => {
  return (
    <div className="2xl:ml-10 xs:ml-1  h-35 2xl:mr-4 xs:mr-1">
    <div className='bg-white rounded-lg'>
      <h1 className='2xl:px-4 xs:px-1 py-2 font-bold 2xl:text-2xl xs:text-xs text-black'> Selected Filters </h1>
      <p className='2xl:px-4 xs:px-1 py-2 -mt-3 text-gray-400 2xl:text-lg xs:text-xs'>No Selected Filters</p>
    </div>
    </div>
  );
};

export default filters;

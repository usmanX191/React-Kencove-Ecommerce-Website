import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {RootState} from '../redux/store'
import { RemoveAll, RemoveAllAvailabilties, RemoveAllCategories,RemoveAllPrices,RemoveAllRatings } from '../redux/Slices/filterSlice';

const Filters:React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategories: string[] = useSelector((state: RootState) => state.filters.Categories);
  const selectedRatings: number | null = useSelector((state: RootState) => state.filters.ratings);
  const selectedPrice: string[] = useSelector((state: RootState) => state.filters.price);
  const selectedAvailability: string[] = useSelector((state: RootState) => state.filters.availability);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    // Update the selected filters whenever the Redux store changes
    (
      selectedCategories.length === 0 &&
      selectedRatings === 0 &&
      selectedPrice.length === 0 &&
      selectedAvailability.length === 0
    ) ? setSelectedFilters([]) : setSelectedFilters([
      `${(selectedCategories.length !== 0) ? `Categories: ${selectedCategories.join(', ')}` : ``}`,
      `${(selectedRatings !== 0) ? `Ratings: ${selectedRatings} stars` : ``}`,
      `${(selectedPrice.length !== 0) ? `Price: ${selectedPrice.join(', ')}` : ``}`,
      `${(selectedAvailability.length !== 0) ? `Availability: ${selectedAvailability.join(', ')}` : ``}`,
    ]);
    
  }, [selectedCategories, selectedRatings, selectedPrice, selectedAvailability]);


  const removeFilter = (filter: string, index : number) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
    if(index===0)
    {
      dispatch(RemoveAllCategories());
    }
    else if(index === 1)
    {
      dispatch(RemoveAllRatings());
    }
    else if(index === 2)
    {
      dispatch(RemoveAllPrices());
    }
    else if(index === 3)
    {
      dispatch(RemoveAllAvailabilties());
    }
  };

  const resetFilters = () => {
    setSelectedFilters([]);
    dispatch(RemoveAll());
  };
  
  return (
    <div className="2xl:ml-10 xs:ml-1 w-full h-35 2xl:mr-4 xs:mr-1">
    <div className='bg-white flex flex-col rounded-lg p-5'>
      <h1 className='2xl:px-0 2xl:-mt-5 xs:px-1 py-2 font-bold 2xl:text-2xl xs:text-xs text-black'> Selected Filters </h1>
      {selectedFilters.length === 0 ? (<p className='2xl:px-0 xs:px-1  py-2 -mt-2 text-gray-400 2xl:text-lg xs:text-xs'>No Selected Filters</p>): 
      (<div className='flex flex-wrap'>
        {selectedFilters.map((filter, index:number) => (<>
          {filter.length === 0 ? ('') : (<div className='flex w-auto h-[30px] justify-start mt-2 mr-2 px-1 border-black border-2 bg-white rounded-xl'>
          <p className='text-center items-center'>{`${filter} `} <FontAwesomeIcon className='cursor-pointer' onClick={() => removeFilter(filter, index)} icon={faWindowClose} /> </p>
          </div>)}
          </>))
        }
        <p className='flex absolute -mt-8 right-8 text-sm font-bold rounded-lg hover:text-red-600 cursor-pointer text-gray-400' onClick={resetFilters}>Reset Filters</p>
      </div>
      )}
    </div>
    </div>
  );
};

export default Filters;

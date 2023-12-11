import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/store'
import { AddAvailability, RemoveAvailability,updateFilters } from '../redux/Slices/filterSlice';

const Avalaiblity: React.FC = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(true);
  const showPopup = () => {
    if(isClicked===true){
      setIsClicked(false);
      const divElement = document.getElementById('AvailabilityDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '45px'; // You can set the height to any value you need
      }
      
    }
    else{
      setIsClicked(true);
      const divElement = document.getElementById('AvailabilityDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '133px'; // You can set the height to any value you need
      }
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [is2Checked, setIs2Checked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if(isChecked===true)
    {
      dispatch(RemoveAvailability(['Out of Stock']));
    }
    else{
      dispatch(AddAvailability(['Out of Stock']));
      dispatch(updateFilters(true));
    }
  };

  const toggle2Checkbox = () => {
    setIs2Checked(!is2Checked);
    if(is2Checked===true)
    {
      dispatch(RemoveAvailability(['In Stock']));
    }
    else{
      dispatch(AddAvailability(['In Stock']));
      dispatch(updateFilters(true));
    }
  };

  const checkRemoveAvailaibility: boolean = useSelector((state: RootState) => (state.filters.availability.length !== 0));
  useEffect(() => {
    if(checkRemoveAvailaibility === false ){
      setIsChecked(false);
      setIs2Checked(false);
    }
  },[checkRemoveAvailaibility])

  const checkReset: boolean = useSelector((state: RootState) => state.filters.filters);
    useEffect(() => {
    if(checkReset === false ){
      setIsChecked(false);
      setIs2Checked(false);
    }
  },[checkReset])

  return (
    <div id = 'AvailabilityDiv' className='mt-5 mb-5 bg-white rounded-lg'>
      {isClicked ? <>
        <p
      className={`cursor-pointer xs:text-xs 2xl:text-base relative`}
      onClick={showPopup}
    >
      <button
        type="button"
        className={`2xl:px-4 2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1 xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900`}
      >
        Availability
      </button>
      <FontAwesomeIcon
        className={`2xl:ml-[142px]`}
        icon={isClicked ? faChevronUp : faChevronDown}
        style={{ color: 'gray' }}
      />
    </p>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="ml-2 text-gray-700 xs:text-xs  2xl:text-base">Out of Stock (0)</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 text-gray-700 xs:text-xs  2xl:text-base ">In Stock (6)</span>
      </label>
    </div>
      </div>
      </> : 
      <p
      className={`cursor-pointer xs:text-xs 2xl:text-base relative`}
      onClick={showPopup}
    >
      <button
        type="button"
        className={`2xl:px-4 2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1 xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900`}
      >
        Availability
      </button>
      <FontAwesomeIcon
        className={`2xl:ml-[142px]`}
        icon={isClicked ? faChevronUp : faChevronDown}
        style={{ color: 'gray' }}
      />
    </p> }
    </div>
  );
};

export default Avalaiblity;

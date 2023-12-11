import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/store'
import { AddCategories, RemoveCategories, updateFilters } from '../redux/Slices/filterSlice';

const Categories: React.FC = () => {
  
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(true);
  
  const showPopup = () => {
    if(isClicked===true){
      setIsClicked(false);
      const divElement = document.getElementById('categoriesDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '45px'; // You can set the height to any value you need  
      }
    }
    else{
      setIsClicked(true);
      const divElement = document.getElementById('categoriesDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '260px'; // You can set the height to any value you need
      }
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [is2Checked, setIs2Checked] = useState<boolean>(false);
  const [is3Checked, setIs3Checked] = useState<boolean>(false);
  const [is4Checked, setIs4Checked] = useState<boolean>(false);
  const [is5Checked, setIs5Checked] = useState<boolean>(false);



  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if(isChecked===true)
    {
      dispatch(RemoveCategories(['Ear Tags']));
    }
    else{
      dispatch(AddCategories(['Ear Tags']));
      dispatch(updateFilters(true));
    }
  };

  const toggle2Checkbox = () => {
    setIs2Checked(!is2Checked);
    if(is2Checked===true)
    {
      dispatch(RemoveCategories(['Air Buds']));
    }
    else{
      dispatch(AddCategories(['Air Buds']));
      dispatch(updateFilters(true));
    }
  };

  const toggle3Checkbox = () => {
    setIs3Checked(!is3Checked);
    if(is3Checked===true)
    {
      dispatch(RemoveCategories(['Bull Nose Ring']));

    }
    else{
      dispatch(AddCategories(['Bull Nose Ring']));
      dispatch(updateFilters(true));
    }
  };

  const toggle4Checkbox = () => {
    setIs4Checked(!is4Checked);
    if(is4Checked===true)
    {
      dispatch(RemoveCategories(['Desi Ghee']));
    }
    else{
      dispatch(AddCategories(['Desi Ghee']));
      dispatch(updateFilters(true));
    }
  };

  const toggle5Checkbox = () => {
    setIs5Checked(!is5Checked);
    if(is5Checked===true)
    {
      dispatch(RemoveCategories(['Digital Clock + Thermometer']));
    }
    else{
      dispatch(AddCategories(['Digital Clock + Thermometer']));
      dispatch(updateFilters(true));
    }
  };
  const checkRemoveCategories: boolean = useSelector((state: RootState) => (state.filters.Categories.length !== 0));
  useEffect(() => {
    if(checkRemoveCategories === false ){
      setIsChecked(false);
      setIs2Checked(false);
      setIs3Checked(false);
      setIs4Checked(false);
      setIs5Checked(false);
    }
  },[checkRemoveCategories])
  const checkReset: boolean = useSelector((state: RootState) => state.filters.filters);
  useEffect(() => {
    if(checkReset === false ){
      setIsChecked(false);
      setIs2Checked(false);
      setIs3Checked(false);
      setIs4Checked(false);
      setIs5Checked(false);
    }
  },[checkReset])

  return (
    
    <div id = 'categoriesDiv' className=' bg-white rounded-lg'>  
      {isClicked ? <>
        <p
        className={`cursor-pointer xs:text-xs 2xl:text-base relative`}
        onClick={showPopup}
      >
        <button
          type="button"
          className={`2xl:px-4 2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1 xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900`}
        >
          Categories
        </button>
        <FontAwesomeIcon
          className={`2xl:ml-[148px]`}
          icon={isClicked ? faChevronUp : faChevronDown}
          style={{ color: 'gray' }}
        />
      </p>
      <div className='2xl:px-4 2xl:py-2 xs:px-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="ml-2 text-gray-700 xs:text-xs  2xl:text-base">Ear Tags (1)</span>
      </label>
      </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 text-gray-700  xs:text-xs  2xl:text-base">Air Buds (2)</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is3Checked}
          onChange={toggle3Checkbox}
        />
        <span className="ml-2 text-gray-700  xs:text-xs  2xl:text-base">Bull Nose Ring (1)</span>
      </label>
      </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is4Checked}
          onChange={toggle4Checkbox}
        />
        <span className="ml-2 text-gray-700  xs:text-xs  2xl:text-base">Desi Ghee (1)</span>
      </label>
      </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is5Checked}
          onChange={toggle5Checkbox}
        />
        <span className="ml-2 text-gray-700  xs:text-xs  2xl:text-base">Digital Clock + Thermometer (1)</span>
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
         Categories
       </button>
       <FontAwesomeIcon
         className={`2xl:ml-[148px]`}
         icon={isClicked ? faChevronUp : faChevronDown}
         style={{ color: 'gray' }}
       />
     </p> }
    </div>
  );
};

export default Categories;

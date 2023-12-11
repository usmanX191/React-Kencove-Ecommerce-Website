import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/store'
import { AddPrice, RemovePrice,updateFilters } from '../redux/Slices/filterSlice';

const Price: React.FC = () => {

  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(true);
  const showPopup = () => {
    if(isClicked===true){
      setIsClicked(false);
      const divElement = document.getElementById('PriceDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '45px'; // You can set the height to any value you need
      }
    }
    else{
      setIsClicked(true);
      const divElement = document.getElementById('PriceDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '320px'; // You can set the height to any value you need
      }
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);
  const [isChecked5, setIsChecked5] = useState<boolean>(false);
  const [isChecked6, setIsChecked6] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if(isChecked===true)
    {
      dispatch(RemovePrice(['Less than 10$']));
    }
    else{
      dispatch(AddPrice(['Less than 10$']));
      dispatch(updateFilters(true));
    }
  };

  const toggleCheckbox2 = () => { 
    setIsChecked2(!isChecked2);
    if(isChecked2===true)
    {
      dispatch(RemovePrice(['10$ to 20$']));
    }
    else{
      dispatch(AddPrice(['10$ to 20$']));
      dispatch(updateFilters(true));
    }
    
  };
  const toggleCheckbox3 = () => { 
    setIsChecked3(!isChecked3);
    if(isChecked3===true)
    {
      dispatch(RemovePrice(['20$ to 30$']));
    }
    else{
      dispatch(AddPrice(['20$ to 30$']));
      dispatch(updateFilters(true));
    }
    
  };
  const toggleCheckbox4 = () => { 
    setIsChecked4(!isChecked4);
    if(isChecked4===true)
    {
      dispatch(RemovePrice(['30$ to 50$']));
    }
    else{
      dispatch(AddPrice(['30$ to 50$']));
      dispatch(updateFilters(true));
    }
    
  };
  const toggleCheckbox5 = () => { 
    setIsChecked5(!isChecked5);
    if(isChecked5===true)
    {
      dispatch(RemovePrice(['50$ to 100$']));
    }
    else{
      dispatch(AddPrice(['50$ to 100$']));
      dispatch(updateFilters(true));
    }
    
  };
  const toggleCheckbox6 = () => { 
    setIsChecked6(!isChecked6);
    if(isChecked6===true)
    {
      dispatch(RemovePrice(['100$ & Above']));
    }
    else{
      dispatch(AddPrice(['100$ & Above']));
      dispatch(updateFilters(true));
    }
  };
  const checkRemovePrices: boolean = useSelector((state: RootState) => (state.filters.price.length !== 0));
  useEffect(() => {
    if(checkRemovePrices === false ){
      setIsChecked(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      setIsChecked5(false);
      setIsChecked6(false);
    }
  },[checkRemovePrices])
  const checkReset: boolean = useSelector((state: RootState) => state.filters.filters);
    useEffect(() => {
    if(checkReset === false ){
      setIsChecked(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      setIsChecked5(false);
      setIsChecked6(false);
    }
  },[checkReset])

  return (
    <div id = 'PriceDiv' className='mt-5 bg-white rounded-lg'>
      {isClicked ? <>
        <p
      className={`cursor-pointer xs:text-xs 2xl:text-base relative`}
      onClick={showPopup}
    >
      <button
        type="button"
        className={`2xl:px-4 2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1 xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900`}
      >
        Price
      </button>
      <FontAwesomeIcon
        className={`2xl:ml-[200px]`}
        icon={isClicked ? faChevronUp : faChevronDown}
        style={{ color: 'gray' }}
      />
    </p>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1 xs:mt-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="ml-2  xs:text-xs 2xl:text-base text-gray-700">Less than 10$</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked2}
          onChange={toggleCheckbox2}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700">10$ to 20$</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked3}
          onChange={toggleCheckbox3}
        />
        <span className="ml-2  xs:text-xs 2xl:text-base text-gray-700">20$ to 30$</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked4}
          onChange={toggleCheckbox4}
        />
        <span className="ml-2  xs:text-xs 2xl:text-base text-gray-700">30$ to 50$</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked5}
          onChange={toggleCheckbox5}
        />
        <span className="ml-2  xs:text-xs 2xl:text-base text-gray-700">50$ to 100$</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked6}
          onChange={toggleCheckbox6}
        />
        <span className="ml-2  xs:text-xs 2xl:text-base text-gray-700">100$ & Above</span>
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
        Price
      </button>
      <FontAwesomeIcon
        className={`2xl:ml-[200px]`}
        icon={isClicked ? faChevronUp : faChevronDown}
        style={{ color: 'gray' }}
      />
    </p> }
    </div>
  );
};

export default Price;

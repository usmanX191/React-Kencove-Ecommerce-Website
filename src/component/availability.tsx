import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import Filters from './filters';
const Avalaiblity: React.FC = () => {
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
      <Filters data = 'Ear Tags'/>
    }
    else{
      <Filters data = ''/>
    }
  };

  const toggle2Checkbox = () => {
    setIs2Checked(!is2Checked);
    if(is2Checked===true)
    {
      <Filters data = 'Ear Tagger'/>
    }
    else{
      <Filters data = ''/>
    }
  };


  return (
    <div id = 'AvailabilityDiv' className='mt-5 mb-5 bg-white rounded-lg'>
      {isClicked ? <>
      <p className='cursor-pointer relative'onClick={showPopup}>
      <button type='button' className="px-4 mr-20 py-2 font-bold text-xl text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Availability</button>
      <FontAwesomeIcon className='ml-20'  icon={faChevronUp} style={{color: "gray",}} />
      </p>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="ml-2 text-gray-700">Out of Stock (5)</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 text-gray-700 ">In Stock (2)</span>
      </label>
    </div>
      </div>
      </> : 
      <p className='cursor-pointer relative'onClick={showPopup}>
      <button type='button' className="px-4 mr-20 py-2  font-bold text-xl text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Availability</button>
      <FontAwesomeIcon className='px-2 ml-16' icon={faChevronDown} style={{color: "gray",}} />
      </p> }
    </div>
  );
};

export default Avalaiblity;

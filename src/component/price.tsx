import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
// import Filters from './filters';
const Price: React.FC = () => {
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
    
  };

  const toggleCheckbox2 = () => { 
    setIsChecked2(!isChecked2);
    
  };
  const toggleCheckbox3 = () => { 
    setIsChecked3(!isChecked3);
    
  };
  const toggleCheckbox4 = () => { 
    setIsChecked4(!isChecked4);
    
  };
  const toggleCheckbox5 = () => { 
    setIsChecked5(!isChecked5);
    
  };
  const toggleCheckbox6 = () => { 
    setIsChecked6(!isChecked6);
  };


  return (
    <div id = 'PriceDiv' className='mt-5 bg-white rounded-lg'>
      {isClicked ? <>
      <p className='cursor-pointer relative'onClick={showPopup}>
      <button type='button' className="px-4 mr-20 py-2 font-bold text-xl text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Price</button>
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
        <span className="ml-2 text-gray-700">Less than 10$</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked2}
          onChange={toggleCheckbox2}
        />
        <span className="ml-2 text-gray-700">10$ to 20$</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked3}
          onChange={toggleCheckbox3}
        />
        <span className="ml-2 text-gray-700">20$ to 30$</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked4}
          onChange={toggleCheckbox4}
        />
        <span className="ml-2 text-gray-700">30$ to 50$</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked5}
          onChange={toggleCheckbox5}
        />
        <span className="ml-2 text-gray-700">50$ to 100$</span>
      </label>
    </div>
      </div>
      <div className='px-4 py-2'>
      <div className="m-0">
        
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked6}
          onChange={toggleCheckbox6}
        />
        <span className="ml-2 text-gray-700">100$ & Above</span>
      </label>
    </div>
      </div>
      </> : 
      <p className='cursor-pointer relative'onClick={showPopup}>
      <button type='button' className="px-4 mr-20 py-2  font-bold text-xl text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Price</button>
      <FontAwesomeIcon className='px-2 ml-16' icon={faChevronDown} style={{color: "gray",}} />
      </p> }
    </div>
  );
};

export default Price;

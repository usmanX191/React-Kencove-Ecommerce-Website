import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Filters from './filters';
const Ratings: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(true);
  const showPopup = () => {
    if(isClicked===true){
      setIsClicked(false);
      const divElement = document.getElementById('RatingsDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '45px'; // You can set the height to any value you need
      }
    }else{
      setIsClicked(true);
      const divElement = document.getElementById('RatingsDiv');
      if (divElement) {
        // Set the height of the div using the style property
        divElement.style.height = '270px'; // You can set the height to any value you need
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
    <div id = 'RatingsDiv' className='mt-5 bg-white rounded-lg'>
      {isClicked ? <>
      <p className='cursor-pointer xs:text-xs 2xl:text-base  relative'onClick={showPopup}>
      <button type='button' className="2xl:px-4  2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1  xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Customer Ratings</button>
      <FontAwesomeIcon className='2xl:ml-20' icon={faChevronUp} style={{color: "gray"}} />
      </p>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="myRadioGroup"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700"><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /> & Above</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="myRadioGroup"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700 "><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiOutlineStar className='inline-block' size={18} color="light-gray" /> & Above</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="myRadioGroup"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700 "><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /> & Above</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="myRadioGroup"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700 "><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /> & Above</span>
      </label>
    </div>
      </div>
      <div className='2xl:px-4 2xl:py-2 xs:px-1 xs:py-1'>
      <div className="m-0">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="myRadioGroup"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={is2Checked}
          onChange={toggle2Checkbox}
        />
        <span className="ml-2 xs:text-xs 2xl:text-base text-gray-700 "><AiFillStar className='inline-block' size={18} /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /><AiOutlineStar className='inline-block' size={18} color="light-gray" /> & Above</span>
      </label>
    </div>
      </div>
      </> : 
      <p className='cursor-pointer xs:text-xs 2xl:text-base relative'onClick={showPopup}>
      <button type='button' className="2xl:px-4 2xl:mr-18 2xl:py-2  font-bold 2xl:text-xl xs:py-1  xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900">Customer Ratings</button>
      <FontAwesomeIcon className='2xl:px-2 2xl:ml-20' icon={faChevronDown} style={{color: "gray",}} />
      </p> }
    </div>
  );
};

export default Ratings;

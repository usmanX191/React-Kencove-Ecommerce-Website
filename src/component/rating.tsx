import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateRatings, updateFilters } from '../redux/Slices/filterSlice';

const Ratings: React.FC = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const toggleDropdown = () => {
    setIsClicked((prev) => !prev);
  };

  const handleRatingChange = (rating: number) => {
    dispatch(updateRatings(rating));
    dispatch(updateFilters(true));
  };

  const ratings = [5, 4, 3, 2, 1];

  const checkReset: boolean = useSelector((state: RootState) => state.filters.filters);

  useEffect(() => {
    if (checkReset === false) {
      // Reset state when filters are reset
      setIsClicked(true);
    }
  }, [checkReset]);

  const selectedRatings: number | null = useSelector((state: RootState) => state.filters.ratings);

  return (
    <div id="RatingsDiv" className="mt-5 bg-white rounded-lg">
      <p
        className={`cursor-pointer xs:text-xs 2xl:text-base relative`}
        onClick={toggleDropdown}
      >
        <button
          type="button"
          className={`2xl:px-4 2xl:mr-18 2xl:py-2 font-bold 2xl:text-xl xs:py-1 xs:mr-0.5 xs:text-xs text-blue-800 cursor-pointer hover:underline hover:text-blue-900`}
        >
          Customer Ratings
        </button>
        <FontAwesomeIcon
          className={`2xl:ml-[80px]`}
          icon={isClicked ? faChevronUp : faChevronDown}
          style={{ color: 'gray' }}
        />
      </p>
      {isClicked && (
        <div className={`2xl:px-4 2xl:py-2 xs:px-1 xs:py-1`}>
          {ratings.map((rating) => (
            <div key={rating} className={`m-0`}>
              <label className={`inline-flex items-center cursor-pointer`}>
                <input
                  type="radio"
                  name="myRadioGroup"
                  className={`form-checkbox h-5 w-5 text-blue-600`}
                  checked={rating === selectedRatings}
                  onChange={() => handleRatingChange(rating)}
                />
                <span className={`ml-2 xs:text-xs 2xl:text-base text-gray-700`}>
                  {[...Array(rating)].map((_, i) => (
                    <AiFillStar key={i} className={`inline-block`} size={18} />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <AiOutlineStar key={i} className={`inline-block`} size={18} color="light-gray" />
                  ))}
                </span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ratings;

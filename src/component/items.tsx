import React from 'react'; 
// import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai'; 
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import {RootState} from '../redux/store'
import { Products, Product } from '../data/data';

const Items:React.FC = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const selectedCategories: string[] = useSelector((state: RootState) => state.filters.Categories);
  const selectedRatings: number | null = useSelector((state: RootState) => state.filters.ratings);
  const selectedPrice: string[] = useSelector((state: RootState) => state.filters.price);
  const selectedAvailability: string[] = useSelector((state: RootState) => state.filters.availability);

  const checkPriceRange = (price: string, range: string): boolean => {
    const [min, max] = range.split(' to ');
    const productPrice = parseFloat(price.replace('$', ''));
    return productPrice >= parseFloat(min) && productPrice <= parseFloat(max);
  };
  
  const filteredProducts = Products.filter((product: Product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.Categories);
    const ratingMatch = selectedRatings === 0 || product.rating === selectedRatings;
    const priceMatch = selectedPrice.length === 0 || selectedPrice.some(range => checkPriceRange(product.price, range));
    const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes('In Stock');
    return categoryMatch && ratingMatch && priceMatch && availabilityMatch;
  });

  return (
    <div className=" mx-auto px-5 py-5 2xl:ml-10 xs:ml-1 2xl:mt-5 xs:mt-1 h-auto xs:w-15 xs:mr-1  2xl:mr-0 mb-5 w-full bg-white rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4" style={{width:'100%'}}>
        {(selectedCategories.length === 0 && selectedRatings === 0 && selectedPrice.length === 0 && selectedAvailability.length === 0) ? (
          <>
          {Products.map((data: Product , index: number) => ( 
          <div
            key={index}
            className="p-4 bg-white rounded-lg hover:border-gray-800 hover:shadow-2xl transition duration-800"
          >
            <div className="text-center">
              <img src={data.image} alt="Item" className="mx-auto w-32 h-32" />
              <div className="mt-3">
                <h2 className="text-blue-800 text-lg font-bold">{data.name}</h2>
                <p className="text-sm mt-1">
                  Item # <span className="text-base font-semibold">{data.item_no}</span>
                </p>
                <div className="mt-1 flex items-center justify-center"><p className='font-semibold inline-block text-lg'>Ratings:  </p> 
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl -mt-1 inline-block ${
                        i < data.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  
                </div>
                <span className="mt-2"><p className='font-semibold inline-block text-lg'>Reviews:  </p> {data.reviews}</span>
                <p className="text-black font-bold text-lg mt-2">{data.price}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => {
                    navigate('./ItemDetail/', { state: data });
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}</>):
        (<>
        {filteredProducts.map((data: Product, index: number) => (
          
          <div
            key={index}
            className="p-4 bg-white rounded-lg hover:border-gray-800 hover:shadow-2xl transition duration-800"
          >
            <div className="text-center">
            <img src={data.image} alt="Item" className="mx-auto w-32 h-32" />
              <div className="mt-3">
                <h2 className="text-blue-800 text-lg font-bold">{data.name}</h2>
                <p className="text-sm mt-1">
                  Item # <span className="text-base font-semibold">{data.item_no}</span>
                </p>
                <div className="mt-1 flex items-center justify-center"><p className='font-semibold inline-block text-lg'>Ratings:  </p> 
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl -mt-1 inline-block ${
                        i < data.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  
                </div>
                <span className="mt-2"><p className='font-semibold inline-block text-lg'>Reviews:  </p> {data.reviews}</span>
                <p className="text-black font-bold text-lg mt-2">{data.price}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => {
                    navigate('./ItemDetail/', { state: data });
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}</>)}
        
      </div>
    </div>
  )
}


export default Items;

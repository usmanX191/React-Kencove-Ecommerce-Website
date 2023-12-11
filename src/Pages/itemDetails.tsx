import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
// import { useNavigate, useParams } from 'react-router-dom';

import {  AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'; 

const ItemDetail:React.FC = () => {

  const [count, SetCount] = useState<number>(1);
  // const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  

  return (
    <div className='h-full 2xl:p-5 xs:p-3 2xl:bg-gray-100 xs:bg-gray-500'>
      <div className='2xl:p-5 xs:p-2 h-auto bg-white'>
        <div className='flex'>
          <img src={data.image} alt=""  className='2xl:mr-5 xs:mr-1 2xl:w-max 2xl:h-64 xs:w-1/2 xs:h-1/3'/>
          <div className='w-1/2'>
          <h1 className='font-bold 2xl:text-2xl xs:text-lg -mt-1.5 inline-block'>{data.name}</h1><p className='2xl:mt-1 xs:mt-0 2xl:text-base xs:text-xs'>Item # <p className='inline-block font-bold'>{data.item_no}</p></p>
          {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl -mt-1 inline-block ${
                        i < data.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
          ))} <p className='xs:text-xs 2xl:text-base inline-block'> Ratings</p> 
          <p> Reviews by {data.reviews} </p>
          <hr className="my-0 h-0.5 w-full border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" /> 
          <p className='text-red-600 2xl:mt-10 xs:-mt-0.5 xs:text-lg xs:text-center 2xl:text-left 2xl:text-2xl font-bold'>Price {data.price}</p>
          <p className='2xl:text-gray-500 xs:text-blue-400 2xl:mt-12 xs:-mt-2 xs:text-center 2xl:text-left text-lg font-semibold 2xl:inline-block'>Quantity: <AiOutlineMinusSquare size={20} className='inline-block -mt-1 h-10 cursor-pointer' color='black' onClick={() =>{count <= 1 ? (SetCount(1)) : (SetCount(count-1)) }} /> {count} <AiOutlinePlusSquare size={20} className='inline-block -mt-1 h-10 cursor-pointer' color='black' onClick={() =>{count>= 5 ? (SetCount(5)) : (SetCount(count+1)) }} /></p>
          <button className="bg-blue-500 xs:-ml-0.5  hover:bg-blue-700 2xl:text-base xs:text-xs text-white font-bold 2xl:py-2 xs:py-1.5 inline-block 2xl:px-10 xs:px-2.5 rounded 2xl:ml-7" onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              // navigate("./ItemDetail/", {state: index});
              }}>
            Buy Now
          </button>
          <button className="bg-orange-500 hover:bg-orange-700 2xl:text-base xs:text-xs text-white font-bold 2xl:py-2 xs:py-1.5 inline-block xs:px-2.5 2xl:px-10 rounded 2xl:ml-1 xs:ml-0.5" onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              // navigate("./ItemDetail/", {state: index});
              }}>
            Add to Cart
          </button>
          </div>
          <div className='xs:hidden 2xl:block w-1/2 ml-2 bg-gray-100'>
              <div className='grid grid-cols-2 divide-x-2'>
              <div className=''>
              <p className='px-4 mt-1 text-gray-400'>Delivery</p>
              <p className='px-4 mt-2 text-black font-bold inline-block'>Standard Delivery</p><p className='inline-block'>3 - 6 day(s) </p>
              <p><p className='px-4 mt-1 text-black font-bold inline-block'>Delivery Charges</p><p className='inline-block'>  USD 2.5$ </p></p>
              <p><p className='px-4 mt-1 text-black font-bold inline-block'>Cash on Delivery</p><p className='inline-block'>Available </p></p>
              </div>
              <div>
              <p className='px-4 mt-1 text-gray-400'>Service</p>
              <p className='px-4 mt-2 text-black font-bold'>7 Days Return</p><p className='px-4 mt-0 text-sm text-gray-400'>change of mind is not applicable </p>
              <p><p className='px-4 mt-3 text-black font-bold inline-block'>Warranty not available</p></p>
              </div>
              </div>
              <hr className="my-0 h-0.5 w-full border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" /> 
              <div className='grid grid-cols-2 divide-x-2'>
              <div>
              <p className='px-4 mt-1 text-gray-400'>Sold By</p>
              <p className='px-4 mt-2 text-black font-bold inline-block'>A&E COLLECTION</p>
              </div>
              <div className='grid grid-cols-1 divide-y-2'>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Positive Seller Ratings <p className='text-black font-bold inline-block'> 85 % </p></p>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Ship on Time <p className='text-black font-bold inline-block'> 100 % </p></p>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Chat on Time <p className='text-black font-bold inline-block'> 100 % </p></p>
              </div>
              </div>
              <hr className="my-0 h-0.5 w-full border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
              <div className='text-center p-3'><button className='hover:underline font-bold text-blue-500 hover:text-blue-700'> Visit Store</button></div>
          </div>
          
        </div>
        <div className='xs:block 2xl:hidden w-full mt-4 bg-red-800' >
        <div className='grid grid-cols-2 divide-x-2'>
              <div>
              <p className='px-3 mt-1 text-gray-400'>Delivery</p>
              <p className='xs:px-1 mt-2 text-black font-bold inline-block'>Standard Delivery:</p><p className='xs:px-1'>3 - 6 day(s) </p>
              <p><p className='px-1 mt-1 text-black font-bold inline-block'>Delivery Charges:</p><p className='xs:px-1'>  USD 2.5$ </p></p>
              <p><p className='px-1 mt-1 text-black font-bold inline-block'>Cash on Delivery:</p><p className='xs:px-1 mb-2'>Available </p></p>
              </div>
              <div>
              <p className='px-3 mt-1 text-gray-400'>Service</p>
              <p className='px-1 mt-2 text-black font-bold'>7 Days Return:</p><p className='px-1 mt-0 text-sm'>change of mind is not applicable </p>
              <p><p className='px-1 mt-11 text-sm text-black font-bold inline-block'>Warranty not available</p></p>
              </div>
              </div>
              <hr className="my-0 h-0.5 w-full border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" /> 
              <div className='grid grid-cols-2 divide-x-2'>
              <div>
              <p className='px-3 mt-1 text-gray-400'>Sold By</p>
              <p className='px-3 mt-2 text-black font-bold inline-block'>A&E COLLECTION</p>
              </div>
              <div className='grid grid-cols-1 divide-y-2'>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Positive Seller Ratings <p className='text-black font-bold inline-block'> 85 % </p></p>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Ship on Time <p className='text-black font-bold inline-block'> 100 % </p></p>
              <p className='px-4 mt-1 text-gray-400 text-sm inline-block'>Chat on Time <p className='text-black font-bold inline-block'> 100 % </p></p>
              </div>
              </div>
              <hr className="my-0 h-0.5 w-full border-t-0 bg-neutral-300 opacity-100 dark:opacity-50"/>
              <div className='text-center items-center p-3'><button className='hover:underline font-bold text-blue-500 hover:text-blue-700'> Visit Store</button></div>
        </div>
      </div>
      
      

      <div className='h-auto mt-5 bg-white'>
          <div className='px-4 py-2 bg-gray-400'>Product details of Air buds/Bluetooth Wireless Earphone with Microphone 5.0 Earbuds With Power Bank</div>
            <div className='2xl:flex xs:relative'>
            <div className='2xl:ml-20 xs:text-xs w-1/2 2xl:text-base xs:ml-3 2xl:mt-10 xs:mt-5 2xl:mb-10'>
                <li className=''>Plug Type: Wireless</li>
                <li className=''>Support Memory Card: No</li>
                <li className=''>With Microphone:Yes</li>
                <li className=''>Resistance: 16Ω</li>
                <li className=''>Waterproof: Yes</li>
                <li className=''>Line Length: None</li>
                <li className=''>Support APP: Yes</li>
            </div>
            <div className='2xl:ml-0 xs:text-xs w-1/2 2xl:text-base xs:-ml-7 2xl:mt-10 mb-10'>
                <li className='ml-10'>Upgrade Feature 1: Pop Up Window (Only for IOS System above 12.1)</li>
                <li className='ml-10'>Upgrade Feature 2: Hifi Stereo (Perfect Bass and Clear Sound)</li>
                <li className='ml-10'>Upgrade Feature 3: Smart Touch Control (More Sensitive and Precise)</li>
                <li className='ml-10'>Upgrade Feature 4: Real Power Display on Device (Know your Earbuds Easily)</li>
                <li className='ml-10'>Upgrade Feature 5: Bluetooth V5.0 (Lower Power Consumption)</li>
            </div>
          </div>
      </div>
    </div>
  );
  
}

export default ItemDetail;

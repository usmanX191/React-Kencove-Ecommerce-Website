import React from 'react'
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'; 
const Items:React.FC = () => {
  const navigate = useNavigate();

  const itemData: {
    image: string;
    name: string;
    item_no: string;
    price: string;
    rating: number;
    reviews:number;
  }[] = [
    {
      image :"/1.png",
      name: "Pre-Numbered Calf Tags 1 to 50",
      item_no: "226-250 / yellow",
      price: "$29.25",
      rating:5,
      reviews:3
    },
    {
      image:"/2.png",
      name: "Air buds/Bluetooth Wireless",
      item_no: "286-290 / white",
      price: "$15.35",
      rating:5,
      reviews:10
    },
    {
      image:"/2.png",
      name: "Air buds/Bluetooth Wireless",
      item_no: "286-290 / white",
      price: "$15.35",
      rating:5,
      reviews:10
    },
    
    
    // {
    //   name: "Pre-Numbered Calf Tags 22",
    //   item_no: "226-250 / Red",
    //   price: "$29.25",
    // },
    // {
    //   name: "Pre-Numbered Calf Tags 22",
    //   item_no: "226-250 / Red",
    //   price: "$29.25",
    // },
    // {
    //   name: "Pre-Numbered Calf Tags 22",
    //   item_no: "226-250 / Red",
    //   price: "$29.25",
    // },
    // {
    //   name: "Pre-Numbered Calf Tags 22",
    //   item_no: "226-250 / Red",
    //   price: "$29.25",
    // },
    // {
    //   name: "Pre-Numbered Calf Tags 22",
    //   item_no: "226-250 / Red",
    //   price: "$29.25",
    // },
  ];

  return (

  <div id='itemsListDiv' className="2xl:ml-10 xs:ml-1 2xl:mt-5 xs:mt-1 p-5 h-auto xs:w-15 xs:mr-1  2xl:mr-4 mb-5 bg-white rounded-lg">


    {itemData.map((data, index) => (
      <div className='ml-5 mt-5 px-2 py-2 w-30 h-100 inline-block rounded-lg hover:border-gray-800 hover:shadow-2xl transition duration-800'>          
        <div className="text-center p-2">
          {/* <div className="w-32 h-32 mx-auto">
            <img src="../../public/1.jpg" alt="Item" className="w-full h-full" />
          </div> */}
          <img src={data.image} alt="Item" className="mx-auto w-32 h-32" />
          <h2 className="text-blue-800 text-lg font-bold mt-2">{data.name}</h2>
          <p className='text-sm mt-1'>Item # <p className='text-base inline-block font-semibold'>{data.item_no}</p></p>
          <div className="mt-1">
          <AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiFillStar className='inline-block' size={18} /><AiOutlineStar className='inline-block' size={18} color="light-gray" /> {data.reviews} {/* Display your rating here */}
          </div>
          <p className="text-black font-bold text-lg mt-2">{data.price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate("./ItemDetail/", {state: data});
          }}>
            Select
          </button>
          </div>
    </div>
    ))}
    </div>
  )
}


export default Items;

import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {

  const navigate = useNavigate();

  const [isSignInPopupVisible, setSignInPopupVisibility] = useState<Boolean>(false);
  const [isCartPopupVisible, setCartPopupVisibility] = useState<Boolean>(false);
  const [isProductPopupVisible, setProductPopupVisibility] = useState<Boolean>(false);
  const showSignInPopup = () => {
    setSignInPopupVisibility(true);
  };

  const hideSignInPopup = () => {
    setSignInPopupVisibility(false);
  };

  const showCartPopup = () => {
    setCartPopupVisibility(true);
  };

  const hideCartPopup = () => {
    setCartPopupVisibility(false);
  };

  const showProductPopup = () => {
    setProductPopupVisibility(true);
  };

  const hideProductPopup = () => {
    setProductPopupVisibility(false);
  };

  const items:String[] = ['All Products', 'Animal Identification', 'Clearance', 'Connectors', 'Electric Fence Energizers', 'Electric Net Fencing', 'Electric Supplies', 'Fireglass Posts', 'Garden Fence', 'Gates', 'Hardware', 'Horse Fence'];

  return (
    <>
      <div className="bg-gray-300">
        <div className="text-center px-4 py-2">
          Orders over $150 may qualify for free shipping.{" "}
          <button 
              type="button"
              className="font-semibold underline text-black-500 hover:text-blue-700"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-blue-600 h-40">
        <div className="flex md:order-3">
          <div className="text-white text-center px-6 py-4 cursor-pointer" onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./')
              }}>
            <p className="text-5xl">KENCOVE</p>
            <p className="text-base">FARM FENCE SUPPLIES</p>
          </div>
          <div className="px-2 py-6 relative w-1/2">
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle the search functionality here
              }}
            >
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you Looking for Today?"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </form>
          </div>
          <p className="px-1 py-10 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              window.location.href = 'tel:1-800-KENCOVE';
              }}>
                1-800-KENCOVE
            </button>
          </p>

          <p className="px-9 py-10 text-lg text-white font-bold cursor-pointer relative" onMouseEnter={showSignInPopup} onMouseLeave={hideSignInPopup}>
          <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} />
          <button
            type="button"
            className="px-1 font-bold text-white hover:underline hover:text-white"
          >
          Sign in
          {isSignInPopupVisible ? <FontAwesomeIcon className='px-1' icon={faChevronUp} style={{color: "#ffffff",}} /> : <FontAwesomeIcon className='px-1' icon={faChevronDown} style={{color: "#ffffff",}} />}
          </button>
          {isSignInPopupVisible && (
              <div className="absolute top-full h-70 w-fit left-0 -mt-8 bg-gray-300 text-black rounded-lg">
                <button className="w-full text-center p-2 hover:bg-gray-200 bg-blue-500 text-white font-semibold py-2 px-4" onClick={hideSignInPopup}>
                  Sign In
                </button>
                <button className="w-full text-center p-2 hover:bg-gray-500" onClick={hideSignInPopup}>
                  Create Account
                </button>
              </div>
            )}
        </p>
          <p className="px-0 py-10 text-lg text-white font-bold cursor-pointer relative" onMouseEnter={showCartPopup} onMouseLeave={hideCartPopup}>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
            <button
              type="button"
              className="px-1 font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              window.location.href = 'cart';
              }}>
                Cart
              {isCartPopupVisible ? <FontAwesomeIcon className='px-1' icon={faChevronUp} style={{color: "#ffffff",}} /> : <FontAwesomeIcon className='px-1' icon={faChevronDown} style={{color: "#ffffff",}} />}  
            </button>
            {isCartPopupVisible && (
              <div className="absolute top-full h-50 w-max right-0 -mt-8 bg-gray-300 text-black rounded-lg">
                <p className='px-6 py-10 text-center'>Your cart is empty.</p>
              </div>
            )}
          </p>
        </div>
        <div className="px-5 -mt-2">
            <hr className="my-0 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </div>
        <div className="flex md:order-3">
          <p className="px-6 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./')
              }}>
                HOME
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer relative" onMouseEnter={showProductPopup} onMouseLeave={hideProductPopup}>
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./products')
              }}>
                PRODUCTS
              {isProductPopupVisible ? <FontAwesomeIcon className='px-1' icon={faChevronUp} style={{color: "#ffffff",}} /> : <FontAwesomeIcon className='px-1' icon={faChevronDown} style={{color: "#ffffff",}} />}  
            </button>
            {isProductPopupVisible && (
              <div className="absolute top-full left-0 mt-0 bg-gray-300 text-black rounded-lg">
                <ul className='h-25 w-30 overflow-y-auto'>
                    {items.map((item, index) => (
                      <button className="w-full text-sm text-left p-2 hover:bg-gray-200 bg-white text-black font-bold py-2 px-2" onClick={hideProductPopup} key={index}>{item}</button>
                    ))}
                </ul>
              </div>
            )}
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./myaccount')
              }}>
                MY ACCOUNT
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              window.location.href = 'tel:1-800-KENCOVE';
              navigate('./articles')
              }}>
                ARTICLES
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./contact')
              }}>
                CONTACT
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./blog')
              }}>
                BLOG
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./events')
              }}>
                EVENTS
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate('./jobs')
              }}>
                JOBS
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

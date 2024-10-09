import React from "react";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUser,
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const windowWidth = window.innerWidth;
  console.log(`Window width: ${windowWidth}px`);

  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSignInPopupVisible, setSignInPopupVisibility] =
    useState<Boolean>(false);
  const [isCartPopupVisible, setCartPopupVisibility] = useState<Boolean>(false);
  const [isProductPopupVisible, setProductPopupVisibility] =
    useState<Boolean>(false);
  const [isSearchPopupVisible, setSearchPopupVisibility] =
    useState<Boolean>(false);
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

  const showSearchPopup = () => {
    setSearchPopupVisibility(!isSearchPopupVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const items: string[] = [
    "HOME",
    "PRODUCTS",
    "MY ACCOUNT",
    "ARTICLES",
    "CONTACT",
    "BLOG",
    "EVENTS",
    "JOBS",
  ];

  // const items:String[] = ['All Products', 'Animal Identification', 'Clearance', 'Connectors', 'Electric Fence Energizers', 'Electric Net Fencing', 'Electric Supplies', 'Fireglass Posts', 'Garden Fence', 'Gates', 'Hardware', 'Horse Fence'];

  return (
    <>
      <div className="bg-gray-300">
        <div className="text-center px-4 py-2 xs:py-1 xs:w-full">
          Orders over $150 may qualify for free shipping.{" "}
          <button
            type="button"
            className="font-semibold underline text-black-500 hover:text-blue-700"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute z-10 w-full sm:sticky top-0 bg-blue-800 sm:h-40 xs:h-15">
        <div className="flex">
          <div
            className="sm:hidden xs:px-4 xs:py-6 cursor-pointer inline-block"
            onClick={toggleMenu}
          >
            <FaBars size={30} />
          </div>
          <div
            className="text-white xs:text-center sm:px-6 sm:py-4 xs:py-4 xs:mt-1 cursor-pointer inline-block"
            onClick={() => {
              // Add your logic for handling the button click, such as dialing the phone number
              navigate("./");
            }}
          >
            <p className="sm:text-5xl xs:text-sm">KENCOVE</p>
            <p className="sm:text-base xs:text-xs">FARM FENCE SUPPLIES</p>
          </div>
          <div className="xs:block sm:hidden xs:px-4 xs:py-8 xs:-mt-1">
            <button type="button">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "#ffffff", fontSize: "18px" }}
                onClick={showSearchPopup}
              />
            </button>
          </div>

          <div className="xs:hidden sm:block lg:-ml-5 md:-ml-15 sm:px-2 sm:py-6 sm:relative sm:w-1/2 inline-block">
            <form
              className="sm:relative"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle the search functionality here
              }}
            >
              <input
                type="search"
                id="default-search"
                className="sm:block sm:w-full sm:p-4 sm:pl-10 sm:text-sm sm:text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          <p className="xs:hidden sm:block xs:text-xs xs:font-semibold xs:px-1 xs:py-8 2xl:px-4 lg:px-3 2xl:py-10 lg:py-10 2xl:text-lg  lg:text-base text-white cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                window.location.href = "tel:1-800-KENCOVE";
              }}
            >
              Contact Us
            </button>
          </p>

          <p
            className="xs:text-xs xs:font-semibold xs:px-0 xs:py-8 inline-block 2xl:ml-5 2xl:px-6 2xl:py-10 lg:py-10 lg:px-3 2xl:text-lg lg:text-base text-white font-bold cursor-pointer relative"
            onMouseEnter={showSignInPopup}
            onMouseLeave={hideSignInPopup}
          >
            <FontAwesomeIcon
              className="xs:inline-block 2xl:-mr-0 xs:mr-0.5"
              icon={faUser}
              style={{ color: "#ffffff" }}
            />
            <button
              type="button"
              className="2xl:px-1 lg:px-1 font-bold text-white hover:underline hover:text-white xs:inline-block"
            >
              Sign in
              {isSignInPopupVisible ? (
                <FontAwesomeIcon
                  className="xs:hidden sm:block sm:inline-block px-1"
                  icon={faChevronUp}
                  style={{ color: "#ffffff" }}
                />
              ) : (
                <FontAwesomeIcon
                  className="xs:hidden sm:block sm:inline-block px-1"
                  icon={faChevronDown}
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
            {isSignInPopupVisible && (
              <div className="absolute top-full h-70 xs:w-auto left-0 xs:-mt-1 sm:ml-1 sm:-mt-8 bg-gray-300 text-black rounded-lg">
                <button
                  className="w-full text-center hover:bg-gray-200 bg-blue-500 text-white sm:font-semibold sm:text-lg xs:text-xs py-4 px-5"
                  onClick={hideSignInPopup}
                >
                  SignIn
                </button>
                <button
                  className="w-full text-center p-2 hover:bg-gray-500 xs:font-normal"
                  onClick={hideSignInPopup}
                >
                  Create Account
                </button>
              </div>
            )}
          </p>
          <p
            className="xs:text-xs xs:font-semibold xs:px-2 xs:py-8 xs:ml-2 inline-block 2xl:ml-5 2xl:py-10 lg:py-10 lg:px-3 2xl:text-lg text-white font-bold cursor-pointer relative"
            onMouseEnter={showCartPopup}
            onMouseLeave={hideCartPopup}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
            <button
              type="button"
              className="px-1 font-bold text-white hover:underline hover:text-white inline-block "
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                // window.location.href = 'cart';
              }}
            >
              Cart
              {isCartPopupVisible ? (
                <FontAwesomeIcon
                  className="xs:hidden sm:block sm:inline-block px-1"
                  icon={faChevronUp}
                  style={{ color: "#ffffff" }}
                />
              ) : (
                <FontAwesomeIcon
                  className="xs:hidden sm:block sm:inline-block px-1"
                  icon={faChevronDown}
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
            {isCartPopupVisible && (
              <div className="absolute top-full h-50 w-max right-0 xs:-mt-1  sm:-mt-8 bg-gray-300 text-black rounded-lg">
                <p className="px-6 py-10 text-center">Your cart is empty.</p>
              </div>
            )}
          </p>
        </div>
        <div className="xs:hidden sm:block 2xl:px-5 2xl:-mt-0 lg:px-5 lg:-mt-2">
          <hr className="2xl:my-0 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
        </div>
        <div className="xs:hidden sm:block flex 2xl:-mt-1">
          <p className="2xl:px-6 lg:px-6 2xl:py-3.5 lg:mt-0 2xl:text-lg lg:text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./home");
              }}
            >
              HOME
            </button>
          </p>
          <p
            className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer relative inline-block"
            onMouseEnter={showProductPopup}
            onMouseLeave={hideProductPopup}
          >
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./products");
              }}
            >
              PRODUCTS
              {/* {isProductPopupVisible ? <FontAwesomeIcon className='px-1' icon={faChevronUp} style={{color: "#ffffff",}} /> : <FontAwesomeIcon className='px-1' icon={faChevronDown} style={{color: "#ffffff",}} />}   */}
            </button>
            {/* {isProductPopupVisible && (
              <div className="absolute top-full left-0 mt-1 bg-gray-300 text-black rounded-lg">
                <ul className='h-25 w-30 overflow-y-auto'>
                    {items.map((item, index) => (
                      <button className="w-full text-sm text-left p-2 hover:bg-gray-200 bg-white text-black font-bold py-2 px-2" onClick={hideProductPopup} key={index}>{item}</button>
                    ))}
                </ul>
              </div>
            )} */}
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./myaccount");
              }}
            >
              MY ACCOUNT
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                window.location.href = "tel:1-800-KENCOVE";
                navigate("./articles");
              }}
            >
              ARTICLES
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./contact");
              }}
            >
              CONTACT
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./blog");
              }}
            >
              BLOG
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./events");
              }}
            >
              EVENTS
            </button>
          </p>
          <p className="px-5 py-3.5 text-lg text-white font-bold cursor-pointer inline-block">
            <button
              type="button"
              className="font-bold text-white hover:underline hover:text-white"
              onClick={() => {
                // Add your logic for handling the button click, such as dialing the phone number
                navigate("./jobs");
              }}
            >
              JOBS
            </button>
          </p>
        </div>
      </div>
      {isSearchPopupVisible && (
        <div className="xs:block sm:hidden xs:absolute xs:w-3/5 xs:-mt-8 xs:ml-2">
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
              className="inline-block xs:mt-9 xs:p-2 xs:w-full -ml-1 xs:text-xs xs:text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What are you Looking for Today?"
              required
            />
            <button
              type="submit"
              className="text-white absolute xs:ml-1 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs xs:px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
            <button
              className="absolute xs:mt-10 xs:ml-16"
              onClick={showSearchPopup}
            >
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: "25px", color: "red" }}
              />
            </button>
          </form>
        </div>
      )}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-800">
          <button className="text-white py-4 px-6 w-full" onClick={toggleMenu}>
            Close
          </button>
          <div className="flex flex-col items-center space-y-4 py-4">
            {items.map((item, index) => (
              <button
                key={index}
                className="font-bold hover:underline"
                onClick={() => {
                  toggleMenu();
                  navigate(`/${item.toLowerCase()}`);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

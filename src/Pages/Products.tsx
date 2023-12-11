import React from 'react';
import Hero from '../component/hero';
import Categories from '../component/categories';
import Filters from '../component/filters';
import Rating from '../component/rating';
import Price from '../component/price';
import Avalaiblity from '../component/availability';
import ItemsList from '../component/items';
function FirstColumn() {
  return (
    <div className="column" style={{width:'24%'}}>
      <Categories />
      <Rating />
      <Price/>
      <Avalaiblity/>
    </div>
  );
}

// Create a component for the second column with two different rows
function SecondColumn() {
  return (
    <div className="column 2xl:w-full xs:w-2/3" style={{width:'74%'}}>
      <Filters/>
      <ItemsList/>
    </div>
  );
}


const Products: React.FC = () => {
  return (
    <div className='h-full 2xl:bg-gray-100 xs:bg-red-800 '>
      <Hero />
      <div className='flex 2xl:ml-4 xs:ml-2' style={{paddingRight:'2%'}}>
        <FirstColumn/>
        <SecondColumn/>
      </div>
        

      {/* <div className='flex ml-4'>
        <Categories />
        <Filters data = ''/>
      </div>
      <div className='mt-5 flex ml-4'>
        <Rating />
        <Filters data = ''/>
      </div> */}
    </div>
  );
};

export default Products;

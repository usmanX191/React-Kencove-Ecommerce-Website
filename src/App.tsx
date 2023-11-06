import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Products from '../src/Pages/Products';
import MyAccount from '../src/Pages/MyAccount';
import Articles from '../src/Pages/Articles';
import Contact from '../src/Pages/Contact';
import Blog from '../src/Pages/Blog';
import Events from '../src/Pages/Events';
import Jobs from '../src/Pages/Jobs';
import ItemDetails from './Pages/itemDetails';
import Navbar from './component/navbar'; // Make sure the path is correct
import './App.css';

function App() {
  
  return (
    <Router>
    <div className='bg-gray-100 h-full w-full'>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" element={<Products />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/articles" Component={Articles} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/products/ItemDetail/" element={<ItemDetails/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

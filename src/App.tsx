import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import MyAccount from './pages/MyAccount';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import ItemDetails from './pages/itemDetails';
import Navbar from './component/navbar'; // Make sure the path is correct
import './App.css';

function App() {
  
  return (
    <Router>
    <div className='bg-gray-100 h-full w-full'>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/myaccount" Component={MyAccount} />
          <Route path="/articles" Component={Articles} />
          <Route path="/contact" Component={Contact} />
          <Route path="/blog" Component={Blog} />
          <Route path="/events" Component={Events} />
          <Route path="/jobs" Component={Jobs} />
          <Route path="/products/ItemDetail/" Component={ItemDetails}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

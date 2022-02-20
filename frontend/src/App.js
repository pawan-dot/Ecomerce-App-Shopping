
import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreNavbar from './component/layout/Header/PreNavbar';
import Navbar from './component/layout/Header/Navbar';
// import Slider from './component/Slider/Slider';
// import data from './data/data.json'
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import Signup from "./component/User/Signup"
import Login from './component/User/Login';
import store from "./store"
import { loadUser } from './actions/userAction';

import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {


    store.dispatch(loadUser);

    //getStripeApiKey();
  }, [loadUser]);

  return (
    <>
      <BrowserRouter>

        <PreNavbar />

        <Navbar />
        {/* <Slider start={data.banner.start} /> */}
        {/* <Slider start={banner.start} /> */}

        <Routes>
          {isAuthenticated && <UserOptions user={user} />}
          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={< ProductDetails />} />
          <Route path="/products" element={< Products />} />
          <Route path="/products/:keyword" element={< Products />} />
          <Route path="/search" element={< Search />} />
          {/* user route */}
          <Route path="/signup" element={< Signup />} />
          <Route path="/login" element={< Login />} />



        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}
export default App;

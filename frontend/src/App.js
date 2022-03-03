
import React, { useEffect, useState } from 'react'
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
import Profile from "./component/User/Profile.js";
//import ProtectedRoute from './component/Route/ProtectedRoute';
import { useSelector } from "react-redux";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword.js";
// cart
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping";
//order
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";//for paymeny api
//payment
import Payment from "./component/Cart/Payment.js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
//order
import OrderSuccess from "./component/Cart/OrderSuccess";

import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
//admin route
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList.js";
//import UpdateUser from "./component/Admin/UpdateUser"
function App() {


  const { user, isAuthenticated } = useSelector((state) => state.user);
  //for payment
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {


    store.dispatch(loadUser());

    //for payment
    getStripeApiKey();

  }, []);

  return (
    <>

      <BrowserRouter>
        <PreNavbar />
        <Navbar />
        <Routes>

          <Route element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={< ProductDetails />} />
          <Route path="/products" element={< Products />} />
          <Route path="/products/:keyword" element={< Products />} />
          <Route path="/search" element={< Search />} />

          {/* user route */}
          <Route path="/signup" element={< Signup />} />
          <Route path="/login" element={< Login />} />
          {isAuthenticated && <Route path="/account" element={< Profile />} />}
          {isAuthenticated && <Route path="/update/Profile" element={< UpdateProfile />} />}
          {isAuthenticated && <Route path="/password/update" element={< UpdatePassword />} />}
          <Route path="/password/forgot" element={< ForgotPassword />} />
          <Route exact path="/password/reset/:token" element={ResetPassword} />
          <Route exact path="/cart" element={< Cart />} />
          {isAuthenticated && <Route path="/shipping" element={< Shipping />} />}
          {isAuthenticated && <Route path="/order/confirm" element={< ConfirmOrder />} />}

          {/* {isAuthenticated && <Route path="/process/payment" element={< Payment />} />} */}

          {isAuthenticated && <Route path="/success" element={< OrderSuccess />} />}
          {isAuthenticated && <Route path="/orders" element={< MyOrders />} />}
          {isAuthenticated && <Route path="/order/:id" element={< OrderDetails />} />}

          {/* admin  */}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/dashboard" element={< Dashboard />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/products" element={< ProductList />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/product/create" element={< NewProduct />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/product/:id" element={< UpdateProduct />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/orders" element={< OrderList />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/order/:id" element={< ProcessOrder />} />}
          {isAuthenticated && user.role == "admin" && <Route path="/admin/users" element={< UsersList
          />} />}


        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}
export default App;

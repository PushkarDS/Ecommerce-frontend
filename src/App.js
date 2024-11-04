import Payments from "./components/Cart/Payments.js";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import ProtectedRoute from "./components/Route/ProtectedRoute"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
// import Page from "./components/Login/Page";
import ProductDetails from "./components/Product/ProductDetails.js";
// import { BrowserRouter as Router, Route, Outlet, Routes, BrowserRouter  } from "react-router-dom";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
// import PaymentWithNavigation  from './components/Cart/paymentNaviagation'
import UserOptions from "./components/layout/Header/UserOptions";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import Dashboard from "./components/Admin/Dashboard.js";
import ProductList from "./components/Admin/ProductList.js";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
import NotFound from "./components/layout/Not Found/NotFound";
// import Loader from "./components/layout/Loader/Loader";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import WebFont from "webfontloader";
import React from "react";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:4000/api/v1";
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("http://localhost:4000/api/v1/stripeapikey");
  //   setStripeApiKey(data.stripeApiKey);
  // }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        
        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <PaymentWithNavigation/>
          </Elements>
        )} */}

        {/* /* <Outlet/> */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/search" element={<Search />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="/login" element={<LoginSignUp />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/account" element={<Profile />} />

        <Route path="/me/update" element={<UpdateProfile />} />

        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/process/payment" element={<Payments />} />
        <Route path="/shipping" element={<Shipping />} />

        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/orders" element={<MyOrders />} />

        <Route path="/order/confirm" element={<ConfirmOrder />} />

        <Route path="/order/:id" element={<OrderDetails />} />

        <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard />} />
        <Route
          path="/admin/products"
          isAdmin={true}
          element={<ProductList />}
        />
        <Route path="/admin/product" isAdmin={true} element={<NewProduct />} />

        <Route
          path="/admin/product/:id"
          isAdmin={true}
          element={<UpdateProduct />}
        />
        <Route path="/admin/orders" isAdmin={true} element={<OrderList />} />

        <Route
          path="/admin/order/:id"
          isAdmin={true}
          element={<ProcessOrder />}
        />
        <Route path="/admin/users"  element={<UsersList />} />

        <Route path="/admin/user/:id" isAdmin={true} element={<UpdateUser />} />

        <Route
          path="/admin/reviews"
          isAdmin={true}
          element={<ProductReviews />}
        />

        <Route
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;

//  {/* <Route  path="/" element={<<Home />}></Route>
//       <Route  path="/product/:id" element={<<ProductDetails/>}></Route>
//       <Route  path="/login" element={<<Login />}></Route>
//       <Route  path="/register" element={<<Register />}></Route> */}

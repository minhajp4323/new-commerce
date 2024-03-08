import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Login from "./Components/Registration/Login";
import Signin from "./Components/Registration/Signin";
import Shop from "./Components/Products/Shop";
import { Product } from "./Components/Products/PruductsList";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import Search from "./Components/Search";
import Men from "./Components/Products/Men";
import Women from "./Components/Products/Women";
import Kids from "./Components/Products/Kids";
// Admin
import AdminLogin from "./Components/AdminSide/AdminLogin";
import AdminHome from "./Components/AdminSide/AdminHome";
import SideBar from "./Components/AdminSide/SideBar";
import Users from "./Components/AdminSide/Users";
import Vieworder from "./Components/AdminSide/ViewOrder";
import AdminProduct from "./Components/AdminSide/AdminProduct";
import EditPro from "./Components/AdminSide/EditPro";
import AddProduct from "./Components/AdminSide/Addproduct";

export const Data = createContext();

function Main() {
  const [userData, setUserData] = useState([]);
  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [product, setProduct] = useState(Product);
  const [cart, setCart] = useState();
  const [search, setSearch] = useState("");
  const [vieworder, setvieworder] = useState([]);
  console.warn(userData);
  return (
    <div>
      <Data.Provider
        value={{
          userData,
          setUserData,
          login,
          setLogin,
          loginUser,
          setLoginUser,
          product,
          setProduct,
          cart,
          setCart,
          search,
          setSearch,
          vieworder,
          setvieworder,
        }}
      >
        <Toaster position="top-center" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/search" element={<Search />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/users" element={<Users />} />
          <Route path="/vieworder" element={<Vieworder />} />
          <Route path="/adminpro" element={<AdminProduct />} />
          <Route path="/editpro/:id" element={<EditPro />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        {/* <Signin /> */}
        <Footer />
      </Data.Provider>
    </div>
  );
}

export default Main;

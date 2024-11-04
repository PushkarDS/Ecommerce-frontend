import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ContactIcon from "@mui/icons-material/ContactPage";
import AboutIcon from "@mui/icons-material/Pages";
import StoreIcon from "@mui/icons-material/Store";
import LoginIcon from "@mui/icons-material/Login";
// import PersonIcon from '@mui/icons-material/Person';
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import logo from "../../../images/trendix.jpeg";

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  const { cartItems } = useSelector((state) => state.cart);
  const numberOfCartItems = cartItems.length;

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <>
      <header>
        {/* <div className="top-header">
          <div className="top-info">
            <div
              className="header-icon material-symbols-sharp"
              style={{ height: 2 }}
            >
              call
            </div>
            <sup>+91 458 654 528</sup>
          </div>
          
        </div> */}
        <div className="navigation-container">
          <div className="navigation-left-side">
            <div className="toggle" onClick={openNav}>
              ☰
            </div>
            <div className="navigation-mid">
              {" "}
              <Link to="/">
                <img src={logo} className="logo" alt="" />
              </Link>
            </div>
          </div>
          <div>
            <form className="searchInHeader" onSubmit={searchSubmitHandler}>
              <input
                type="text"
                placeholder="Search a Product ..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="navigation-side">
            <Link to="/search" className="info">
              <SearchIcon className="header-icon-middle" />
            </Link>
            <Link to="/cart" className="info">
              <Badge badgeContent={numberOfCartItems} color="secondary">
                <ShoppingBag color="action" className="header-icon-middle" />
              </Badge>
            </Link>
            <Link to="/account" className="info">
              <PersonIcon className="header-icon-middle" />
            </Link>
          </div>
        </div>
        <div className="space"></div>
        <nav id="myNav" className="overlay">
          <button className="closebtn" onClick={closeNav}>
            ×
          </button>
          <div className="nav-logo">
            <img id="logo" src={logo} alt="" />{" "}
            {/* <div className="logo-t">
              {" "}
              <> Xchange</>
            </div> */}
          </div>
          <div className=" overlay-content">
            <div className="nav-link-header">
              <Link className="nav-link-header" to="/">
                <HomeIcon />
                Home
              </Link>
            </div>
            <div className="nav-link-header">
              <Link className="nav-link-header" to="/about">
                <AboutIcon />
                About
              </Link>
            </div>
            <div className="nav-link-header">
              {isAuthenticated?(<Link className="nav-link-header" to="/account">
                <PersonIcon />
                Account
              </Link>):(<Link className="nav-link-header" to="/login">
                <LoginIcon />
                Login
              </Link>)}
            </div>
            <div className="nav-link-header">
              <Link className="nav-link-header" to="/products">
                <StoreIcon />
                Product
              </Link>
            </div>
            <div className="nav-link-header">
              <Link className="nav-link-header" to="/contact">
                <ContactIcon />
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="space"></div>
      </header>
    </>
  );
}

export default Header;

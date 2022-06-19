import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "@mui/icons-material";
import { useStateValue } from "./components/StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo "
          alt="amazon"
        />
      </Link>
      <div className="header__search">
        <input
          type="text"
          className="header__searchbar"
          placeholder="search for products"
        />
        <Search className="header__searchicon" />
      </div>
      <div className="header__actions">
        <Link className="header__link" to="/login">
          <div className="header__text">
            <span className="header__text1">Hello</span>
            <span className="header__text2">Sign in</span>
          </div>
        </Link>

        <Link className="header__link" to="/login">
          <div className="header__text">
            <span className="header__text1">returns</span>
            <span className="header__text2">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__basket">
            <ShoppingCart />
            <span className="header__count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

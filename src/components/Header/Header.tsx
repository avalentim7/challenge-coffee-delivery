import React from "react";
import "./Header.scss";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="HeaderButtons">
        <div className="HeaderButtons--Location">
          <MapPin size={22} weight="fill" />
          <span className="text-s">São Paulo, SP</span>
        </div>
        <Link to="/checkout" className="HeaderButtons--Cart">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </div>
    </div>
  );
}

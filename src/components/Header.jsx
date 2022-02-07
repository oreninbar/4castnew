import React from "react";
import logo from "../assets/4cast.jpg";
import { useAppContext } from "../hooks/useAppContext";
import '../style/header.css'

const Header = () => {
  const { userAllAnswers } = useAppContext();

  return (
    <div className="header-container">
      <img src={logo} alt="logo-img" className="logo"/>
      <h1 className="user-name">{userAllAnswers.get("header")}</h1>
    </div>
  );
};

export default Header;

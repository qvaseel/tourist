import logo from "../logo.png";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} className="logo_img" />
        <p className="logo_text">Админ-панель</p>
      </div>
      <nav>
        <NavLink className="nav_item" to="/clients" >Клиенты</NavLink>
        <NavLink className="nav_item" to="/tours">Туры</NavLink>
        <NavLink className="nav_item" to="/excursions">Экскурсии</NavLink>
      </nav>
    </header>
  );
};

export default Header;

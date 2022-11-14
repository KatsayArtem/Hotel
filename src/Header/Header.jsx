import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  HOSTEL_ROUTE,
  ABOUT_ROUTE,
  NUMBERS_ROUTE,
  CONTACTS_ROUTE,
} from "../router/path";

const Header = () => {
  return (
    <div className="container_header">
      <div className="header_ds">
        <div className="pages_logo">
          <Link to={HOSTEL_ROUTE}>
            <div className="logo"></div>
          </Link>
          <h1 className="number_hotel">+7 (999)-999-99-99</h1>
        </div>
        <div className="pages">
          <Link to={ABOUT_ROUTE} className="text_decoration">
            <div className="about">Про отель</div>
          </Link>
          <Link to={NUMBERS_ROUTE} className="text_decoration btn_pages">
            <div className="numbers">Номера</div>
          </Link>
          <Link to={CONTACTS_ROUTE} className="text_decoration btn_pages">
            <div className="contacts">Контакты</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

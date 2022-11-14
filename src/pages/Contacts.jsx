import React from "react";
import "./contacts.css";
import Header from "../Header/Header";

const Contacts = () => {
  return (
    <div className="background-contacts">
      <Header />
      <div className="container-contains">
        <div className="ds-column">
          <div>
            <h1 className="white contacts-title">Адрес</h1>
            <h2 className="white contacts-text">
              Черноморская улица, 13Г, Сочи,
              <br /> Краснодарский край, 354002
            </h2>
          </div>
          <div>
            <h1 className="white contacts-title contacts-mr-top">
              Горячая линия
            </h1>
            <h2 className="white contacts-text">+7 (999)-999-99-99</h2>
            <h2 className="white contacts-text">+7 (910)-963-88-88</h2>
            <h2 className="white contacts-text">+7 (915)-988-72-72</h2>
          </div>
          <div>
            <h1 className="white contacts-title contacts-mr-top">работаем</h1>
            <h2 className="white contacts-text">с 8:00 до 22:00</h2>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a57f08139bb05addea6bd79a1511ffff2c00576073a5e0ddb0886d8ba1801f5&amp;source=constructor"
          width="1132"
          height="626"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;

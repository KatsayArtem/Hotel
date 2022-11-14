import React from "react";
import "./numbers.css";
import Header from "../Header/Header";
import numFirstSquare from "../imges/firstPageSlider/FirstSlideDOWN.png";
import numFirst from "../imges/numbers/vip.png";
import numSecondSquare from "../imges/firstPageSlider/SecondSlideDOWN.png";
import numSecond from "../imges/numbers/vip+.png";
import numThirdSquare from "../imges/firstPageSlider/ThirdSlideDOWN.png";
import numThird from "../imges/numbers/luxe.png";
import numFourthSquare from "../imges/firstPageSlider/FourthSlideDOWN.png";
import numFourth from "../imges/numbers/business.png";
import { Link } from "react-router-dom";
import { HOSTEL_ROUTE } from "../router/path";
import stars_3 from "../imges/star/3stars.png";
import stars_3_5 from "../imges/star/3_5stars.png";
import stars_4 from "../imges/star/4stars.png";
import stars_5 from "../imges/star/5stars.png";

const Numbers = () => {

  return (
    <div className="background-numbers">
      <Header />
      <div className="container">
        {/* block 1 */}
        <div className="ds-flex mr-bottom-num">
          <img
            src={numFirstSquare}
            style={{ width: "450px", height: "450px" }}
          ></img>
          <div className="mr-left-num ds-column">
            <img
              src={numFirst}
              style={{ width: "600px", height: "225px" }}
            ></img>
            <div>
              <h1 className="num-title">Номер Vip</h1>
              <h2 className="num-text">
                Эксклюзивный дизайн и насыщенные яркие <br /> тона создают
                неповторимую атмосферу <br /> сочетания стиля и комфорта. Vip
                номер с <br /> потрясающим видом на пляж сделает
                <br /> Ваше прибывание в нашем отеле приятным.
              </h2>
            </div>
          </div>
          <img src={stars_3} className="mr-left-num img-num" />
        </div>
        {/* block 2 */}
        <div className="ds-flex mr-bottom-num right">
          <img src={stars_3_5} className="mr-right-num img-num" />
          <div className="mr-right-num ds-column">
            <img
              src={numSecond}
              style={{ width: "600px", height: "225px" }}
            ></img>
            <div>
              <h1 className="num-title num-title-right">Номер Vip+</h1>
              <h2 className="num-text num-text-right">
                Комнаты оборудованы индивидуальной
                <br /> системой климат контроля, выходом в <br /> интернет. Vip+
                номер с потрясающим
                <br /> видом на пляж сделает Ваше прибывание <br /> в нашем
                отеле приятным и незабываемым.
              </h2>
            </div>
          </div>
          <img
            src={numSecondSquare}
            style={{ width: "450px", height: "450px" }}
          ></img>
        </div>
        {/* block 3 */}
        <div className="ds-flex mr-bottom-num">
          <img
            src={numThirdSquare}
            style={{ width: "450px", height: "450px" }}
          ></img>
          <div className="mr-left-num ds-column">
            <img
              src={numThird}
              style={{ width: "600px", height: "225px" }}
            ></img>
            <div>
              <h1 className="num-title">Номер Vip</h1>
              <h2 className="num-text">
                Эксклюзивный дизайн и насыщенные яркие <br /> тона создают
                неповторимую атмосферу <br /> сочетания стиля и комфорта. Vip
                номер с <br /> потрясающим видом на пляж сделает
                <br /> Ваше прибывание в нашем отеле приятным.
              </h2>
            </div>
          </div>
          <img src={stars_4} className="mr-left-num img-num" />
        </div>
        {/* block 4 */}
        <div className="ds-flex mr-bottom-num right">
          <img src={stars_5} className="mr-right-num img-num" />
          <div className="mr-right-num ds-column">
            <img
              src={numFourth}
              style={{ width: "600px", height: "225px" }}
            ></img>
            <div>
              <h1 className="num-title num-title-right">Номер Vip+</h1>
              <h2 className="num-text num-text-right">
                Комнаты оборудованы индивидуальной
                <br /> системой климат контроля, выходом в <br /> интернет. Vip+
                номер с потрясающим
                <br /> видом на пляж сделает Ваше прибывание <br /> в нашем
                отеле приятным и незабываемым.
              </h2>
            </div>
          </div>
          <img
            src={numFourthSquare}
            style={{ width: "450px", height: "450px" }}
          ></img>
        </div>
      </div>
      <footer className="footer-num">
        <Link to={HOSTEL_ROUTE}>
          <button className="btn-num-footer">Подобрать номер</button>
        </Link>
      </footer>
    </div>
  );
};

export default Numbers;

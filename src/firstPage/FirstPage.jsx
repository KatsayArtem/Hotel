import React, { useEffect } from "react";
import BackgroundVideo from "./BackgroundVideo";
import "./backgroundVideo.css";
import "./firstPage.css";
import SliderUP from "./SliderUP";
import SliderDOWN from "./SliderDOWN";
import SliderText from "./SliderText";
import TakeNumber from "./TakeNumber";
import Header from "../Header/Header";

const firstPage = () => {

  function clickCall() {
    const blockTelephon = document.querySelector(".telephon_number_block");
    const call = document.querySelector(".call");
    const question = document.querySelector(".question");

    question.classList.toggle("active_flex");
    call.classList.toggle("circle_phone");
    blockTelephon.classList.toggle("active_flex");
    question.classList.toggle("telephon_active");
  }

  function click(event) {
    const telephonNumberBlock = event.target.closest(".telephon_number_block");
    const counter = telephonNumberBlock.querySelector("[data-num]");
    counter.value = "";
  }

  return (
    <div>
      <BackgroundVideo />
      <div className="backgroundBlack"></div>
      <Header />
      <div className="background_container">
        <div className="container_call">
          <div className="ds-flex">
            <div className="ds-col">
              <SliderUP />
              <div className="ds-flex">
                <div className="slider_second_block">
                  <SliderDOWN />
                </div>
                <div className="slider_third_text">
                  <SliderText />
                </div>
              </div>
            </div>
            <TakeNumber />
            {/* call */}
            <div>
              <div className="call" onClick={clickCall}>
                <div className="phone"></div>
              </div>
              <div className="question">
                <h1 className="have_a_question">Есть вопрос ?</h1>
              </div>
              <div className="telephon_number_block">
                <h1 className="phone_number_first">
                  Оставьте свой номер телефона
                </h1>
                <h1 className="phone_number_second">
                  Наш оператор свяжется с Вами!
                </h1>
                <input
                  data-num=""
                  className="input_number"
                  type="number"
                  placeholder="+7 (999)-999-99-99"
                ></input>
                <button onClick={click} className="btn_number">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstPage;

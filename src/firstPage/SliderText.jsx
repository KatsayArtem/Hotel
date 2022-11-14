import React, { useState, useEffect } from "react";
import "./sliderText.css";

const text = [
  <div>
    <h1 className="title-slider white">Номер Vip</h1>
    <p className="text-slider white">
    ванная<br/>мини-бар<br/>предметы личной гигиены <br/>полотенца<br/>фен<br/>чайник<br/>телефон<br/>wi-fi
    </p>
    </div>,
  <div>
    <h1 className="title-slider white">Номер Vip+</h1>
    <p className="text-slider white">
    ванная <br/> мини-бар <br/> предметы личной гигиены <br/>полотенца<br/>фен<br/>чайник<br/>телефон<br/>wi-fi<br/>утюг<br/>кондиционер<br/>телевизор
    </p>
    </div>,
  <div>
    <h1 className="title-slider white">Номер Luex</h1> 
    <p className="text-slider white">
    ванная <br/> мини-бар <br/> предметы личной гигиены <br/>полотенца<br/>фен<br/>чайник<br/>телефон<br/>wi-fi<br/>утюг<br/>кондиционер<br/>телевизор<br/>светоизолирующие шторы<br/>чай<br/>вода
    </p>
    </div>,
  <div className="title-slider white">
    <h1>Номер Business</h1>
    <p className="text-slider white">
    ванная <br/> мини-бар <br/> предметы личной гигиены <br/>полотенца<br/>фен<br/>чайник<br/>телефон<br/>wi-fi<br/>утюг<br/>кондиционер<br/>телевизор<br/>светоизолирующие шторы<br/>чай<br/>вода<br/>сейф<br/>две кровати
    </p>
    </div>,
];

export default function SliderText() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === text.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 5000);
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevTextIndex = activeIndex ? activeIndex - 1 : text.length - 1;
  // Вычисляем индекс следующего слайда
  const nextTextIndex = activeIndex === text.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider_text">
      <div className="slider-text slider-text-prev" key={prevTextIndex}>
        {text[prevTextIndex]}
      </div>
      <div className="slider-text" key={activeIndex}>
        {text[activeIndex]}
      </div>
      <div className="slider-text slider-text-next" key={nextTextIndex}>
        {text[nextTextIndex]}
      </div>
    </div>
  );
}
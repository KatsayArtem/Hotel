import React, { useState, useEffect } from "react";
import slide1 from "../imges/firstPageSlider/FirstSlideDOWN.png";
import slide2 from "../imges/firstPageSlider/SecondSlideDOWN.png";
import slide3 from "../imges/firstPageSlider/ThirdSlideDOWN.png";
import slide4 from "../imges/firstPageSlider/FourthSlideDOWN.png";
import "./sliderDOWN.css";

const img = [
  <img key={slide1} src={slide1} />,
  <img key={slide2} src={slide2} />,
  <img key={slide3} src={slide3} />,
  <img key={slide4} src={slide4} />,
];

export default function SliderUP() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 5000);
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="sliderd">
      <div className="slider-imgd slider-img-prevd" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-imgd" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-imgd slider-img-nextd" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}

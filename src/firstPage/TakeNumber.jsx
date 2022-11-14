import React from "react";
import "./takeNumber.css";
import smallVip from "../imges/firstPageSlider/FirstSlideUP.png";
import smallVipPlus from "../imges/firstPageSlider/SecondSlideUP.png";
import smallLuxe from "../imges/firstPageSlider/ThirdSlideUP.png";
import smallBusiness from "../imges/firstPageSlider/FourthSlideUP.png";

const nums = [
  {
    src: smallVip,
    title: "Vip",
    people: "2 местный",
    price: 3500,
  },
  {
    src: smallVipPlus,
    title: "Vip+",
    people: "4 местный",
    price: 4800,
  },
  {
    src: smallLuxe,
    title: "Luxe",
    people: "6 местный",
    price: 6500,
  },
  {
    src: smallBusiness,
    title: "Business",
    people: "8 местный",
    price: 8000,
  },
];

const weekNumArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Calendar = ({
  firstDay,
  setFirstDay,
  lastDay,
  setlastDay,
  setBook,
  setDays,
  days,
  day,
}) => {
  React.useEffect(() => {
    if (firstDay > 0 && lastDay > 0) {
      setBook(`Вы забронировали на: ${days} ${day}`);
      if (lastDay > firstDay) {
        setDays(lastDay - firstDay);
      } else {
        alert("выберите другие даты");
        window.location.reload();
      }
    }
    document.querySelectorAll(".weekDayBtn").forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.add("active-btn");
        if (lastDay === "__") {
          setBook("Выберите день выезда");
        }
      });
    });

    weekNumArray.forEach((nums) => {
      if (firstDay < nums && lastDay > nums) {
        document.querySelectorAll(".weekDayBtn").forEach((el) => {
          if (nums === +el.textContent) {
            el.classList.add("active-btn");
          }
        });
      }
    });
  });

  return (
    <>
      <div className="week">
        <h2 className="weekDay">Пн</h2>
        <h2 className="weekDay">Вт</h2>
        <h2 className="weekDay">Ср</h2>
        <h2 className="weekDay">Чт</h2>
        <h2 className="weekDay">Пт</h2>
        <h2 className="weekDay">Сб</h2>
        <h2 className="weekDay">Вс</h2>
      </div>
      <div className="weekBtn">
        {weekNumArray.map((numArray) => (
          <button
            key={numArray}
            onClick={() => {
              if (firstDay === "__") {
                setFirstDay(numArray);
              } else {
                setlastDay(numArray);
              }
            }}
            className="weekDayBtn"
          >
            {numArray}
          </button>
        ))}
      </div>
    </>
  );
};

const Number = ({
  setNumber,
  setPrice,
  price,
  days,
  setTotal,
  setTotalText,
}) => {
  React.useEffect(() => {
    setTotal(days * price);
    setTotalText(days * price);
  }, [days, price]);

  return (
    <>
      {nums.map((num) => (
        <button
          key={num.title}
          className="btn-numbers"
          onClick={() => {
            setPrice(num.price);
            setNumber(num.title);
          }}
        >
          <div className="num-pos">
            <img
              key={num.src}
              src={num.src}
              style={{ width: "78px", marginLeft: "5px" }}
            ></img>
            <h1 key={num.title} style={{ marginLeft: "10px" }}>
              {num.title}
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <h2 key={num.people} style={{ marginRight: "20px" }}>
              {num.people}
            </h2>
            <h2 key={num.price} style={{ marginRight: "10px" }}>
              {num.price}₽/ночь
            </h2>
          </div>
        </button>
      ))}
    </>
  );
};

const Book = ({ number, firstDay, lastDay, total }) => {
  function clickPickUP() {
    const bookOnline = document.querySelector(".book_online");
    const pickNumberContainer = document.querySelector(
      ".pick_number_container"
    );
    const up = document.querySelector(".up");

    bookOnline.classList.toggle("pos_top");
    pickNumberContainer.classList.toggle("active-pick-up");
    up.classList.toggle("rotate");
  }

  return (
    <div className="book_online">
      <div className="book-ds">
        <div className="days">
          <h3 className="dates_title">Даты</h3>
          <div className="ds-flex">
            <div className="dates">{firstDay}</div>
            <div className="dates mr-dash">-</div>
            <div className="dates">{lastDay}</div>
          </div>
        </div>
        <div>
          <h3 className="number_title">Номер</h3>
          <div className="ds-flex">
            <div className="number">{number}</div>
          </div>
        </div>
        <div>
          <h3 className="total_title">Итог</h3>
          <div className="ds-flex">
            <div className="total">{total} ₽</div>
          </div>
        </div>
        <div onClick={clickPickUP} className="btn_up">
          <h3 className="pick_up">
            Подобрать
            <br />
            номер
          </h3>
          <div className="up"></div>
        </div>
      </div>
    </div>
  );
};

const TakeNumber = () => {
  const [days, setDays] = React.useState(0);
  const [day, setDay] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [totalText, setTotalText] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [number, setNumber] = React.useState("_______");
  const [book, setBook] = React.useState("Выберите день заезда");
  const [firstDay, setFirstDay] = React.useState("__");
  const [lastDay, setlastDay] = React.useState("__");
  const [booking, setBooking] = React.useState("Забронировать");
  const [phone, setPhone] = React.useState("");

  const clickBookAction = () => {
    setBooking("Продолжить");
    if (booking === "Забронировать") {
      document.querySelector(".prograss-bar-next").classList.add("active-bar");
      document.querySelector(".container-setnumber").classList.add("none");
      document.querySelector(".phone-num").classList.remove("none");
    } else {
      alert(
        `Забронировано на: ${days} ${day}\rЗабронирован номер: ${number}\rНа сумму: ${total} ₽\rТелефон: ${phone}`
      );
      window.location.reload();
    }
  };

  const hendlerChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const dayNumFirst = [1, 21, 31];
  const dayNumSecond = [2, 3, 4, 22, 23, 24];
  const dayNumThird = [
    0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 26, 27, 28,
    29, 30,
  ];

  React.useEffect(() => {
    dayNumFirst.forEach((el) => {
      if (days == el) {
        setDay("день");
      }
    });
    dayNumSecond.forEach((el) => {
      if (days == el) {
        setDay("дня");
      }
    });
    dayNumThird.forEach((el) => {
      if (days == el) {
        setDay("дней");
      }
    });
  });

  return (
    <>
      <Book
        lastDay={lastDay}
        firstDay={firstDay}
        number={number}
        total={total}
        days={days}
        setDays={setDays}
      />
      <div className="pick_number_container">
        <div className="phone-num none">
          <div className="contaner-phone">
            <div className="block-phone">
              <h1 className="title-up">Последний штрих...</h1>
              <h1 className="title-phone-num">
                Чтобы забронировать номер оствьте свой номер телефона, наш
                оператор свяжется с Вами
              </h1>
              <h2 className="text-phone-num">
                Для Вас звонок будет бесплатный*
              </h2>
              <h3 className="text-phone-num">
                Разговор будет записан*
                <br /> в целях безопасности
              </h3>
              <input
                type="number"
                className="inpt-phone-num"
                placeholder="+7 (999)-999-99-99"
                value={phone}
                onChange={hendlerChangePhone}
                min="7"
              />
            </div>
          </div>
        </div>
        <div className="container-setnumber">
          <div className="center">
            <h1 className="book-on">{book}</h1>
            <div className="data-block">
              <Calendar
                days={days}
                setDays={setDays}
                setBook={setBook}
                firstDay={firstDay}
                lastDay={lastDay}
                setlastDay={setlastDay}
                setFirstDay={setFirstDay}
                day={day}
              />
            </div>
            <h1 className="book-number-title">Номер</h1>
            <div className="numbers-book-back">
              <Number
                setNumber={setNumber}
                setPrice={setPrice}
                setTotal={setTotal}
                days={days}
                price={price}
                total={total}
                setTotalText={setTotalText}
              />
            </div>
          </div>
        </div>
        <div className="ds bottom-btns">
          <div>
            <h1 className="total-book-title">Итого</h1>
            <div className="total-book">{totalText} ₽</div>
          </div>
          <div>
            <div className="ds">
              <div className="prograss-bar-book active-bar"></div>
              <div className="prograss-bar-next"></div>
            </div>
            <button onClick={clickBookAction} className="book-btn">
              {booking}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeNumber;

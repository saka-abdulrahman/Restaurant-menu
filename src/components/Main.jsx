import { useState } from "react";
import { RESTURANTMENU } from "../data";

export default function Main({ isDark, orders, setOrders }) {
  const main = `   mt-24 p-[50px] grid  grid-cols-3 gap-[74px] xl:grid-cols-4`;

  return (
    <div className={main}>
      {RESTURANTMENU.map((afood) => (
        <Cart
          key={afood.id}
          foodData={afood}
          isDark={isDark}
          orders={orders}
          setOrders={setOrders}
        />
      ))}
    </div>
  );
}

function Cart({ foodData, isDark, orders, setOrders }) {
  const cart = ` ${
    isDark ? "bg-dark3" : "bg-light3"
  }  flex flex-col items-center p-[22px] shadow-lg overflow-hidden  `;

  const img = `flex flex-col overflow-scroll `;
  const foodTitle = ` ${
    isDark ? "bg-dark2" : "bg-light2"
  } relative text-center `;
  const foodTitleBtn = `z-10 ${
    isDark ? "text-orange-400 bg-dark1" : "text-light4 bg-light1"
  } hover:scale-110 hover:opacity-80 rounded-full transition-all p-1 material-symbols-outlined absolute left-4 top-[50%] -translate-y-1/2 text-[35px]`;
  const foodTitleText = ` ${
    isDark ? "text-orange-400" : "text-light4"
  } text-[45px] -translate-y-[3px]`;

  const price = `text-light2 text-[50px]`;
  return (
    <div className={cart}>
      <div className={img}>
        <img src={foodData.image} />
        <div className={foodTitle}>
          <button className={foodTitleBtn}>visibility</button>
          <h3 className={foodTitleText}>{foodData.name}</h3>
        </div>
      </div>

      <div>
        <h4 className={price}>
          <span lassName={price}>{foodData.price}</span>
          {foodData.priceType}
        </h4>
      </div>

      <FoodCounter orders={orders} setOrders={setOrders} foodData={foodData} />
    </div>
  );
}

function FoodCounter({ orders, setOrders, foodData }) {
  const [counter, setcounter] = useState(0);

  const foodcounter = `flex row items-center justify-center`;
  const counterStyel = ` bg-[#DE5151] flex text-[60px] text-light2`;
  const title = ` ${
    counter < 10 ? "pl-[60px] pr-[60px]" : "pl-[45px] pr-[45px] "
  }`;
  const btns = `flex flex-col justify-center items-center `;

  //   .triangle {
  //     width: 0px;
  //     height: 0px;
  //     border-style: solid;
  //     border-width: 0 100px 150px 100px;
  //     border-color: transparent transparent #FF4532 transparent;
  //     transform: rotate(0deg);
  //  }

  const btn = ` bg-light2  translition-all w-[40px] h-[48.5px] text-black text-4xl hover:opacity-90 pl-1 pr-1`;
  const order = ` text-light1 bg-[#EB6440] text-[50px] p-4 pb-6 pt-6 mb-6 translate-y-[25px] `;
  /////
  const up = () => {
    counter === 20
      ? alert("can't order more then 20")
      : setcounter(counter + 1);
  };

  const down = () => {
    counter === 0
      ? alert("can't order more less then 1")
      : setcounter(counter - 1);
  };
  const orderFun = () => {
    if (counter === 0) {
      return;
    }

    const newOrder = {
      id: foodData.id,
      title: foodData.name,
      image: foodData.image,
      price: foodData.price,
      priceType: foodData.priceType,
      countera: counter,
    };

    const orderExists = orders.some((order) => order.id === newOrder.id);

    if (orderExists) {
      const updatedOrders = orders.map((item) => {
        if (item.id === newOrder.id) {
          return {
            ...item,
            countera: counterFunction(counter, item.countera),
          };
        }
        return item;
      });
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, newOrder]);
    }

    setcounter(0);
  };

  const counterFunction = (counter, countera) => {
    if (countera + counter > 20) {
      alert(
        `can't be more than 20, ${
          20 - countera === 0 ? "no pc left" : 20 - countera
        } pc left`
      );
      return countera;
    } else {
      return countera + counter;
    }
  };

  return (
    <div className={foodcounter}>
      <div className={counterStyel}>
        <span className={title}>{counter ? counter : null}</span>
        <div className={btns}>
          <button onClick={up} className={btn}>
            +
          </button>
          <button onClick={down} className={btn}>
            -
          </button>
        </div>
      </div>
      <button onClick={orderFun} className={order}>
        order
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Card({
  orders,
  setOrders,
  isCardActive,
  setIsCardActive,
  isDark,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = orders.reduce(
      (sum, order) => sum + order.price * order.countera,
      0
    );
    setTotalPrice(total);
  }, [orders]);

  // style
  const cartS = `z-50 fixed w-1/2 h-[60vh] top-[20vh] left-1/2 -translate-x-1/2 ${
    isCardActive ? "flex" : "hidden"
  } flex-col border-2 border-black `;

  const orderCardS = ` h-[80%] overflow-scroll flex flex-col p-4 `;
  const infosS = ` bg-[#DE5151] m-4 flex flex-row items-center justify-between p-2 `;
  const priceS = ` text-4xl bg-light2 p-2 `;
  const infosbtnsS = ` flex row items-center justify-start `;

  const btnS = `material-symbols-outlined text-3xl rounded-[41px] m-1 p-1 bg-light2 p-1 hover:opacity-80 hover:scale-110 transition-all `;

  return (
    <div className={cartS + `${isDark ? "bg-dark2" : "bg-light2"}`}>
      <div className={orderCardS}>
        {orders.map((order) => (
          <AnOrder
            key={order.id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          />
        ))}
      </div>

      <div className={infosS}>
        <h4 className={priceS}>
          {totalPrice === 0 ? totalPrice : totalPrice + "TL"}{" "}
        </h4>
        <div className={infosbtnsS}>
          <button
            className={btnS}
            onClick={() => {
              if (orders.length === 0) {
                return;
              }
              if (window.confirm("Are you sure") === false) {
                return;
              }
              setOrders([]);
              alert("done");
            }}
          >
            credit_card
          </button>
          <button
            className={btnS}
            onClick={() => {
              if (orders.length === 0) {
                return;
              }
              if (window.confirm("Are you sure") === false) {
                return;
              }
              setOrders([]);
            }}
          >
            delete
          </button>
          <button
            className={btnS}
            onClick={() => {
              setIsCardActive(!isCardActive);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

function AnOrder({ order, setOrders, orders }) {
  const up = () => {
    if (order.countera < 20) {
      const updatedOrders = orders.map((item) => {
        if (item.id === order.id) {
          return { ...item, countera: item.countera + 1 };
        }
        return item;
      });
      setOrders(updatedOrders);
    }
  };

  const down = () => {
    if (order.countera === 1) {
      const updatedOrders = orders.filter((item) => item.id !== order.id);
      setOrders(updatedOrders);
    } else {
      const updatedOrders = orders.map((item) => {
        if (item.id === order.id) {
          return { ...item, countera: item.countera - 1 };
        }
        return item;
      });
      setOrders(updatedOrders);
    }
  };

  return (
    <div
      className={`grid w-full bg-light3 mt-4 h-[30%] p-2 grid-cols-[2fr_4fr_3fr_1.5fr_1fr_3fr] gap-3 hover:opacity-[0.95] hover:scale-[1.01] transition-all shadow-lg hover:shadow-xl `}
    >
      <img className={`h-[100%]`} src={order.image} />
      <h4 className={`bg-light2 text-4xl flex items-center justify-center `}>
        {order.title}
      </h4>
      <h4 className={`bg-light2 text-4xl flex items-center justify-center`}>
        {order.price}
        {order.priceType}
      </h4>
      <h4 className={`bg-[#DE5151] text-4xl flex items-center justify-center`}>
        {order.countera}
      </h4>

      <div
        className={`bg-[#DE5151] text-4xl flex flex-col items-center justify-center `}
      >
        <button
          onClick={up}
          className=" text-4xl flex items-center justify-center"
        >
          +
        </button>
        <hr />
        <button
          onClick={down}
          className=" text-4xl flex items-center justify-center p-2"
        >
          -
        </button>
      </div>

      <h4 className={`bg-[#EB6440] text-4xl flex items-center justify-center`}>
        {order.price * order.countera}
        {order.priceType}
      </h4>
    </div>
  );
}

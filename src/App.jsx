import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const [isCardActive, setIsCardActive] = useState(false);
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const [order, setOrder] = useState({});

  // styels
  const appStyle = `${
    isDark ? "bg-dark1" : "bg-light1"
  } flex flex-col min-h-screen `;

  return (
    <>
      <div
        className={
          appStyle +
          ` ${
            isCardActive
              ? "blur-md h-6 overflow-hidden  pointer-events-none opacity-50"
              : ""
          } `
        }
      >
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          orders={orders}
          setOrders={setOrders}
          isCardActive={isCardActive}
          setIsCardActive={setIsCardActive}
        />
        <Main isDark={isDark} orders={orders} setOrders={setOrders} />
        <Footer isDark={isDark} />
      </div>

      <Card
        orders={orders}
        setOrders={setOrders}
        isCardActive={isCardActive}
        setIsCardActive={setIsCardActive}
        isDark={isDark}
      />
    </>
  );
}

export default App;

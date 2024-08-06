import { useState } from "react";

export default function Header({
  isDark,
  setIsDark,

  isCardActive,
  setIsCardActive,
}) {
  // js //
  // END js //

  // Style //
  const bg1Color = `${isDark ? "bg-dark1" : "bg-light1"}`;
  const text4color = `${isDark ? "text-orange-400" : "text-light4"}`;
  const btnHover = `hover:scale-105 transition-transform duration-300 hover:opacity-75`;

  const headerStyle = ` z-20 ${
    isDark ? "bg-dark2" : "bg-light2"
  } flex items-center justify-center  p-2 shadow-md  fixed  w-full `;
  const headerTitelS = `  ${text4color} text-5xl -translate-y-1 xl:text-7xl`;

  const headerBtns = `absolute  -translate-1/2 right-10 p-2 flex items-center justify-center xl:text-[12px] `;
  const cartBtn = ` ${bg1Color} ${btnHover} flex p-2 pl-4 pr-4 rounded-3xl mr-5 `;
  const cartIcon = ` ${text4color} material-symbols-outlined text-4xl  xl:text-5xl`;
  const cartTitle = ` ${text4color} text-3xl  xl:text-5xl`;
  const darkLigtbtn = `  ${text4color} ${bg1Color} ${btnHover} material-symbols-outlined text-5xl rounded-full p-2`;
  // END Style //
  return (
    <>
      <header className={headerStyle}>
        <h1 className={headerTitelS}>Saka Restaurant</h1>
        <div className={headerBtns}>
          <button
            onClick={() => setIsCardActive(!isCardActive)}
            className={cartBtn}
          >
            <span className={cartIcon}>shopping_cart </span>
            <span className={cartTitle}>Card</span>
          </button>
          <button onClick={() => setIsDark(!isDark)} className={darkLigtbtn}>
            {!isDark ? "dark_mode " : "light_mode"}
          </button>
        </div>
      </header>
    </>
  );
}

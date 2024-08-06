export default function Footer({ isDark }) {
  const footer = `  ${
    isDark ? "bg-dark2 text-orange-600" : "text-light4 bg-light2"
  } text-center text-light4 text-[50px]  `;

  return (
    <footer className={footer}>
      <h3>© Abdulrahman-Saka</h3>
    </footer>
  );
}

// First component [Header] :
import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  //  Defiend a useState variable of storing the value of show modal status :
  const [showModal, setshowModal] = useState(false);

  // Define a [useState] to store the toggling classes values of [light / dark] which will be automaticly assigned inside the body class values [with using dymnaic inital value from  the {Local storage value} to reserve the last stored value of localstorage ] {with using substitution value for first time website visitor} :
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  // Define a [useEffect] to Reset the toggling {body}'s classes values of [light / dark] , by using the [HTML Dom]  :
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => setshowModal(true)}
        className="menu icon-menu"
      ></button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href=""> About </a>
          </li>

          <li>
            <a href=""> Articles </a>
          </li>

          <li>
            <a href=""> Projects </a>
          </li>

          <li>
            <a href=""> Speaking </a>
          </li>

          <li>
            <a href=""> Contact Us </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // 1- Sending/Storing the mode/theme value into the [local stroage] :
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // 2- Get the stored value mode/theme from the [local stroage] & and set it inside the defined [theme useState variable]    :
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        { theme === 'dark' ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal border">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-close"
              />
            </li>

            <li>
              <a href=""> About </a>
            </li>

            <li>
              <a href=""> Articles </a>
            </li>

            <li>
              <a href=""> Projects </a>
            </li>

            <li>
              <a href=""> Speaking </a>
            </li>

            <li>
              <a href=""> Uses </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

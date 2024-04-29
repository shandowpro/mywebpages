// First component [Header] :
import { useState } from "react";
import "./header.css";

// <div/>
const Header = () => {
  //  defiend a useState variable of storing the value of show modal status :
  const [showModal, setshowModal] = useState(false);

  return (
    <header className="flex">
  
      <button 
        className="menu icon-menu" 
        onClick={() => setshowModal(true)}
      > 
      </button>

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

      <button className="mode flex"> 
        <span className ="icon-moon-o"></span> 
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal border">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-clear"
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

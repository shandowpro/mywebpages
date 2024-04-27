// First component [Header] :
import {useState} from "react";
import "./header.css";

// <div/>
const Header = () => {
 
  //  defiend a useState variable of storing the value of show modal status :  
   const [ showModal , setshowModal ] = useState(false); 



  return (


    <header className="flex">
      <button 
        className='menu'
        onClick =  { () =>
          setshowModal(true) 
        }
      > 
        show modal 
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

      <button> Light </button>
    
        { showModal && (
        <div className='fixed'> 
          <ul className='modal border'>     
            <li >
              <button 
                onClick= {
                  () => {
                    setshowModal(false)
                  }
                }
              
              > X </button>
            </li>

            <li >
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
        )
      }
    
    </header>
  );
};

export default Header;

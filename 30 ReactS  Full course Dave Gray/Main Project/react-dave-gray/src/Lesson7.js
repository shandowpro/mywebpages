//  lesson7  , lesson8    component  :

import React from "react";

// importing the icons :
import { FaTrashAlt } from "react-icons/fa";

const Lesson7 = ({ title, subTitle, items, handleClick, handleDelete }) => {
  
  return (
    <main style={{ border: "3px white solid", width: "100%", margin: "10px" }}>
      <header
        style={{
          fontSize: "50px",
          width: "80%",
          margin: "5px auto",
          border: "2px blue solid",
        }}
      >
        This is the {title}
        <p> {subTitle} </p>
      </header>

      {items.length ? (
        <ul style={{ listStyle: "none" }}>
          {items.map((item) => (
            <li className="item" id={item.id}>
              <input
                checked={item.checked}
                type="checkbox"
                onChange={() => handleClick(item.id)}
              />
              <label
                style={
                  item.checked
                    ? { color: "blue", textDecoration: "line-through" }
                    : null
                }
                onDoubleClick={() => handleClick(item.id)}
              >
                {item.item}
              </label>

              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}> Sorry the list is empty </p>
      )}
    </main>
  );
};

// Sending default values of props :
Lesson7.defaultProps = {
  title: " Lesson7 title default  value ",
  subTitle: " Lesson7 subTitle default  value ",
};

export default Lesson7;

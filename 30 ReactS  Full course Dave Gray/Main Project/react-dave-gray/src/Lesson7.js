
//  Lesson7, Lesson8 components  :

import React from "react";
import ItemsList from "./ItemsList"; 


const Lesson7 = ({ title, subTitle, items, handleClick , handleDelete }) => {
  
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
          <ItemsList
            items={items}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
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

// Main Explanation of component page contents :
// Main application concept => creaing a button of increasing a count by clicking on a button to test the responding of different types of useEffects
// Main including functions and methods =>
// 1- one defiend useState variable of count
// 2- Button used to increase the count value by onClick event
// 3- one useEffect function with different types :
// a- useEffect with [no Dependencies]
// b- useEffect with [Empty Dependencies array]
// c- useEffect with [one single Dependency array - of the defined  useState variable ]

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UseEffectExp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(" ");

  const countHandler = () => {
    setCount(count + 1);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  //  Assign a useEffect function [with assinging one single dependency of defined useState  variable]   :
  useEffect(() => {
    console.log(
      "Hello from useEffect by assinging a one single dependency of defined useState  variable ",
      "------------".repeat(5)
    );
  }, [count]);

  //  Assign a useEffect function [with assinging multiple  dependencies of defined useState  variable]   :
  useEffect(() => {
    console.log(
      "Hello from useEffect by assinging  multiple  dependencies of defined useState variable ",
      "------------".repeat(5)
    );
  }, [count, text]);

  //  Assign a useEffect function [with NO assinging any dependency]   :
  useEffect(() => {
    console.log(
      "Hello from useEffect by NO assinging any dependency ",
      "------------".repeat(5)
    );
  });

  //  Assign a useEffect function [with assinging a empty dependency]  :
  useEffect(() => {
    console.log(
      "Hello from useEffect by assinging a empty dependency ",
      "------------".repeat(5)
    );
  }, []);

  return (
    <div>
      <Button onClick={countHandler}> + </Button>
      <label> {count} </label>

      <input type="text" onChange={textHandler} />
      <label> {text} </label>
    </div>
  );
};

export default UseEffectExp;

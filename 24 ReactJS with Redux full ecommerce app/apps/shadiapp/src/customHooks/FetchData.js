// This is the custom hook function :
// of getting the data from a certain API
// return the obtained data varialbe

import React, { useState, useEffect } from "react";

const FetchData = (url) => {
  // define the state with initial value of empty array    :
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(datas => setState(datas))
    }, []);

  return [state];
}

export default FetchData;

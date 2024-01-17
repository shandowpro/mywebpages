

import React, {useState , useEffect} from "react";
import { Container } from "react-bootstrap";

import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesActions from "./components/DatesActions";

function App() {
  // Define the state varialbe to use it as data storage { imported person array  } of dates items [to providing the contorling  ]  :
  const [personDate, setpersonDate] = useState(person);

  // Define the function  of {delete all}  button  [by setting an empty array of the state varialbe ] :
  const deleteAll = () => {
    setpersonDate([]);
  };

  // Define the function  of {show all}  button  [by setting an empty array of the state varialbe ] :
  const viewAll = () => {
    setpersonDate(person);
  };

  // Define the userEffeect function  to display the dates list for the first time only :
  useEffect(() => { 
   setpersonDate([])
  }, []);

  // Calling the defined components  inside he main [app.js] + with adding the used [props]  to be used insdie each component  : 
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personDate} />
        <DatesList person={personDate} />
        <DatesActions onDelete={deleteAll} onView={viewAll} />
      </Container>
    </div>
  );
}

export default App;

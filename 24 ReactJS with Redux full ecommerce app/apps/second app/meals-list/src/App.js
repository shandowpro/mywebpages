

import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category  from './components/Category';
import ItemsList  from './components/ItemsList';
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="color-body font">
      
      <NavBar />

      <Container>
          <Header/>
          <Category/>
          <ItemsList/>
          <ItemsList/>
          <ItemsList/>
          <ItemsList/>
          <ItemsList/>

      </Container>
    </div>
  );
}

export default App;

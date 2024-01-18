import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="color-body font">
      <NavBar />

      <Container>
          <Header/>
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import City from "./City";

// import "./App.css";
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  // margin: ${props => (props.margin ? "1rem" : "0")};
  margin: 0.5rem;
  .card {
    margin: 0.3rem;
  }
`;

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/cities/:cityname" component={City} />
    </>
  );
}

export default App;

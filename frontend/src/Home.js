import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

import AppName from "./components/AppName";
import Cities from "./components/Cities";

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

function Home() {
  return (
    <>
      <AppName />
      <Typography variant="subtitle1" align="center">
        지역을 선택해주세요.
      </Typography>
      <Cities />
    </>
  );
}

export default Home;

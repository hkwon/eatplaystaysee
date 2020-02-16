import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

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

function AppName() {
  return (
    <FlexRow>
      <Typography variant="h3" component="h1">
        Eat
      </Typography>
      <Typography variant="h3" component="h1">
        Play
      </Typography>
      <Typography variant="h3" component="h1">
        See
      </Typography>
      <Typography variant="h3" component="h1">
        Stay
      </Typography>
    </FlexRow>
  );
}
export default AppName;

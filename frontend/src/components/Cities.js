import React from "react";
import styled from "styled-components";
import CityCard from "./CityCard";

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
const cityData = [
  ["london", "UK"],
  ["oxford", "UK"],
  ["bath", "UK"],
  ["bristol", "UK"]
];

function Cities() {
  return (
    <FlexRow>
      {cityData &&
        cityData.map((city, index) => (
          <CityCard name={city[0]} nation={city[1]} key={index} />
        ))}
    </FlexRow>
  );
}

export default Cities;

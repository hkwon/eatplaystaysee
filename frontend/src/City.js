import React from "react";

function City({ match }) {
  const { cityname } = match.params;
  return <p>여기는 {cityname}입니다.</p>;
}

export default City;

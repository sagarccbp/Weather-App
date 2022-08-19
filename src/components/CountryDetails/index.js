import React from "react";

import {
  CountryDetailsContainer,
  Para,
  Image,
  AppLabel,
  Button,
} from "./styledComponents";

const CountryDetails = (props) => {
  const { countryDetails, fetchWeatherDetails } = props;

  return (
    <>
      <AppLabel>Country Details</AppLabel>
      <CountryDetailsContainer>
        <Para>{countryDetails[0].name.common}</Para>
        <Image src={countryDetails[0].flags.png} />
        <Button type="button" onClick={fetchWeatherDetails}>
          Capital: {countryDetails[0].capital}
        </Button>
        <Para>Population: {countryDetails[0].population}</Para>
        <Para>
          Latitude Longitude: {countryDetails[0].latlng[0]},{" "}
          {countryDetails[0].latlng[1]}
        </Para>
      </CountryDetailsContainer>
    </>
  );
};

export default CountryDetails;

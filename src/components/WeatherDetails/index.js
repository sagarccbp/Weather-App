import React from "react";

import {
  WeatherDetailsContainer,
  Para,
  Para1,
  Image,
  AppLabel,
  Span,
} from "./styledComponents";

const WeatherDetails = (props) => {
  const { weather, countryDetails } = props;

  return (
    <>
      <AppLabel>Weather Details</AppLabel>
      <WeatherDetailsContainer>
        <Para1>{countryDetails[0].capital}</Para1>
        <Image src={weather.weather_icons} />
        <Para>
          <Span>Temperature: </Span>
          {weather.temperature}°c
        </Para>
        <Para>
          <Span>Wind Speed: </Span>
          {weather.wind_speed} kmph
        </Para>
        <Para>
          <Span>Wind Direction: </Span>
          {weather.wind_dir}
        </Para>
      </WeatherDetailsContainer>
    </>
  );
};

export default WeatherDetails;

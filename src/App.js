import React, { useState } from "react";
import Country from "./components/Country";
import CountryDetails from "./components/CountryDetails";
import WeatherDetails from "./components/WeatherDetails";
import axios from "axios";
import { Container } from "./styledComponents";

function App() {
  const [country, updateCountry] = useState();
  const [countryDetails, updateCountryDetails] = useState();
  const [weather, updateWeatherDetails] = useState();

  const fetchCountryDetails = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );

    updateCountryDetails(response.data);
  };
  const apiAccessKey = "22b88860876f87a0aa67d35c169d8a60";
  const fetchWeatherDetails = async () => {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${apiAccessKey}&query=${countryDetails[0].capital}`
    );
    updateWeatherDetails(response.data.current);
  };

  return (
    <Container>
      {countryDetails === undefined && weather === undefined && (
        <Country
          updateCountry={updateCountry}
          fetchCountryDetails={fetchCountryDetails}
        />
      )}
      {countryDetails && weather === undefined && (
        <CountryDetails
          countryDetails={countryDetails}
          fetchWeatherDetails={fetchWeatherDetails}
        />
      )}
      {weather && (
        <WeatherDetails weather={weather} countryDetails={countryDetails} />
      )}
    </Container>
  );
}

export default App;

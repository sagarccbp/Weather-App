import React from 'react';

import {
    AppLabel,
    SearchBox,
    ChooseCityLabel,
    WelcomeWeatherLogo,
} from './styledComponents';

const Country = (props) => {
    const {updateCountry, fetchCountryDetails} = props;

  return (
    <>
        <AppLabel>Weather App</AppLabel>
        <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
        <ChooseCityLabel>Find Weather of your Country</ChooseCityLabel>
        <SearchBox onSubmit={fetchCountryDetails}>
        <input
          onChange={(e) => updateCountry(e.target.value)}
          placeholder="Country Name"
        />
        <button type={"submit"}>Submit</button>
      </SearchBox>
    </>
  )
};

export default Country;

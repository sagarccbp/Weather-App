import styled from "styled-components";

export const AppLabel = styled.span`
  color: #fff8bc;
  margin: 20px auto;
  font-size: 26px;
  font-weight: bold;
`;

export const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    color: black;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    background-color: blue;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ChooseCityLabel = styled.span`
  color: white;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

export const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

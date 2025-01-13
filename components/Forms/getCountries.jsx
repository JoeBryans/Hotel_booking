import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

export default function GetCountries() {
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);
  useEffect(() => {
    if (currentState)
      GetCity(parseInt(country), parseInt(currentState)).then((result) => {
        setCitiesList(result);
      });
  }, [currentState]);

  return <div>...</div>;
}

import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./Country.module.css";
import { fetchCountries } from "../../api";
const Country = ({ handleCountryChange }) => {
  //destructing handlecountrychange
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]); //here setfetchedcountries array is used otherwise it will run endless..

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="" style={{ fontWeight: "bolder" }}>
          GLOBAL
        </option>
        {/* below this the code used for fetching countries and showing in dropdown */}
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;

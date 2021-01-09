import React from "react";

import { Cards, Chart, Country } from "./components"; //merging imports as in index.js
import styles from "./App.module.css";
import { fetchData } from "./api/index"; // in curly brackets bcoz of function
import Image from "./images/covid.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  //api call back i.e asynchronos
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country); //to

    this.setState({ data: fetchedData, country: country }); // data of particular countries.
  };
  //this is method to change the state of countries...and pass this method as props to COUNTRY in render below..

  render() {
    const { data, country } = this.state; // this is destructuring
    return (
      <div className={styles.container}>
        {/*here the data is passed as props and also passed in Cards.jsx*/}

        <img className={styles.images} src={Image} alt="COVID-19" />

        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;

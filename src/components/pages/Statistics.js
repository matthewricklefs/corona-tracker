import React, { Component } from "react";
import { fetchData } from "../../api/index";
import { Cards, Chart, CountryPicker } from "../../components/";
import coronaImage from "../../images/image.png";
import "../../styles/statistics.css";

export default class Statistics extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="statistics-container">
        <img className="covid-image" src={coronaImage} alt="COVID-19"></img>

        <Cards data={data} />
        <div className="graph-section">
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import '../styles/app.scss';
import axios from 'axios';

const URL = 'https://mcr-codes-weather.herokuapp.com/forecast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
  }

  componentDidMount() {
    this.handleLocationSelect(this.state.location.city);
  }

  handleForecastSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  handleLocationSelect = (location) => {
    axios.get(`${URL}?city=${location}`)
      .then(response => {
        const data = response.data;
        this.setState({
          selectedDate: data.forecasts[0].date,
          forecasts: data.forecasts,
          location: {
            city: data.location.city,
            country: data.location.country,
          },
        });
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };


  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <br />
        <SearchForm
          onLocationSelect={this.handleLocationSelect}
        />
        <br />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        <br />
        {
          selectedForecast &&
          <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;

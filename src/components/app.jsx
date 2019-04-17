import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import axios from 'axios';

const URL = 'https://mcr-codes-weather.herokuapp.com';

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

  handleForecastSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  componentDidMount() {
    axios.get(`${URL}/forecast`)
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
  }

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        { selectedForecast && (
          <LocationDetails
            city={this.state.location.city}
            country={this.state.location.country}
          />
        )}
        {
          selectedForecast && <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        }
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/forecast-details.scss';

const ForecastDetails = props => {
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">{moment(props.forecast.date).format('ddd Do MMM')}</div>
      <div className="forecast-details_max-temp">Max Temperature: {props.forecast.temperature.max}</div>
      <div className="forecast-details_min-temp">Min Temperature: {props.forecast.temperature.min}</div>
      <div className="forecast-details_humidity">Humidity: {props.forecast.humidity}</div>
      <div className="forecast-details_wind">Wind: {props.forecast.wind.speed}</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }),
  }),
};

export default ForecastDetails;

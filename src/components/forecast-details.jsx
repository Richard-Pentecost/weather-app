import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ForecastDetails = props => {
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">{moment(props.forecast.date).format('ddd Do MMM')}</div>
      <div className="forecast-details_max-temp">{props.forecast.temperature.max}</div>
      <div className="forecast-details_min-temp">{props.forecast.temperature.min}</div>
      <div className="forecast-details_humidity">{props.forecast.humidity}</div>
      <div className="forecast-details_wind">{props.forecast.wind.speed}</div>
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

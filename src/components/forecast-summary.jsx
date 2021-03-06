import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary.scss';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date"><span>{moment(props.date).format('ddd Do MMMM')}</span></div>
    <div className="forecast-summary__icon"><WeatherIcon name="owm" iconId={props.icon} /></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;

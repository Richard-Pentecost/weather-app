import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('Forecast Summary', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={123}
      temperature={25}
      description="mockDescription"
      icon="800"
      onSelect={jest.fn()}
    />
  ));
  it('renders the date', () => {
    expect(wrapper.find('.forecast-summary__date').text()).toEqual('Thu 1st January');
  });
  it('renders the temperature', () => {
    expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('25');
  });
  it('renders a description', () => {
    expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
  });
  it('renders an icon', () => {
    expect(wrapper.find('WeatherIcon').prop('iconId')).toEqual('800');
  });
});

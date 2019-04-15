import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={123}
      temperature={25}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('123');
});

it('renders the temperature', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={123}
      temperature={25}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('25');
});

it('renders a description', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={123}
      temperature={25}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders an icon', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={123}
      temperature={25}
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__icon').text()).toEqual('mockIcon');
});

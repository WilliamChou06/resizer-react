import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Resizable from '../components/Resizable';

it('renders Resizable component', () => {
  const wrapper = shallow(<App />);
  expect(
    wrapper.contains(
      <Resizable>
      <p>asdasdaasdasdsd</p>
    </Resizable>
    )
  ).toBe(true);
});

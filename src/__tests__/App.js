import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Resize from '../components/Resize';

it('renders Resize component', () => {
  const wrapper = shallow(<App />);
  expect(
    wrapper.contains(
      <Resize>
        <p>asdasdasd</p>
      </Resize>
    )
  ).toBe(true);
});

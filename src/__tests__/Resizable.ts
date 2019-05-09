import React from 'react';
import { shallow } from 'enzyme';
import Resizable from '../components/Resizable';
import { StyledResizableDiv } from '../styles/Resizable';

let wrapper, handleMouseUp;

beforeEach(() => {
  handleMouseUp = jest.fn();
  wrapper = shallow(<Resizable/>);
});

it('renders Resizable component', () => {
  expect(wrapper).toMatchSnapshot();
});

// it('handles handle mouseup', () => {
//   wrapper.find(StyledResizableDiv).simulate('mouseup');
//   expect(handleMouseUp).toHaveBeenCalled();
// });

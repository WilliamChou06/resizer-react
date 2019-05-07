import React from 'react';
import { shallow } from 'enzyme';
import Resizable from '../components/Resizable';
import { TopHandle } from '../styles/Handles';
import { ResizableDiv } from '../styles/Resizable';

let wrapper, handleMouseDown;

beforeEach(() => {
  handleMouseDown = jest.fn();
  wrapper = shallow(<Resizable />);
});

it('renders Resizable component', () => {
  expect(wrapper).toMatchSnapshot();
});

// it('handles handle mousedown', () => {
//   wrapper.find(ResizableDiv).simulate('mousedown');
//   expect(handleMouseDown).toHaveBeenCalled();
// });

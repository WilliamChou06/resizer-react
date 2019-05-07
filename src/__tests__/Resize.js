import React from 'react';
import { shallow } from 'enzyme';
import Resize from '../components/Resize';
import { TopHandle } from '../styles/Handles';
import { ResizableDiv } from '../styles/Resizable';

let wrapper, handleMouseDown;

beforeEach(() => {
  handleMouseDown = jest.fn();
  wrapper = shallow(<Resize />);
});

it('renders Resize component', () => {
  expect(wrapper).toMatchSnapshot();
});

// it('handles handle mousedown', () => {
//   wrapper.find(ResizableDiv).simulate('mousedown');
//   expect(handleMouseDown).toHaveBeenCalled();
// });

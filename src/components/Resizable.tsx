import React, { Component } from 'react';
import { StyledResizableDiv } from '../styles/Resizable';
import ResizingHandles from './ResizingHandles';

interface Props {
  width?: number,
  height?: number
}
interface State {
  width: number,
  height: number,
  resizing: string,
  bounding: object,
  mouseX: number,
  mouseY: number,
  originalWidth: number,
  originalHeight: number,
  originalBounding: object,
  top: number,
  left: number
}

class Resizable extends Component<Props, State> {

  state = {
    width: this.props.width || null,
    height: this.props.height || null,
    resizing: '',
    bounding: null,
    mouseX: 0,
    mouseY: 0,
    originalWidth: this.props.width,
    originalHeight: this.props.height,
    originalBounding: null,
    top: null,
    left: null
  };

  // Use events on windows so it doesn't stop working when dragged outside the resizable component
  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = (e: any): void => {
    // Setting starting values to calculate next values.
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY,
      originalHeight: this.state.height,
      originalWidth: this.state.width,
      originalBounding: this.state.bounding
    });

    // Set state to which handle is being dragged

    switch (e.target.id) {
      case 'top-left':
        this.setState({ resizing: 'top-left' });
        break;
      case 'top':
        this.setState({ resizing: 'top' });
        break;
      case 'top-right':
        this.setState({ resizing: 'top-right' });
        break;
      case 'right':
        this.setState({ resizing: 'right' });
        break;
      case 'bottom-left':
        this.setState({ resizing: 'bottom-left' });
        break;
      case 'bottom':
        this.setState({ resizing: 'bottom' });
        break;
      case 'bottom-right':
        this.setState({ resizing: 'bottom-right' });
        break;
      case 'left':
        this.setState({ resizing: 'left' });
        break;
      default:
        this.setState({ resizing: '' });
        break;
    }

    // Event listener to window so it doesn't stop resizing if dragged outside of resizable component
    window.addEventListener('mousemove', this.handleMouseMove);
  };

  handleMouseMove = (e: MouseEvent): void => {
    let originalMouseX = this.state.mouseX;
    let originalMouseY = this.state.mouseY;
    let originalWidth = this.state.originalWidth;
    let originalHeight = this.state.originalHeight;
    let bounding = this.state.bounding;

    // Check for handle being dragged and calculate width and height accordingly
    if (this.state.resizing === 'bottom-right') {
      this.setState({
        width: originalWidth + (e.pageX - originalMouseX),
        height: e.pageY - bounding.top
      });
    }
    if (this.state.resizing === 'bottom-left') {
      this.setState({
        width: originalWidth - (e.pageX - originalMouseX),
        height: originalHeight + (e.pageY - originalMouseY),
        left: bounding.left + (e.pageX - bounding.left)
      });
    }

    if (this.state.resizing === 'top-right') {
      this.setState({
        width: originalWidth + (e.pageX - originalMouseX),
        height: originalHeight - (e.pageY - originalMouseY),
        top: bounding.top + (e.pageY - bounding.top)
      });
    }

    if (this.state.resizing === 'top-left') {
      this.setState({
        width: originalWidth - (e.pageX - originalMouseX),
        height: originalHeight - (e.pageY - originalMouseY),
        left: bounding.left + (e.pageX - bounding.left),
        top: bounding.top + (e.pageY - bounding.top)
      });
    }
    if (this.state.resizing === 'top') {
      this.setState({
        height: originalHeight - (e.pageY - originalMouseY),
        top: bounding.top + (e.pageY - bounding.top)
      });
    }
    if (this.state.resizing === 'right') {
      this.setState({
        width: originalWidth + (e.pageX - originalMouseX)
      });
    }
    if (this.state.resizing === 'bottom') {
      this.setState({
        height: originalHeight + (e.pageY - originalMouseY)
      });
    }
    if (this.state.resizing === 'left') {
      this.setState({
        width: originalWidth - (e.pageX - originalMouseX),
        left: bounding.left + (e.pageX - bounding.left)
      });
    }
  };

  handleMouseUp = (): void => {
    this.setState({ resizing: '' });
    window.removeEventListener('mousemove', this.handleMouseMove);
  };

  getBoundingClientRect = (el: HTMLElement): void => {

    // getBoundingClientRect using refs
    if (el) {
      console.log(el);
      this.setState({ bounding: el.getBoundingClientRect(), height: el.parentElement.clientHeight, width: el.parentElement.clientWidth });
    }
  };

  render() {
    return (
      <StyledResizableDiv
        onMouseDown={this.handleMouseDown}
        ref={this.getBoundingClientRect}
        width={this.state.width ? this.state.width + 'px' : '100%'}
        height={this.state.height ? this.state.height + 'px' : '100%'}
        top={this.state.top + 'px'}
        left={this.state.left + 'px'}
      >
        <ResizingHandles>{this.props.children}</ResizingHandles>
      </StyledResizableDiv>
    );
  }
}

export default Resizable;

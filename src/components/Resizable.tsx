import React, { Component } from 'react';
import { StyledResizableDiv } from '../styles/Resizable';
import ResizingHandles from './ResizingHandles';

interface Props {
  width?: number,
  height?: number,
  background?: string
}
interface State {
  style: Style
  resizing: string,
  bounding: object,
  mouseLocation: MouseLocation
  originalBounding: object,
}

interface Style {
  width: number,
  height: number,
  top: number,
  left: number
  originalWidth: number,
  originalHeight: number,
}

interface MouseLocation {
  mouseX: number,
  mouseY: number,
}

class Resizable extends Component<Props, State> {
  state = {
    bounding: null,
    originalBounding: null,
    style: {
      width: this.props.width || null,
      height: this.props.height || null,
      top: null,
      left: null,
      originalWidth: this.props.width,
      originalHeight: this.props.height,
    },
    resizing: '',
    mouseLocation: {
      mouseX: 0,
      mouseY: 0,
    },
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
      mouseLocation: {
        ...this.state.mouseLocation, mouseX: e.pageX,
        mouseY: e.pageY,
      },
      style: { ...this.state.style, originalHeight: this.state.style.height, originalWidth: this.state.style.width },
      originalBounding: this.state.bounding
    });

    console.log(this.state.style)

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
    let originalMouseX = this.state.mouseLocation.mouseX;
    let originalMouseY = this.state.mouseLocation.mouseY;
    let originalWidth = this.state.style.originalWidth;
    let originalHeight = this.state.style.originalHeight;
    let bounding = this.state.bounding;

    // Check for handle being dragged and calculate width and height accordingly

    switch (this.state.resizing) {
      case 'top-left':
        this.setState({
          style: {
            ...this.state.style, width: originalWidth - (e.pageX - originalMouseX),
            height: originalHeight - (e.pageY - originalMouseY),
            left: bounding.left + (e.pageX - bounding.left),
            top: bounding.top + (e.pageY - bounding.top)
          }
        });
        break;
      case 'top':
        this.setState({
          style: {
            ...this.state.style, height: originalHeight - (e.pageY - originalMouseY),
            top: bounding.top + (e.pageY - bounding.top)
          }
        });
        break;
      case 'top-right':
        this.setState({
          style: {
            ...this.state.style, width: originalWidth + (e.pageX - originalMouseX),
            height: originalHeight - (e.pageY - originalMouseY),
            top: bounding.top + (e.pageY - bounding.top)
          }

        });
        break;
      case 'right':
        this.setState({
          style: {
            ...this.state.style, width: originalWidth + (e.pageX - originalMouseX)
          }

        });
        break;
      case 'bottom-left':
        this.setState({
          style: {
            ...this.state.style, width: originalWidth - (e.pageX - originalMouseX),
            height: originalHeight + (e.pageY - originalMouseY),
            left: bounding.left + (e.pageX - bounding.left)
          }


        });
        break;
      case 'bottom':
        this.setState({
          style: {
            ...this.state.style, height: originalHeight + (e.pageY - originalMouseY)
          }

        });
        break;
      case 'bottom-right':
        this.setState({
          style: {
            ...this.state.style, width: originalWidth + (e.pageX - originalMouseX),
            height: e.pageY - bounding.top
          }


        });
        break;
      case 'left':
        this.setState({
          style: {
            ...this.state.style,
            width: originalWidth - (e.pageX - originalMouseX),
            left: bounding.left + (e.pageX - bounding.left)
          }
        });
        break;
      default:
        break;
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
      this.setState({ bounding: el.getBoundingClientRect() });
      if (!this.props.width && !this.props.height) {
        // this.setState({ height: el.parentElement.clientHeight, width: el.parentElement.clientWidth })
        this.setState({ style: { ...this.state.style, height: el.parentElement.clientHeight, width: el.parentElement.clientWidth } })
      }
    }
  };

  render() {
    return (
      <StyledResizableDiv
        onMouseDown={this.handleMouseDown}
        ref={this.getBoundingClientRect}
        width={this.state.style.width && this.state.style.width + 'px'}
        height={this.state.style.height && this.state.style.height + 'px'}
        top={this.state.style.top + 'px'}
        left={this.state.style.left + 'px'}
        background={this.props.background}
      >
        <ResizingHandles background={this.props.background}>{this.props.children}</ResizingHandles>
      </StyledResizableDiv>
    );
  }
}

export default Resizable;

import React, { Component } from 'react';
import {
  TopHandle,
  TopLeftHandle,
  TopRightHandle,
  RightHandle,
  BottomRightHandle,
  BottomHandle,
  BottomLeftHandle,
  LeftHandle
} from '../styles/Handles';
import { ResizableDiv, ResizableContent } from '../styles/Resizable';

class Resizable extends Component {
  state = {
    width: this.props.width || 120,
    height: this.props.height || 120,
    resizing: true,
    bounding: 0,
    mouseX: 0,
    mouseY: 0,
    originalWidth: 120,
    originalHeight: 120,
    originalBounding: 0
  };

  // Use events on windows so it doesn't stop working when dragged outside the resizable component

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = e => {
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
        break;
    }

    // Event listener to window so it doesn't stop resizing if dragged outside of resizable component
    window.addEventListener('mousemove', this.handleMouseMove);
  };

  handleMouseMove = e => {
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

  handleMouseUp = () => {
    this.setState({ resizing: false });
    window.removeEventListener('mousemove', this.handleMouseMove);
  };

  getBoundingClientRect = el => {
    // getBoundingClientRect using refs

    if (el) {
      this.setState({ bounding: el.getBoundingClientRect() });
    }
  };

  render() {
    return (
      <ResizableDiv
        onMouseDown={this.handleMouseDown}
        ref={this.getBoundingClientRect}
        width={this.state.width + 'px'}
        height={this.state.height + 'px'}
        top={this.state.top + 'px'}
        left={this.state.left + 'px'}
      >
        <div>
          <TopHandle id="top" />
          <RightHandle id="right" />
          <BottomHandle id="bottom" />
          <LeftHandle id="left" />
          <TopLeftHandle id="top-left" />
          <TopRightHandle id="top-right" />
          <BottomLeftHandle id="bottom-left" />
          <BottomRightHandle id="bottom-right" />
          {/* Logging */}
          <ResizableContent>{this.props.children}</ResizableContent>
          {this.state.width}
          {this.state.height}
          {this.state.bounding.left}
        </div>
      </ResizableDiv>
    );
  }
}

export default Resizable;

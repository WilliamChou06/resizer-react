import React, { Component } from 'react';
import './Resize.css';

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

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = e => {
    console.log(e.target.id);
    console.log(e.pageX);
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY,
      originalHeight: this.state.height,
      originalWidth: this.state.width,
      originalBounding: this.state.bounding
    });
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
    window.addEventListener('mousemove', this.handleMouseMove);
  };

  handleMouseMove = e => {
    let originalMouseX = this.state.mouseX;
    let originalMouseY = this.state.mouseY;
    let originalWidth = this.state.originalWidth;
    let originalHeight = this.state.originalHeight;
    let bounding = this.state.bounding;

    console.log(e.pageX, originalMouseX);

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
        width: originalWidth + (e.pageX - originalMouseX),
      });
    }
    if (this.state.resizing === 'bottom') {
      this.setState({
        height: originalHeight + (e.pageY - originalMouseY),
      });
    }
    if (this.state.resizing === 'left') {
      this.setState({
        width: originalWidth - (e.pageX - originalMouseX),
        left: bounding.left + (e.pageX - bounding.left),
      });
    }
  };

  handleMouseUp = () => {
    this.setState({ resizing: false });
    window.removeEventListener('mousemove', this.handleMouseMove);
  };

  refCallback = el => {
    if (el) {
      this.setState({ bounding: el.getBoundingClientRect() });
    }
  };

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        style={{
          width: this.state.width,
          height: this.state.height,
          left: this.state.left,
          top: this.state.top
        }}
        className="resizable"
        ref={this.refCallback}
      >
        <div className="resizers">
          <div id="top" className="resizer" />
          <div id="right" className="resizer" />
          <div id="bottom" className="resizer" />
          <div id="left" className="resizer" />
          <div id="top-left" className="resizer top-left" />
          <div id="top-right" className="resizer top-right" />
          <div id="bottom-left" className="resizer bottom-left" />
          <div id="bottom-right" className="resizer bottom-right" />
          {this.props.children}
          {this.state.width}
          {this.state.bounding.left}
        </div>
      </div>
    );
  }
}

export default Resizable;

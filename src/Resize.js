import React from 'react';
import './Resize.css';

function Resizable(props) {
  return (
    <div className="resizable">
      <div className="resizers">
        <div className="resizer top-left" />
        <div className="resizer top-right" />
        <div className="resizer bottom-left" />
        <div className="resizer bottom-right" />
        {props.children}
      </div>
    </div>
  );
}

export default Resizable;

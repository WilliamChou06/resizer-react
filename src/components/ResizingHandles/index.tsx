import React from 'react';
import {
  TopHandle,
  TopLeftHandle,
  TopRightHandle,
  RightHandle,
  BottomRightHandle,
  BottomHandle,
  BottomLeftHandle,
  LeftHandle,
  ResizableContent
} from './style';

const ResizingHandles = (props) => (
  <>
    <TopHandle className="handle" id="top" />
    <RightHandle className="handle" id="right" />
    <BottomHandle className="handle" id="bottom" />
    <LeftHandle className="handle" id="left" />
    <TopLeftHandle className="handle" id="top-left" />
    <TopRightHandle className="handle" id="top-right" />
    <BottomLeftHandle className="handle" id="bottom-left" />
    <BottomRightHandle className="handle" id="bottom-right" />
    <ResizableContent>{props.children}</ResizableContent>
  </>
);

export default ResizingHandles;

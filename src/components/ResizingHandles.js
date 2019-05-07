import React from 'react';
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
import { ResizableContent } from '../styles/Resizable';

const ResizingHandles = (props) => (
  <>
    <TopHandle id="top" />
    <RightHandle id="right" />
    <BottomHandle id="bottom" />
    <LeftHandle id="left" />
    <TopLeftHandle id="top-left" />
    <TopRightHandle id="top-right" />
    <BottomLeftHandle id="bottom-left" />
    <BottomRightHandle id="bottom-right" />
    <ResizableContent>{props.children}</ResizableContent>
  </>
);

export default ResizingHandles;

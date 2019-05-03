import styled, { css } from 'styled-components';

const resizer = css`
  background: white;
  border: 3px solid #4286f4;
  position: absolute;
`;

export const TopHandle = styled.div`
  ${resizer}
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  cursor: ns-resize;
`;
export const RightHandle = styled.div`
  ${resizer}
  top: 0;
  right: 0;
  bottom: 0;
  width: 5px;
  box-sizing: border-box;
  cursor: ew-resize;
`;
export const BottomHandle = styled.div`
  ${resizer}
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  cursor: ns-resize;
`;
export const LeftHandle = styled.div`
  ${resizer}
  top: 0;
  left: 0;
  bottom: 0;
  width: 5px;
  box-sizing: border-box;
  cursor: ew-resize;
`;
export const TopLeftHandle = styled.div`
  ${resizer}
  left: 0;
  top: 0;
  width: 5px;
  cursor: nwse-resize;
`;
export const TopRightHandle = styled.div`
  ${resizer}
  right: 0;
  top: 0;
  width: 5px;

  cursor: nesw-resize;
`;
export const BottomLeftHandle = styled.div`
  ${resizer}
  left: 0;
  bottom: 0;
  width: 5px;
  cursor: nesw-resize;
`;
export const BottomRightHandle = styled.div`
  ${resizer}
  right: 0;
  bottom: 0;
  width: 5px;
  cursor: nwse-resize;
`;

import styled from 'styled-components';

export const StyledResizableDiv = styled.div`
  width: ${props => props.width || 120} !important;
  height: ${props => props.height || 120} !important;
  left: ${props => props.left || 0} !important;
  top: ${props => props.top || 0} !important;
  background: white;
  position: absolute;
  user-select: none;
  overflow: hidden;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;

export const ResizableContent = styled.div`
  word-wrap: break-word;
  padding: 6px;
`;

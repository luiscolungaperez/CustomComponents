import { css, keyframes } from 'styled-components';

export const intoScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${intoFrames} ${type} forwards;
`;

export const intoFrames = keyframes`
  from {
    /* width: 0; */
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
    
  }
  to{
    /* width: 100%; */
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
`;

export const outScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${outFrames} ${type} forwards;
`;

export const outFrames = keyframes`
  from {
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
  to {
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
  }
`;

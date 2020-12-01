import styled, { css } from 'styled-components';
import { intoScreen, outScreen } from '../../styles/animation';

export const SidebarStyle = styled.section`
  position: fixed;
  z-index: 0;
  top: 60px;
  height: calc(100vh - 60px);
  width: 230px;
  background-color: #839b97;
  box-shadow: 3px 0px 5px rgba(0,0,0,0.4);
  @media screen and (max-width: 578px){
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 2;

    ${props => props.state === '' && css`
      margin-left: -100%;
    `}
    ${props => props.state === 'true' && css`
      ${intoScreen()};
    `};

    ${props => props.state === 'false' && css`
      ${outScreen()};
    `};

  }
`;

export const BtnClose = styled.button`
  @media screen and (min-width: 578px){
    opacity: 0;
    visibility: hidden;
  }
`;

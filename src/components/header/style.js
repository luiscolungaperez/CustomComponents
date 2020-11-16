import styled from 'styled-components';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';

export const HeaderStyle = styled.section`
  width: 100%;
  height: 60px;
  background-color: #34626c;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Brand = styled.h1`
  color: white;
`;

export const BtnMenu = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;  
  border: none;
  padding: 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: rgba(0,0,0,0.3);
    transition: 0.3s ease-in-out;
  }
  @media screen and (min-width: 578px) {
    opacity: 0;
    visibility: hidden;
  }
`;

export const IconMenu = styled(HiMenu)`
  font-size: 30px;
  color: white;
`;

export const IconMenuOpen = styled(HiMenuAlt3)`
  font-size: 30px;
  color: white;
`;

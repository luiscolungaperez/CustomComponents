import React from 'react';
import { SidebarStyle, BtnClose } from './style';

export const Sidebar = ({ openState, setState }) => {
  
  const handleState = () => {
    setState(false);
  }
  
  return(
    <SidebarStyle state={openState}>
      <BtnClose type='button' onClick={handleState}>Cerrar</BtnClose>
    </SidebarStyle>
  );
};

import React from 'react';
import { HeaderStyle, Brand, BtnMenu, IconMenu, /*IconMenuOpen*/ } from './style';

export const Header = ({ openState, setState }) => {

  const handleOpen = () => {
    setState('true');
  }

  return (
    <HeaderStyle>
      <Brand>Header</Brand>
      <BtnMenu>
        <IconMenu type='button' onClick={handleOpen} />
      </BtnMenu>
    </HeaderStyle>
  );
};

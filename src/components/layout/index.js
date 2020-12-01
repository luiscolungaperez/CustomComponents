import React, { useState } from 'react';
import { Header } from '../header';
import { Sidebar } from '../sidebar';

export const Layout = () => {
  const [menu, setMenu] = useState('');

  return(
    <>
      <Header openState={menu} setState={setMenu} />
      <Sidebar openState={menu} setState={setMenu} />
    </>
  );
}
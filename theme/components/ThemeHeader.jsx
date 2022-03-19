import React, { useContext } from 'react';
import context from '../context';

function ThemeHeader() {
  return (
    <header id="custom-style-in-theme">
      This is Custom header, inject msg with theme: <code>{useContext(context).msg}</code>
    </header>
  );
}

export default ThemeHeader;

import React from 'react';

import context from './context';

function Provider({ children }) {
  return <context.Provider value={{ msg: "Provider by theme's Provider" }}>{children}</context.Provider>;
}

export default Provider;

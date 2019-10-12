import React from 'react';
import { Global, css } from '@emotion/core';

import Header from './components/Header';

import 'rbx/index.css';

function App() {
  return (
    <>
      <Global
        styles={css`
          .columns {
            margin: 0 !important;
            min-height: inherit;
          }
        `}
      />
      <Header />
    </>
  );
}

export default App;

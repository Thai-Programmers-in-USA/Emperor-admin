import React, { Fragment } from 'react';
import ButtonDark from '../components/button-dark.component';

function CustomElement(props) {
  return (
    <Fragment>
      <h1>Custom elements</h1>
      <h2>button-dark</h2>
      <ButtonDark>LOG IN</ButtonDark>
    </Fragment>
  );
}

export default CustomElement;

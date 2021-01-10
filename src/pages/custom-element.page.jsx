import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonDark from '../components/button-dark.component';

function CustomElement(props) {
  return (
    <Container>
      <Typography variant='h1'>Custom elements</Typography>
      <h2>button-dark</h2>
      <ButtonDark values={{ transform: 'capitalize', bold: true }}>
        LOg IN
      </ButtonDark>
    </Container>
  );
}

export default CustomElement;

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '../components/button-custom.component';

function CustomElement(props) {
  return (
    <Container>
      <Typography variant='h1'>Custom elements</Typography>
      <Typography variant='h2'>button-custom</Typography>
      <p></p>
      <Button
        values={{ color: 'secondary', transform: 'capitalize', bold: true }}
      >
        LOg IN
      </Button>
    </Container>
  );
}

export default CustomElement;

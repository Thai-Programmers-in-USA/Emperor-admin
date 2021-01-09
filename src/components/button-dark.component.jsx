import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '40px',
    borderRadius: '40px',
    width: '280px',
    [theme.breakpoints.up('lg')]: {
      width: '360px',
    },
  },
}));

function ButtonDark({ children }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Button variant='contained' color='primary' className={classes.button}>
        <Typography>{children}</Typography>
      </Button>
    </Fragment>
  );
}

export default ButtonDark;

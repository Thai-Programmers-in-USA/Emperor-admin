import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomBtn = withStyles((theme) => {
  return {
    root: {
      height: '40px',
      borderRadius: '40px',
      width: '280px',
      [theme.breakpoints.up('lg')]: {
        width: 'size',
      },
    },
    label: ({ transform, bold }) => ({
      textTransform: `${transform}`,
      fontWeight: `${bold ? 'bold' : 'normal'}`,
    }),
  };
})(Button);

function ButtonDark({
  children,
  values: { transform = 'uppercase', bold = false },
}) {
  console.log(transform);
  return (
    <Fragment>
      <CustomBtn
        variant='contained'
        color='primary'
        transform={transform}
        bold={bold ? 1 : 0}
      >
        {children.toLowerCase()}
      </CustomBtn>
    </Fragment>
  );
}

export default ButtonDark;

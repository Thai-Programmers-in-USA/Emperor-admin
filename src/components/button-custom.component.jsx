import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomBtn = withStyles((theme) => {
  return {
    root: {
      height: '40px',
      borderRadius: '40px',
      width: '100%',
    },
    label: ({ transform, bold }) => ({
      textTransform: `${transform}`,
      fontWeight: `${bold ? 'bold' : 'normal'}`,
    }),
  };
})(Button);

function btn({
  children,
  values: { color = 'primary', transform = 'uppercase', bold = false },
}) {
  console.log(transform);
  return (
    <Fragment>
      <CustomBtn
        variant='contained'
        color={color}
        transform={transform}
        bold={bold ? 1 : 0}
      >
        {children.toLowerCase()}
      </CustomBtn>
    </Fragment>
  );
}

export default btn;

/**
 * > Breakpoints
 * xs: 0
 * sm: 576
 * md: 768
 * lg: 992
 * xl: 1200
 */

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1920,
    },
  },
});

export default theme;
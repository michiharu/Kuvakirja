import { teal, deepPurple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
  },
});

export default theme;

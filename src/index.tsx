import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import App from './App';
import theme from './theme';

const Providers = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<Providers />, document.querySelector('#root'));

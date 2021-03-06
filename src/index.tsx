import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import theme from './theme';
import Layout from './pages/layout/layout';

const Providers = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout/>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<Providers />, document.querySelector('#root'));

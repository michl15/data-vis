import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import './styles.css'
import 'animate.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from './redux';

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme='dark'>
      <Provider store={store}>
        <Router />
      </Provider>
    </MantineProvider>
  );
}

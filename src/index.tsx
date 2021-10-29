import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyles } from '@/styles/GlobalStyles';
import '@/assets/fonts/index.css';

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './scrollToTop';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);


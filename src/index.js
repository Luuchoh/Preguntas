import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

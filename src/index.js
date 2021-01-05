import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./state/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
ReactDOM.render(
   <ReduxProvider store={reduxStore}>
  <Router>
      <App />
    </Router>
 </ReduxProvider>,
  document.getElementById('root')
);

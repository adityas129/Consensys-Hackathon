import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import * as serviceWorker from './serviceWorker';
import VouchedOraclesStore from './contracts/VouchedOracles.json';
const options = {
  contracts: [VouchedOraclesStore],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />,
  </DrizzleContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

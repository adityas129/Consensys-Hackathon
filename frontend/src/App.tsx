import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChartComponent } from './chart';
import { Drizzle, DrizzleState, DrizzleContextData } from './drizzle';
import { OracleList } from './oracleList';
import { DrizzleContext } from 'drizzle-react';
import { newContextComponents } from 'drizzle-react-components';

const { ContractData } = newContextComponents;

const App = () => {
  return (
    <DrizzleContext.Consumer>
      {(drizzleContext: DrizzleContextData) => {
        const { drizzle, drizzleState, initialized } = drizzleContext;
        if (!initialized) {
          return;
        }

        console.log(drizzleState);
        /*         contract.methods
          .evaluateOracle('0xCfEB869F69431e42cdB54A4F4f105C19C080A601')
          .send()
          .then((data) => {
            console.log(data);
          });
        console.log(contract.methods); */

        return (
          <div className="App">
            <ChartComponent />
            <OracleList drizzle={drizzle} drizzleState={drizzleState} />
          </div>
        );
      }}
    </DrizzleContext.Consumer>
  );
};

export default App;

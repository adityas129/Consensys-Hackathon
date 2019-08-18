import React, { useState } from 'react';
import { Drizzle, DrizzleState } from '../drizzle';
import { Input } from 'semantic-ui-react';

export interface OracleListProps {
  drizzle: Drizzle;
  drizzleState: DrizzleState;
}

const OracleList = ({ drizzle, drizzleState }: OracleListProps) => {
  const contract = drizzle.contracts.VouchedOracles;

  const [what, setWhat] = useState('');
  const dataKey = contract.methods;
  /* 
  const derp = contract.methods.getRandomOracles as any;
  console.log(derp); */
  // console.log(dataKey(Buffer.from('XBTUSD'), 1));

  console.log(drizzleState.contracts.VouchedOracle);

  return (
    <div>
      <Input
        focus
        placeholder="Search Tag"
        action="Search"
        onChange={(change) => {
          setWhat(change.target.value);
        }}
      />
      <Input
        focus
        placeholder="Vouch Contract"
        action="Vouch Data Provider"
        onChange={(change) => {
          setWhat(change.target.value);
        }}
      />
    </div>
  );
};

export default OracleList;

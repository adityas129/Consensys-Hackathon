import {
  Contract,
  ABIDefinition,
  BlockType,
  EventLog,
  Callback,
  EventEmitter,
  IProvider,
} from 'web3/types';
import { TransactionObject } from 'web3/eth/types';

export interface VouchedOracleState {
  events: any[];
  oraclesBeingEvaluated: { [key: string]: any };
  voters: { [key: string]: any };
  votersArray: { [key: string]: any };
  votes: { [key: string]: any };
  vouchedOracleIndex: { [key: string]: any };
  vouchedOracle: { [key: string]: any };
  vouchedOracleByWhat: { [key: string]: any };
}

export interface VouchedOracle {
  options: {
    address: string;
    jsonInterface: ABIDefinition[];
    data: string;
    from: string;
    gasPrice: string;
    gas: number;
  };
  methods: {
    evaluateOracle: (
      address: string,
    ) => TransactionObject<any> & { cacheCall(): void };
    voteFor: (address: string) => TransactionObject<any>;
    voteAgainst: (address: string) => TransactionObject<any>;
    closeVote: (address: string) => TransactionObject<any>;
    getRandomOracles: (what: Buffer, size: number) => TransactionObject<any>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    [eventName: string]: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: string[];
      },
      cb?: Callback<EventLog>,
    ) => EventEmitter;
    allEvents: (
      options?: { filter?: object; fromBlock?: BlockType; topics?: string[] },
      cb?: Callback<EventLog>,
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: string[];
    },
    cb?: Callback<EventLog[]>,
  ): Promise<EventLog[]>;
  setProvider(provider: IProvider): void;
}

export interface Drizzle {
  store: any;
  contracts: {
    VouchedOracles: VouchedOracle;
  };
}

export interface DrizzleState {
  contracts: {
    VouchedOracle: VouchedOracleState;
  };
}

export interface DrizzleContextData {
  drizzle: Drizzle;
  drizzleState: DrizzleState;
  initialized: boolean;
}

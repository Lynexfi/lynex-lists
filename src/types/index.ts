export enum ChainId {
  LINEA_TESTNET = 59140,
  LINEA_MAINNET = 59144,
}

export enum Strategist {
  Gamma = 'Gamma',
  Ichi = 'Ichi',
  Steer = 'Steer',
}

export enum StrategyType {
  Narrow = 'Narrow',
  Stable = 'Stable',
  Wide = 'Wide',
  YieldIQ = 'yieldiq',
}

export interface NetworkTokenInfo {
  address: string;
  decimals: number;
  chainId: ChainId;
}

export interface Token {
  name: string;
  symbol: string;
  networks: NetworkTokenInfo[];
  logoURL?: string;
}

export interface Strategy {
  symbol: string;
  title: string;
  chainId: ChainId;
  type: StrategyType;
  strategist: Strategist;
  allowed0: boolean;
  allowed1: boolean;
  address: string;
  token0: Token;
  token1: Token;
  gaugeAddress?: string;
  rewardAddress?: string;
  depositToken?: string;
}

export interface Gauge {
  address: string;
  symbol: string;
  gauge: string;
  token0: Token;
  token1: Token;
  isStrategy: boolean;
  bribe: string;
}
export { tokens } from '../constants/tokens';

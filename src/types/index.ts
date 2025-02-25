export type PoolVariant = "uniV4" | "uniV3" | "algebraV3" | "classic";
export type Manager = "Ichi" | "Gamma" | "Steer" | "Defiedge" | "Clip Finance";
export type StrategyType = "Narrow" | "Stable" | "Wide" | "Single Deposit" | "Correlated" | "Long-Short" | "Classic Rebalance" | "High Low Channel" | "Elastic Expansion" | "Volatile";
export type Strategist =  "Ichi" | "Gamma" | "Steer" | "Defiedge" | "Clip Finance";

export interface Token {
  address: string;
}

export interface Strategy {
  symbol?: string; // Deprecated (kept for backward compatibility)
  lpSymbol: string;
  title: string;
  type: StrategyType;
  variant: PoolVariant;
  strategist?: Strategist; // Deprecated (optional for backward compatibility)
  manager: Manager;
  startBlock: number;
  allowed0: boolean;
  allowed1: boolean;
  address: string;
  token0: Token;
  token1: Token;
  depositToken?: string;
  token0Address?: string;
  token1Address?: string;
  rewardAddress?: string;
  percentage?: number;
  promoted?: boolean;
}
export interface Points {
  name: string
  logoUrl: string
  infoUrl: string
  poolAddresses: string[]
}
export type Strategies = Record<number, Strategy[]>;



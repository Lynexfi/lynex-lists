export interface VeStrategyDefinition {
  managerAddress: string;
  vaultAddress: string;
  rewardToken: string;
  enabled: boolean;
  maxPools: number;
}

export type VeStrategiesByName = Record<string, VeStrategyDefinition>;

export const veStrategies: Record<number, VeStrategiesByName> = {
  // Unichain
  130: {
    stables_strategy: {
      managerAddress: "0x2e49a59dd7614599e98708a14e011d3c8ca3adea",
      vaultAddress: "0x0e306f77508fd928AdB7ecDa792EFc173c6C64bE",
      rewardToken: "0x078D782b760474a361dDA0AF3839290b0EF57AD6", // USDC
      enabled: true,
      maxPools: 5,
    },
  },
  // Linea (placeholder for future strategies)
  59144: {},
  // Zircuit (placeholder for future strategies)
  48900: {},
};



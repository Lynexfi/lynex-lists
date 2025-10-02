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
  59144: {
    giga_chad_usdt_stable_maxxer_deluxe_3000_strategy: {
      managerAddress: "0x421Ba41944a0fdc425d7d6eEd9005c49855882ab",
      vaultAddress: "0x2ab3379865fF6673CDe7DE4F6bB2Cd12dd542622",
      rewardToken: "0xA219439258ca9da29E9Cc4cE5596924745e12B93", // USDT
      enabled: true,
      maxPools: 5,
    },
    only_the_og_satoshi_pumpfather_btc_strategy: {
      managerAddress: "0xe45f392f3fedcaeb38b7750db02063372d851765",
      vaultAddress: "0xD963E7138BD4728F3B6d440A4ABa4ab7F79EC164",
      rewardToken: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4", // BTC
      enabled: true,
      maxPools: 5,
    }
  },
  // Zircuit (placeholder for future strategies)
  48900: {},
};



export interface VeStrategyDefinition {
  strategyName: string;
  strategyDescription: string;
  managerAddress: string;
  vaultAddress: string;
  rewardToken: string;
  bveToken: string;
  enabled: boolean;
  maxPools: number;
  isCompound?: boolean;
}

export type VeStrategiesByName = Record<string, VeStrategyDefinition>;

export const veStrategies: Record<number, VeStrategiesByName> = {
  // LINEA
  59144: {
    usdt_stable_strategy: {
      strategyName: "USDT Stable Strategy",
      strategyDescription: "Stablecoin strategy earning USDT rewards",
      managerAddress: "0x65dfb41c6927db8f47f588a46045f1ecb95157a6",
      vaultAddress: "0x738fbc1ddade27142b3eb635bb11cae2f4be1fa1",
      rewardToken: "0xA219439258ca9da29E9Cc4cE5596924745e12B93", // USDT
      bveToken: '0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B',
      enabled: true,
      maxPools: 5,
    },
    btc_strategy: { 
      strategyName: "Bitcoin Strategy",
      strategyDescription: "Bitcoin strategy earning WBTC rewards",
      managerAddress: "0x6bd8d87cc0c34dae25bcf78d0b2cd9b272ee5cb8",
      vaultAddress: "0x2abb2972268cb1a0e082b5f36d6ba822273abae9",
      rewardToken: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4", // BTC
      bveToken: '0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B',
      enabled: true,
      maxPools: 5,
    },
    eth_strategy: {
      strategyName: "ETH Strategy",
      strategyDescription: "Ethereum strategy earning WETH rewards",
      managerAddress: "0xbca431c7da6fcf6b2b87b59463f26f620da38bd1",
      vaultAddress: "0x1548bbbf9788bcd44a8c1a6e396d816c695d3677",
      rewardToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f", // ETH
      bveToken: '0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B',
      enabled: true,
      maxPools: 5,
    },
    lynx_autocompound_strategy: {
      strategyName: "Lynx Compound Strategy",
      strategyDescription: "Lynx compound strategy earning LYNX rewards",
      managerAddress: "0x46a2368891ef0654d63c322ebeb1a595e3e9389f",
      vaultAddress: "0x80eeb3652d1c2798891989a5b4801482e3818c3f",
      rewardToken: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af", // LYNX
      bveToken: '0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B',
      enabled: true,
      maxPools: 5,
      isCompound: true,
    }
  },
  // ZIRCUIT
  48900: {},
  // UNICHAIN
  130: {},
};



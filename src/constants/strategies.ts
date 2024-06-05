import { tokens, Strategist, StrategyType, ChainId } from "../types/index";

const strategies = [
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "BUSD/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x6e9d701fb6478ed5972a37886c2ba6c82a4cbb4c",
    token0: "0x7d43AABC515C356145049227CeE54B608342c0ad",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "WBTC/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x8a9570ec97534277ade6e46d100939fbce4968f0",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/BUSD Stable",
    title: "GAMMA_STABLE",
    type: StrategyType.Stable,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xd6cc4a33da7557a629e819c68fb805ddb225f517",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x7d43AABC515C356145049227CeE54B608342c0ad",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "BUSD/USDT Stable",
    title: "GAMMA_STABLE",
    type: StrategyType.Stable,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x32e27ff479454e32868ff67ee9f06bafdc1e908f",
    token0: "0x7d43AABC515C356145049227CeE54B608342c0ad",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDT/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xf3b1125c8505f038503e002e61a78253610d4f60",
    token0: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    token1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x0b15a5e3ca0d4b492c3b476d0f807535f9b72079",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "MATIC/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x8421c6102ee8a147facc01977df3b159f7921d54",
    token0: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/LYNX Wide",
    title: "Gamma Wide",
    type: StrategyType.Wide,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xcC86572Ce5a6EEe74c76c57E9ea7b08221F06bb9",
    token0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    token1: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "wBTC/USDC Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xa3d9745dcd138bd2ba4b039fa61c042756bfe1e8",
    token0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    token1: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "wstETH/ETH Correlated",
    title: "Gamma Correlated",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xEa5abd5d15B8CD168e9eFf78047DB52aF079e094",
    token0: "0xb5bedd42000b71fdde22d3ee8a79bd49a568fc8f",
    token1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "STONE/ETH Correlated",
    title: "Gamma Correlated",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0xcfFBFD665BEdB19B47837461A5aBf4388C560D35",
    token0: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
    token1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "ezETH/ETH Correlated",
    title: "Gamma Correlated",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x392AC7d2D09042EC9fAfAEb8D52a88Dc591E9feA",
    token0: "0x2416092f143378750bb29b79ed961ab195cceea5",
    token1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
  },

  /************ ICHI Strategies Starts Here ************/
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/WETH Narrow",
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    title: "Yield IQ",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    address: "0x4f74ED3b2278dAE2119658aB2c235BBcd2306d29",
    depositToken: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    allowed0: true,
    allowed1: false,
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "WETH/USDC Narrow",
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    title: "Yield IQ",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    address: "0x00b34e51ac2a78761982485a618b235a211f5d86",
    depositToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    allowed0: false,
    allowed1: true,
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "wBTC/WETH Narrow",
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    title: "Yield IQ",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    address: "0xad53f20917b144cd0b100dbe75988c0e4b919dba",
    depositToken: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    allowed0: true,
    allowed1: false,
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "wETH/LYNX",
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    title: "Yield IQ",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    address: "0x511481ef0DEB10eB5c1E36B72140718c58921265",
    depositToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    allowed0: false,
    allowed1: true,
    token0: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/LYNX Narrow",
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    title: "Yield IQ",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    address: "0x92ccb773da4f3974c941974bDb978bAd7efa7744",
    depositToken: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    allowed0: true,
    allowed1: false,
    token0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    token1: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "wBTC/LYNX Narrow",
    title: "Yield IQ (wBTC)",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    rewardAddress: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    address: "0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae",
    depositToken: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
    allowed0: false,
    allowed1: true,
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDT/LYNX Narrow",
    title: "Yield IQ (USDT)",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    allowed0: false,
    allowed1: true,
    address: "0x555267747b0918ABce10335F154FbE7B636F7804",
    depositToken: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    token0: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
    token1: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "STONE/LYNX Narrow",
    title: "Yield IQ (STONE)",
    type: StrategyType.YieldIQ,
    strategist: Strategist.Ichi,
    allowed0: false,
    allowed1: true,
    address: "0xe57F293520CBf7d5a17629CbFB06eAbdb759a151",
    depositToken: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
    token0: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
    token1: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
  },
  /************ Steer Vaults Starts Here ************/
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/USDT Narrow",
    title: "Steer Stable",
    type: StrategyType.Stable,
    strategist: Strategist.Steer,
    allowed0: true,
    allowed1: true,
    address: "0x2babed912322c355f4b8b58ea568727892ca3f05",
    token0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    token1: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
  },
  {
    chainId: ChainId.LINEA_MAINNET,
    symbol: "USDC/EUR3 Narrow",
    title: "Steer Stable",
    type: StrategyType.Stable,
    strategist: Strategist.Steer,
    allowed0: true,
    allowed1: true,
    address: "0x77a0006fdeb1ce7f521a01852a632b2a21490d67",
    token0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    token1: "0x3f817b28da4940f018c6b5c0a11c555ebb1264f9",
  },

  /************  Testnet Strategies Starts Here ************/
  {
    chainId: ChainId.LINEA_TESTNET,
    symbol: "USDC/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    address: "0x6e9d701fB6478Ed5972a37886C2BA6C82a4cBb4C",
    token0: "0x2c1b868d6596a18e32e61b901e4060c872647b6c",
    token1: "0xc0f8ee736cec8c1a12e9c25272e6f417510165ff",
    allowed0: true,
    allowed1: true,
  },
];

export { strategies };
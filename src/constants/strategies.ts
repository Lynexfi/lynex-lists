import { Strategist, StrategyType, ChainId } from "../types/index";

const strategies = {
  59144: [
    {
      symbol: "WBTC/WETH Narrow",
      title: "Gamma Narrow",
      type: "Narrow",
      address: "0x8a9570ec97534277ade6e46d100939fbce4968f0",
      token0: {
        address: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "USDC/BUSD Stable",
      title: "Gamma Stable",
      type: "Stable",
      address: "0xd6cc4a33da7557a629e819c68fb805ddb225f517",
      token0: {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      },
      token1: {
        address: "0x7d43AABC515C356145049227CeE54B608342c0ad",
      },
    },
    {
      symbol: "BUSD/USDT Stable",
      title: "Gamma Stable",
      type: "Stable",
      address: "0x32e27ff479454e32868ff67ee9f06bafdc1e908f",
      token0: {
        address: "0x7d43AABC515C356145049227CeE54B608342c0ad",
      },
      token1: {
        address: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
      },
    },
    {
      symbol: "USDT/WETH Narrow",
      title: "Gamma Narrow",
      type: "Narrow",
      address: "0xf3b1125c8505f038503e002e61a78253610d4f60",
      token0: {
        address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "USDC/WETH Narrow",
      title: "Gamma Narrow",
      type: "Narrow",
      address: "0x0b15a5e3ca0d4b492c3b476d0f807535f9b72079",
      token0: {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "MATIC/WETH Narrow",
      title: "Gamma Narrow",
      type: "Narrow",
      address: "0x8421c6102ee8a147facc01977df3b159f7921d54",
      token0: {
        address: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "USDC/LYNX Wide",
      title: "Gamma Wide",
      type: "Wide",
      address: "0xcC86572Ce5a6EEe74c76c57E9ea7b08221F06bb9",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af ",
      },
    },
    {
      symbol: "CROAK/WETH Wide",
      title: "Gamma Wide",
      type: "Wide",
      strategist: "Gamma",
      startBlock: 5012342,
      allowed0: true,
      allowed1: true,
      address: "0x624919d32d1563e33710b585f212664701869e64",
      token0: {
        address: "0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f ",
      },
    },
    {
      symbol: "USDC/wBTC Narrow",
      title: "Gamma Narrow",
      type: "Narrow",
      startBlock: 2829521,
      address: "0xa3d9745dcd138bd2ba4b039fa61c042756bfe1e8",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4 ",
      },
    },
    {
      symbol: "wstETH/ETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      startBlock: 3185045,
      address: "0xEa5abd5d15B8CD168e9eFf78047DB52aF079e094",
      token0: {
        address: "0xb5bedd42000b71fdde22d3ee8a79bd49a568fc8f",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f ",
      },
    },
    {
      symbol: "STONE/ETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      startBlock: 3185045,
      address: "0xcfFBFD665BEdB19B47837461A5aBf4388C560D35",
      token0: {
        address: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f ",
      },
    },
    {
      symbol: "ezETH/ETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      startBlock: 3185045,
      address: "0x392AC7d2D09042EC9fAfAEb8D52a88Dc591E9feA",
      token0: {
        address: "0x2416092f143378750bb29b79ed961ab195cceea5",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f ",
      },
    },
    {
      symbol: "uniETH/ETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      strategist: "Gamma",
      startBlock: 4037230,
      allowed0: true,
      allowed1: true,
      address: "0x0A4A0C5bC4D404d48a5A47ef9197500acBdEa0a8",
      token0: {
        address: "0x15EEfE5B297136b8712291B632404B66A8eF4D25",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f ",
      },
    },
    {
      symbol: "weETH/WETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      startBlock: 4131814,
      strategist: "Gamma",
      allowed0: true,
      allowed1: true,
      address: "0x530071b0373ab3029cad32e0c19b75253e231b69",
      token0: {
        address: "0x1bf74c010e6320bab11e2e5a532b5ac15e0b8aa6",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f ",
      },
    },
    {
      symbol: "inETH/ETH Correlated",
      title: "Gamma Correlated",
      type: "Narrow",
      startBlock: 4505899,
      strategist: "Gamma",
      allowed0: true,
      allowed1: true,
      address: "0xC491C1b173E932E97d9F739ccD9AE5b6d5FcE4ce",
      token0: {
        address: "0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d",
      },
      token1: {
        address: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
      },
    },
    {
      symbol: "NWG/WETH Wide",
      title: "Gamma Wide",
      type: "Wide",
      strategist: "Gamma",
      startBlock: 5246889,
      allowed0: true,
      allowed1: true,
      address: "0xa45f03ffa6d5b7C5f8484B02Ed5301Ed59d47c4d",
      token0: {
        address: "0xE2a6e74118E708f7652FC4c74D2F9Ee5Fa210563",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "PEPE/WETH Wide",
      title: "Gamma Wide",
      type: "Wide",
      strategist: "Gamma",
      startBlock: 5246889,
      allowed0: true,
      allowed1: true,
      address: "0xEA392b8332378cA039d6b91d024B94Ce9D1c31b6",
      token0: {
        address: "0x7da14988E4f390C2E34ed41DF1814467D3aDe0c3 ",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    // ICHI Pools
    {
      symbol: "USDC/WETH Narrow",
      title: "Yield IQ (USDC)",
      type: "YieldIQ",
      address: "0x4f74ED3b2278dAE2119658aB2c235BBcd2306d29",
      depositToken: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      token0: {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "WETH/USDC Narrow",
      title: "Yield IQ (WETH)",
      type: "YieldIQ",
      address: "0x00b34e51ac2a78761982485a618b235a211f5d86",
      depositToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      token0: {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "wBTC/WETH Narrow",
      title: "Yield IQ (wBTC)",
      type: "YieldIQ",
      address: "0xad53f20917b144cd0b100dbe75988c0e4b919dba",
      depositToken: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
      token0: {
        address: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "wETH/LYNX",
      title: "Yield IQ (wETH)",
      type: "YieldIQ",
      address: "0x511481ef0DEB10eB5c1E36B72140718c58921265",
      depositToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      token0: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "USDC/LYNX Narrow",
      title: "Yield IQ (USDC)",
      type: "YieldIQ",
      address: "0x92ccb773da4f3974c941974bDb978bAd7efa7744",
      depositToken: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
      },
    },
    {
      symbol: "wBTC/LYNX Narrow",
      title: "Yield IQ (wBTC)",
      type: "YieldIQ",
      startBlock: 2848144,
      address: "0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae",
      depositToken: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
      },
    },
    {
      symbol: "USDT/LYNX Narrow",
      title: "Yield IQ (USDT)",
      type: "YieldIQ",
      startBlock: 3185045,
      address: "0x555267747b0918ABce10335F154FbE7B636F7804",
      depositToken: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
      token0: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
      },
      token1: {
        address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
      },
    },
    {
      symbol: "STONE/LYNX Narrow",
      title: "Yield IQ (STONE)",
      type: "YieldIQ",
      startBlock: 3185045,
      address: "0xe57F293520CBf7d5a17629CbFB06eAbdb759a151",
      depositToken: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
      token0: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af",
      },
      token1: {
        address: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
      },
    },
    {
      symbol: "FOXY/WETH Narrow",
      title: "Yield IQ (WETH)",
      type: "YieldIQ",
      strategist: "Ichi",
      startBlock: 3602146,
      allowed0: false,
      allowed1: true,
      address: "0x1795C4b23Ec93C852653045DaB4dD1AC796D5248",
      depositToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      token0: {
        address: "0x5fbdf89403270a1846f5ae7d113a989f850d1566",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "FOXY/WETH Narrow",
      title: "Yield IQ (FOXY)",
      type: "YieldIQ",
      strategist: "Ichi",
      startBlock: 3602146,
      allowed0: true,
      allowed1: false,
      address: "0x9d9070462eB1CBFE2b8cfA337bb4D0A3Ac420bD6",
      depositToken: "0x5fbdf89403270a1846f5ae7d113a989f850d1566",
      token0: {
        address: "0x5fbdf89403270a1846f5ae7d113a989f850d1566",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "ZERO/WETH YieldIQ",
      title: "Yield IQ (WETH)",
      type: "YieldIQ",
      strategist: "Ichi",
      startBlock: 4293729,
      allowed0: false,
      allowed1: true,
      address: "0x9e480e37a036b6703818D701544763a36bfed35b",
      depositToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      token0: {
        address: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    // Steer Vaults
    {
      symbol: "USDC/USDT Narrow",
      title: "Steer Stable",
      type: "Stable",
      startBlock: 3185045,
      address: "0x2babed912322c355f4b8b58ea568727892ca3f05",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
      },
    },
    {
      symbol: "USDC/EUR3 Narrow",
      title: "Steer Stable",
      type: "Stable",
      startBlock: 3185045,
      address: "0x77a0006fdeb1ce7f521a01852a632b2a21490d67",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x3f817b28da4940f018c6b5c0a11c555ebb1264f9",
      },
    },
    {
      symbol: "EUR3/USD+ Narrow",
      title: "Steer Stable",
      type: "Stable",
      startBlock: 4037230,
      strategist: "Steer",
      allowed0: true,
      allowed1: true,
      address: "0x8dabf94c7bdd771e448a4ae4794cd71f9f3d7a0d",
      token0: {
        address: "0x3f817b28da4940f018c6b5c0a11c555ebb1264f9",
      },
      token1: {
        address: "0xb79dd08ea68a908a97220c76d19a6aa9cbde4376",
      },
    },
    {
      symbol: "USDT/WETH Narrow",
      title: "Steer (Classic Rebalance)",
      type: "Classic Rebalance",
      strategist: "Steer",
      startBlock: 3925707,
      url: "https://app.steer.finance/vault/0x96411166448feed82661e164c38fc71d0ff169b0/59144",
      allowed0: true,
      allowed1: true,
      address: "0x96411166448feed82661e164c38fc71d0ff169b0",
      token0: {
        address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "USDC/WETH Narrow",
      title: "Steer (High Low Channel)",
      type: "High Low Channel",
      strategist: "Steer",
      startBlock: 3925707,
      url: "https://app.steer.finance/vault/0x504f0d95d3a43a6c9fcd86782a93e043e78d1ab0/59144",
      allowed0: true,
      allowed1: true,
      address: "0x504f0d95d3a43a6c9fcd86782a93e043e78d1ab0",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "WBTC/WETH Narrow",
      title: "Steer (Elastic Expansion)",
      type: "Elastic Expansion",
      strategist: "Steer",
      startBlock: 3925707,
      url: "https://app.steer.finance/vault/0x24c6d82d316f80421f3e0f58c70127a97a5f1db7/59144",
      allowed0: true,
      allowed1: true,
      address: "0x24c6d82d316f80421f3e0f58c70127a97a5f1db7",
      token0: {
        address: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    {
      symbol: "ankrETH/ANKR Narrow",
      title: "Steer (Classic Rebalance)",
      type: "Classic Rebalance",
      strategist: "Steer",
      startBlock: 4408031,
      url: "https://app.steer.finance/vault/0x27d09198fe47ac4e3e9f622032a71e26df776e99/59144",
      allowed0: true,
      allowed1: true,
      address: "0x27d09198fe47ac4e3e9f622032a71e26df776e99",
      token0: {
        address: "0x11D8680C7f8f82F623e840130eB06C33d9F90c89",
      },
      token1: {
        address: "0xa8Ae6365383eb907e6b4B1B7E82A35752cC5Ef8C",
      },
    },
    {
      symbol: "ankrETH/wstETH Correlated",
      title: "Steer (Classic Rebalance)",
      type: "Classic Rebalance",
      strategist: "Steer",
      startBlock: 4408031,
      allowed0: true,
      allowed1: true,
      address: "0xcc2be07ad5d1bd4621726cfddbef2ffd248b8d70",
      url: "https://app.steer.finance/vault/0xcc2be07ad5d1bd4621726cfddbef2ffd248b8d70/59144",
      token0: {
        address: "0x11D8680C7f8f82F623e840130eB06C33d9F90c89",
      },
      token1: {
        address: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F ",
      },
    },
    {
      symbol: "SolvBTC.m/WETH Narrow",
      title: "Steer (Classic Rebalance)",
      type: "Classic Rebalance",
      strategist: "Steer",
      startBlock: 4741802,
      url: "https://app.steer.finance/vault/0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63/59144",
      allowed0: true,
      allowed1: true,
      address: "0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63",
      token0: {
        address: "0x5FFcE65A40f6d3de5332766ffF6A28BF491C868c",
      },
      token1: {
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      },
    },
    // Defiedge
    {
      symbol: "USDC/DAI Stable",
      title: "DefiEdge (Stable)",
      type: "Stable",
      strategist: "Defiedge",
      startBlock: 5125892,
      allowed0: true,
      allowed1: true,
      address: "0xadd8d818b15c7ed8f4872d4e1fd409238668ffcc",
      url: "https://app.defiedge.io/s/linea/0xadd8d818b15c7ed8f4872d4e1fd409238668ffcc",
      token0: {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      },
      token1: {
        address: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
      },
    },
    {
      symbol: "DOGE/WETH Volatile",
      title: "DefiEdge (Volatile)",
      type: "Volatile",
      strategist: "Defiedge",
      startBlock: 5160385,
      allowed0: true,
      allowed1: true,
      address: "0x091872441a89b699ccc805c1d1ec67c4f2c8fa2c",
      url: "https://app.defiedge.io/s/linea/0x091872441a89b699ccc805c1d1ec67c4f2c8fa2c",
      token0: {
        address: "0x5ed3675867Ae3E3582b819cCB88f48c836E69edE",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "DAI/WETH Volatile",
      title: "DefiEdge (Volatile)",
      type: "Volatile",
      strategist: "Defiedge",
      startBlock: 5160385,
      allowed0: true,
      allowed1: true,
      address: "0xd14a66cb33d07cc019d990a1f62c7ab9bc20a418",
      url: "https://app.defiedge.io/s/linea/0xd14a66cb33d07cc019d990a1f62c7ab9bc20a418",
      token0: {
        address: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
    {
      symbol: "SHIB/WETH Volatile",
      title: "DefiEdge (Volatile)",
      type: "Volatile",
      strategist: "Defiedge",
      startBlock: 5160385,
      allowed0: true,
      allowed1: true,
      address: "0x620855ac3dcf06dbb12647b997a991f479442f7d",
      url: "https://app.defiedge.io/s/linea/0x620855ac3dcf06dbb12647b997a991f479442f7d",
      token0: {
        address: "0x99AD925C1Dc14Ac7cc6ca1244eeF8043C74E99d5",
      },
      token1: {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      },
    },
  ],
  59140: [
    /************  Testnet Strategies Starts Here ************/
    {
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
  ],
};

export { strategies };

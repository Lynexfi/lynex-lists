import { Token, ChainId } from "../types/index";

// This part of this repo is created in case will be usable in the future.
export const tokens: { [key: string]: Token } = {
  lynx: {
    name: "Lynex",
    symbol: "LYNX",
    logoURL:
      "https://assets.coingecko.com/coins/images/34874/large/LogoCircular_200x200.png",
    networks: [
      {
        address: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0xCa1B6EB5B97b61813B3444DE45Be5897d8Cd6d9E",
        decimals: 18,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  weth: {
    name: "Wrapped ETH",
    symbol: "WETH",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    networks: [
      {
        address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0x2C1b868d6596a18e32E61B901E4060C872647b6C",
        decimals: 18,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  usdc: {
    name: "USD Coin",
    symbol: "USDC",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    networks: [
      {
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
        decimals: 6,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0xC0f8eE736cEC8c1a12e9c25272e6f417510165FF",
        decimals: 8,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  usdcf: {
    name: "USD Faucet Coin",
    symbol: "USDC.f",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    networks: [
      {
        address: "0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068",
        decimals: 6,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  olynx: {
    name: "Options Lynex",
    symbol: "oLYNX",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WDAI.png",
    networks: [
      {
        address: "0x63349BA5E1F71252eCD56E8F950D1A518B400b60",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0xB289A81228D77C19167Cd8129218631325f55f81",
        decimals: 18,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  mvx: {
    name: "Metavault Trade",
    symbol: "MVX",
    logoURL:
      "https://s3.coinmarketcap.com/static-gravity/image/d638d1a668254baa9aff4c2c44d095cd.png",
    networks: [
      {
        address: "0x0018D96C579121a94307249d47F053E2D687b5e7",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  axllqdr: {
    name: "Axelar Wrapped LQDR",
    symbol: "axlLQDR",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/13246.png",
    networks: [
      {
        address: "0x332c72dd7E77070740F01d2d35851c461585D5d0",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  xrgb: {
    name: "XRGB",
    symbol: "XRGB",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/29615.png",
    networks: [
      {
        address: "0x5cc5e64ab764a0f1e97f23984e20fd4528356a6a",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  usdt: {
    name: "Tether",
    symbol: "USDT",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    networks: [
      {
        address: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
        decimals: 6,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0x0DFc6bb7eEE496CD789B60255F7B2982F8069415",
        decimals: 18,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  wbtc: {
    name: "Wrapped BTC",
    symbol: "WBTC",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
    networks: [
      {
        address: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
        decimals: 8,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0xcaB401c6425ee60542b78371E40365a039281BD2",
        decimals: 6,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  busd: {
    name: "BUSD",
    symbol: "BUSD",
    logoURL:
      "https://s3.coinmarketcap.com/static/img/portraits/62da512ff192d82df80012bb.png",
    networks: [
      {
        address: "0x7d43AABC515C356145049227CeE54B608342c0ad",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
      {
        address: "0x7d43AABC515C356145049227CeE54B608342c0ad",
        decimals: 18,
        chainId: ChainId.LINEA_TESTNET,
      },
    ],
  },
  dai: {
    name: "Dai Stablecoin",
    symbol: "DAI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
    networks: [
      {
        address: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  wdai: {
    name: "Wrapped DAI",
    symbol: "wDAI",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WDAI.png",
    networks: [
      {
        address: "0x023617bAbEd6CeF5Da825BEa8363A5a9862E120F",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  bvelynx: {
    name: "Bribe veLYNX",
    symbol: "bveLYNX",
    logoURL: "https://alpha.lynex.fi/images/tokens/bveLYNX.png",
    networks: [
      {
        address: "0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  dvf: {
    name: "DeversiFi Token",
    symbol: "DVF",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/10759.png",
    networks: [
      {
        address: "0x1f031f8c523b339c7a831355879e3568fa3eb263",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  hapi: {
    name: "HAPI Protocol",
    symbol: "HAPI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/8567.png",
    networks: [
      {
        address: "0x0e5F2ee8C29e7eBc14e45dA7FF90566d8c407dB7",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  knc: {
    name: "Kyber Network Crystal v2",
    symbol: "KNC",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/9444.png",
    networks: [
      {
        address: "0x3b2F62d42DB19B30588648bf1c184865D4C3B1D6",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ldo: {
    name: "Lido DAO Token",
    symbol: "LDO",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/8000.png",
    networks: [
      {
        address: "0x0e076AAFd86a71dCEAC65508DAF975425c9D0cB6",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  link: {
    name: "ChainLink Token",
    symbol: "LINK",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
    networks: [
      {
        address: "0x5B16228B94b68C7cE33AF2ACc5663eBdE4dCFA2d",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  pepe: {
    name: "Pepe",
    symbol: "PEPE",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
    networks: [
      {
        address: "0x7da14988E4f390C2E34ed41DF1814467D3aDe0c3",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  shib: {
    name: "SHIBA INU",
    symbol: "SHIB",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/14341.png",
    networks: [
      {
        address: "0x99AD925C1Dc14Ac7cc6ca1244eeF8043C74E99d5",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  uni: {
    name: "Uniswap",
    symbol: "UNI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
    networks: [
      {
        address: "0x636B22bC471c955A8DB60f28D4795066a8201fa3",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  matic: {
    name: "Matic Token",
    symbol: "MATIC",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
    networks: [
      {
        address: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  usdtPlus: {
    name: "Overnight USDT+",
    symbol: "USDT+",
    logoURL: "https://assets.coingecko.com/coins/images/30168/large/USDT_.png",
    networks: [
      {
        address: "0x1e1f509963a6d33e169d9497b11c7dbfe73b7f13",
        decimals: 6,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  stone: {
    name: "StakeStone Ether",
    symbol: "STONE",
    logoURL:
      "https://storage.googleapis.com/ks-setting-1d682dca/dee351e5-ff61-4a8f-994d-82f3078119661696785945490.png",
    networks: [
      {
        address: "0x93f4d0ab6a8b4271f4a28db399b5e30612d21116",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  unieth: {
    name: "Universal ETH",
    symbol: "uniETH",
    logoURL:
      "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0xf1376bcef0f78459c0ed0ba5ddce976f1ddf51f4.png",
    networks: [
      {
        address: "0x15EEfE5B297136b8712291B632404B66A8eF4D25",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ezeth: {
    name: "Renzo Restaked ETH",
    symbol: "ezETH",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ezETH.png",
    networks: [
      {
        address: "0x2416092f143378750bb29b79ed961ab195cceea5",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  mendi: {
    name: "Mendi Finance",
    symbol: "MENDI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/27844.png",
    networks: [
      {
        address: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ageur: {
    name: "Angle EUR",
    symbol: "agEUR",
    logoURL:
      "https://raw.githubusercontent.com/AngleProtocol/angle-assets/main/0_tokens/agEUR/agEUR.png",
    networks: [
      {
        address: "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  a3a: {
    name: "3A Utility Token",
    symbol: "A3A",
    logoURL: "https://app.3adao.org/3alogo.png",
    networks: [
      {
        address: "0x3d4b2132eD4eA0aa93903713a4dE9F98e625a5c7",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ordi: {
    name: "ORDI",
    symbol: "ORDI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/25028.png",
    networks: [
      {
        address: "0xec45e3c3c5410cbdbce81dd35edcf9f0f13fc2cb",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  sats: {
    name: "SATS",
    symbol: "SATS",
    logoURL: "https://www.okx.com/cdn/wallet/logo/brc20-sats.png",
    networks: [
      {
        address: "0xbfa536126c1c2b7cba94807a39213fab913950a3",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ndx: {
    name: "NASDAQ 100",
    symbol: "NDX",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/NDX.png",
    networks: [
      {
        address: "0xa09d7f02bad175a9d6bcbedf1a992eead1e33604",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  indx: {
    name: "iNASDAQ 100",
    symbol: "iNDX",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/iNDX.png",
    networks: [
      {
        address: "0xA7020f1Cf5d3aAa5f6f9f376d10D0DbFf647C4Cb",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  euro3: {
    name: "EURO3",
    symbol: "EURO3",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/EURO3.png",
    networks: [
      {
        address: "0x3F817b28Da4940F018C6b5c0A11C555ebB1264f9",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  fxs: {
    name: "Frax Share",
    symbol: "FXS",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/6953.png",
    networks: [
      {
        address: "0x0A79e44c99505c7f388CA30c787ff97217E73ecC",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  mai: {
    name: "Mai Stablecoin",
    symbol: "MAI",
    logoURL:
      "https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png",
    networks: [
      {
        address: "0xf3B001D64C656e30a62fbaacA003B1336b4ce12A",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  wsteth: {
    name: "Wrapped liquid staked Ether 2.0",
    symbol: "wstETH",
    logoURL: "https://cryptologos.cc/logos/steth-steth-logo.png",
    networks: [
      {
        address: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  dusd: {
    name: "Davos USD",
    symbol: "DUSD",
    logoURL: "https://alpha.lynex.fi/images/tokens/DUSD.png",
    networks: [
      {
        address: "0xa88b54e6b76fb97cdb8ecae868f1458e18a953f4",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  foxy: {
    name: "Foxy",
    symbol: "FOXY",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/FOXY.png",
    networks: [
      {
        address: "0x5fbdf89403270a1846f5ae7d113a989f850d1566",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  zero: {
    name: "ZeroLend",
    symbol: "ZERO",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ZERO.png",
    networks: [
      {
        address: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ankr: {
    name: "Ankr Network",
    symbol: "ANKR",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ANKR.png",
    networks: [
      {
        address: "0xa8ae6365383eb907e6b4b1b7e82a35752cc5ef8c",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ankreth: {
    name: "Ankr Staked ETH",
    symbol: "ankrETH",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ankrETH.png",
    networks: [
      {
        address: "0x11d8680c7f8f82f623e840130eb06c33d9f90c89",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  mpeth: {
    name: "MetaPoolETH",
    symbol: "mpETH",
    logoURL: "https://www.metapool.app/icons/mpETH.png",
    networks: [
      {
        address: "0xda7d3Ef7c899079EB101F3B31c272DBe9639BDA6",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  ineth: {
    name: "InceptionLRT restaked ETH",
    symbol: "inETH",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/inETH.png",
    networks: [
      {
        address: "0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  weeth: {
    name: "Wrapped eETH",
    symbol: "weETH",
    logoURL:
      "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/weETH.png",
    networks: [
      {
        address: "0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  smendi: {
    name: "Staked Mendi",
    symbol: "sMENDI",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/27844.png",
    networks: [
      {
        address: "0x150b1e51738CdF0cCfe472594C62d7D6074921CA",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  lucia: {
    name: "Lucia",
    symbol: "LUCIA",
    networks: [
      {
        address: "0x4Fa0dE5d9217722A37247808c08Cde1C976879b9",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
  usdp: {
    name: "USD+",
    symbol: "USD+",
    networks: [
      {
        address: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
        decimals: 18,
        chainId: ChainId.LINEA_MAINNET,
      },
    ],
  },
};
import { tokens } from "./tokens";
import { Gauge } from "../types/index";

const gauges = [
  {
    address: "0x00b34e51ac2a78761982485a618b235a211f5d86",
    symbol: "USDC/WETH (YieldIQ)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x00ecabf9dc65ea9b2468d702ba2359f8137f776d",
    symbol: "sAMM-USDC/EURO3",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3F817b28Da4940F018C6b5c0A11C555ebB1264f9",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x06170045bba66914ffa03f6cb2fc5a3f8dc0ddb7",
    symbol: "vAMM-LYNX/XRGB",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x5cc5E64AB764A0f1E97F23984E20fD4528356a6a",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x0b15a5e3ca0d4b492c3b476d0f807535f9b72079",
    symbol: "USDC/WETH (Narrow)",
    gauge: "0xEf79A12c48973f0193E67730C8636485Da59f0FD",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x97c2592D52A181dc23F401f8ba63E552B9c3C56e",
  },
  {
    address: "0x0cafbb18ffe4d91a858bb05011818c5358d99095",
    symbol: "vAMM-USDC/MAI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xf3B001D64C656e30a62fbaacA003B1336b4ce12A",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x1129a2b570906ea0d1a1cff94c274cb17ad69a8c",
    symbol: "sAMM-MATIC/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x11e29b541abe15984c863c10f3ef9ecbcc078031",
    symbol: "sAMM-USDT/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x1c6fb08c1ef4e505a4ae3ffc3c99e443070df64a",
    symbol: "vAMM-LYNX/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x1c843458ab1d2f8198b632f519232223e9d81370",
    symbol: "vAMM-sMendi/MENDI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x150b1e51738CdF0cCfe472594C62d7D6074921CA",
    token1: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x23ccaff2639695b74d11da36bef2b5ecefe3509e",
    symbol: "sAMM-USDC/A3A",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3d4b2132eD4eA0aa93903713a4dE9F98e625a5c7",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x29df8a5d68937ab016a354a45510208d6e75c5cc",
    symbol: "vAMM-LILI/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xCa7d460C83678C358E8FC9b9629E8aC36D67c567",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x2a73093943232afd02661a112e149c777cf01e57",
    symbol: "vAMM-MATIC/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x2babed912322c355f4b8b58ea568727892ca3f05",
    symbol: "USDC/USDT (Stable)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x2cc4c3ccec1a16efa23d8cafd764eaceb9233486",
    symbol: "sAMM-LYNX/USDT",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x32e27ff479454e32868ff67ee9f06bafdc1e908f",
    symbol: "BUSD/USDT (Stable)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x7d43AABC515C356145049227CeE54B608342c0ad",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea",
    symbol: "ezETH/WETH (Narrow)",
    gauge: "0x133629348F5f3632f46D8Fd0A5C3b49a4fADf2B6",
    token0: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x24a835D8Ef124340246D97601b7632D211660aD5",
  },
  {
    address: "0x3c66e918025739e2e61d7b98da6ca6759841fcf8",
    symbol: "vAMM-SATS/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xbfa536126C1C2b7cbA94807a39213fAb913950A3",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x3e78c1f766d7fe2c3dcef6afe6609966540b6391",
    symbol: "vAMM-USDC/LYNX",
    gauge: "0xbD9Ac1dae15608ee839838F91796d9281C7342FB",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    isStrategy: false,
    bribe: "0x6f0F1e19836B7F24f16CD7afa59560C908F6514e",
  },
  {
    address: "0x49bc134cb005a24d32540ae23f9b50235473d14a",
    symbol: "sAMM-USDC/MENDI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x4d776eb578196ee0725bda3319b4fb615bbf0ac5",
    symbol: "vAMM-STONE/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x4f74ed3b2278dae2119658ab2c235bbcd2306d29",
    symbol: "USDC/WETH (YieldIQ)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x511481ef0deb10eb5c1e36b72140718c58921265",
    symbol: "LYNX/WETH (YieldIQ)",
    gauge: "0x72125a1c4A6E663c5E4dA0bbFff9Ae02b5EF727a",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x5a5e10C6a2b5517B3cF919f6BD28628287E69E00",
  },
  {
    address: "0x52555fa67687288fc70791beae2b92754fdd0341",
    symbol: "vAMM-LUCIA/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x4Fa0dE5d9217722A37247808c08Cde1C976879b9",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x53c3b77df14d9dbe572a858ba6ed2cc073a0cfe0",
    symbol: "vAMM-MENDI/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x555267747b0918abce10335f154fbe7b636f7804",
    symbol: "LYNX/USDT (YieldIQ)",
    gauge: "0x68672D332d246508b519deFa1Beac74E2d2F00b5",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: true,
    bribe: "0xaf9ef0cd5d10aBd84c773E79001C9858Ca42fAEC",
  },
  {
    address: "0x58aacbccaec30938cb2bb11653cad726e5c4194a",
    symbol: "sAMM-USDC/USD+",
    gauge: "0xEaf988C649f44c4DDFd7FDe1a8cB290569B66253",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
    isStrategy: false,
    bribe: "0x2198BbF8A4f1A52161ab3411897CC4fb4E2CD5ca",
  },
  {
    address: "0x6ce0414c17495d12e6744e0ce5330b258525975e",
    symbol: "sAMM-WETH/bveLYNX",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    token1: "0xe8a4c9B6a2b79Fd844c9e3AdBc8Dc841eEce557B",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x6e9d701fb6478ed5972a37886c2ba6c82a4cbb4c",
    symbol: "BUSD/WETH (Narrow)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x7d43AABC515C356145049227CeE54B608342c0ad",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x6fb413595e0949b85b0861233b39d8ddec872afa",
    symbol: "vAMM-LUBE/LINE",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1bE3735Dd0C0Eb229fB11094B6c277192349EBbf",
    token1: "0x2Fab0952449378DfdF4625fE37F9603011F189ab",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x6fb44889a9aa69f7290258d3716bffcb33cde184",
    symbol: "vAMM-USDC/WETH",
    gauge: "0xa9946Cd8b9B902FB50239a6fBE0f62f6cb0F0E0D",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0b10c23932232B317e9a2C75fA903Dc489DB5796",
  },
  {
    address: "0x7088a31d53fc1fa300ceb5f9103343137a62b545",
    symbol: "sAMM-USDC/DUSD",
    gauge: "0xe9E48c99C9cb2b5a5deb85E913f52A22e5B53026",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xA88B54E6b76Fb97CdB8eCAE868f1458e18a953F4",
    isStrategy: false,
    bribe: "0x8dc958b827edD436959679b57c3c304A4ad033e3",
  },
  {
    address: "0x740bb4250398f2b87e70cb21f459de4df80012dc",
    symbol: "sAMM-MENDI/oLYNX",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    token1: "0x63349BA5E1F71252eCD56E8F950D1A518B400b60",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x77a0006fdeb1ce7f521a01852a632b2a21490d67",
    symbol: "USDC/EURO3 (Stable)",
    gauge: "0x281Be483Ed6F5e101dE186B61DCB57f663cfAd93",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3F817b28Da4940F018C6b5c0A11C555ebB1264f9",
    isStrategy: true,
    bribe: "0x88BF17F9bB7779f51BEC92936558Db831268ae36",
  },
  {
    address: "0x79b2593e1e8ff882a6f26bc2cb4854b68751887d",
    symbol: "sAMM-LYNX/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x8421c6102ee8a147facc01977df3b159f7921d54",
    symbol: "MATIC/WETH (Narrow)",
    gauge: "0x04939a947404Cad457A56c11103bc92D43984Fc2",
    token0: "0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0xea4A8d08b7a51f9F5735C45F821A060a97521D87",
  },
  {
    address: "0x8a9570ec97534277ade6e46d100939fbce4968f0",
    symbol: "WBTC/WETH (Narrow)",
    gauge: "0x81921e25c109aB1eF910081184295387f50e1f78",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x3C16f9Ec9E90C0407388228609cbdeE48dE9013b",
  },
  {
    address: "0x8cb615373f16a727f61457213866267b70051ae5",
    symbol: "vAMM-A3A/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x3d4b2132eD4eA0aa93903713a4dE9F98e625a5c7",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x8d2a23eb25a0a8213319a4ed2984602a7c23f06b",
    symbol: "vAMM-WBTC/WETH",
    gauge: "0x049c14D930F81233921E7591f47D104900b6c3D1",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0xCD6925c4D822098A74311F1C77BDc38629Db6277",
  },
  {
    address: "0x8e9f777f2448590ccd9d547f49489948a6001d41",
    symbol: "vAMM-MENDI/uMendi",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    token1: "0xcf8deDCdC62317beAEdfBee3C77C08425F284486",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0x8f3e0a2378b0b5838e0e0d99fcecc167d47bc9a7",
    symbol: "sAMM-STONE/WETH",
    gauge: "0xB301DB65B71589d2fFDa38B2BECFBDdf584D538E",
    token0: "0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x414a76E7150213A99795fF361B197C26F9374994",
  },
  {
    address: "0x92ccb773da4f3974c941974bdb978bad7efa7744",
    symbol: "USDC/LYNX (YieldIQ)",
    gauge: "0x14aF0979e96deA94ad2466dFDF11e85886Ce04F9",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    isStrategy: true,
    bribe: "0x9b752D5c90dec9926BbD3A7DFa1e4448CBF044E2",
  },
  {
    address: "0x94769abfbeb114cf7ba2e7b9cef242ac70da20d6",
    symbol: "vAMM-USDT/WETH",
    gauge: "0x136679A42ED9d4Ca89FE14eF38b1f5787F63F2c7",
    token0: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x28d48140D505a9B594409EFd77e9a3d36D3fC5C5",
  },
  {
    address: "0x9cbe4ebcf697e98efc22e2595209c5d62d8fc4f0",
    symbol: "sAMM-USDC/LYNX",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xa3d9745dcd138bd2ba4b039fa61c042756bfe1e8",
    symbol: "USDC/WBTC (Narrow)",
    gauge: "0x51D1079f100EcFd2F421758EACC99BE3f9B06710",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    isStrategy: true,
    bribe: "0x075836DF61a0CDF46D29Fc2df97784A31830B7fd",
  },
  {
    address: "0xa4477d98e519d4c1d66aef4efdf7cbeb84f4f778",
    symbol: "sAMM-USDC/USDT",
    gauge: "0x388eE0012B9A5987689703Af37922551983168FE",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: false,
    bribe: "0xfC7003cd5192C8FaC780b60F19328448144A92db",
  },
  {
    address: "0xa5d10e2350c4794d06de9ac1b373e4114ff0f0ec",
    symbol: "vAMM-WETH/ORDI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    token1: "0xec45e3C3C5410CBDBCe81dd35Edcf9f0f13fc2cB",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xa8e4b5401f98cf20f7e4e9323b02c40f10661f06",
    symbol: "sAMM-wstETH/WETH",
    gauge: "0x0E48FBA6e0aF346BBD9227f1Ea134937ffD032ab",
    token0: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x1a4182337120B5E62540D3e54cf4b64DeA96BBE6",
  },
  {
    address: "0xaad8a008496d789f48f23c4778b4fbddb7a1c937",
    symbol: "vAMM-axlLqdr/WETH",
    gauge: "0x12bD7793D869d2Ed64f6eAF4e945042C92955EFE",
    token0: "0x332c72dd7E77070740F01d2d35851c461585D5d0",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x928d729dC219D5ec27493dba29ECB59a49a75f93",
  },
  {
    address: "0xac716681656d3f22c23bf09c9b52786216827ac3",
    symbol: "vAMM-wstETH/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xad53f20917b144cd0b100dbe75988c0e4b919dba",
    symbol: "WBTC/WETH (YieldIQ)",
    gauge: "0xB7276152751b126A34860A90c6269994Bf524F4f",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x3cE03C820E3E15afFA6ab39B97AAA61726830F3c",
  },
  {
    address: "0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae",
    symbol: "LYNX/WBTC (YieldIQ)",
    gauge: "0x0Cc0439C04760db602EE7ca2cBB4372BA4d28476",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    isStrategy: true,
    bribe: "0x642c46E03d59c0323a55bad3250d7Ae6D4053E93",
  },
  {
    address: "0xb2e8eca0add374aa63f6df92dcdfda596eaa470a",
    symbol: "sAMM-WBTC/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xba4becdb0394d3db69bca50f70cacb7d2bab0ea9",
    symbol: "vAMM-LYNX/oLYNX",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x63349BA5E1F71252eCD56E8F950D1A518B400b60",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xbde12bdbeb92b0dca3f3c37a749633a24717b24d",
    symbol: "vAMM-USDC/A3A",
    gauge: "0x044cE3603b1A813c828E05c1305dFAb8A0d74C69",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3d4b2132eD4eA0aa93903713a4dE9F98e625a5c7",
    isStrategy: false,
    bribe: "0x7bE690A799477A22E42b524550b242AEb40bCFB8",
  },
  {
    address: "0xbe23da11fbf9da0f7c13ea73a4bb511b9bc00177",
    symbol: "sAMM-USDT+/USDT",
    gauge: "0xd81B697999fa523b9B84876c9738a7aB7e4D298F",
    token0: "0x1E1F509963A6D33e169D9497b11c7DbFe73B7F13",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: false,
    bribe: "0x40EDa9062ff60baDE8B8eA06E254135529e8792B",
  },
  {
    address: "0xc5c2f8beabd4d4553063f7359c38b4f1aa0c3808",
    symbol: "vAMM-LYNX/LINE",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x2Fab0952449378DfdF4625fE37F9603011F189ab",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xc5f4c5c2077bbbac5a8381cf30ecdf18fde42a91",
    symbol: "sAMM-USDT+/USD+",
    gauge: "0x58AC068Eef3F49E019A88C7ecc9Ac2Fdd63fA755",
    token0: "0x1E1F509963A6D33e169D9497b11c7DbFe73B7F13",
    token1: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
    isStrategy: false,
    bribe: "0xcC56DD87294fDA597F71ABADE8e233cF3A84fE43",
  },
  {
    address: "0xc674b36ce15abe09777efeb11c47e849921d2ca4",
    symbol: "sAMM-WETH/ORDI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    token1: "0xec45e3C3C5410CBDBCe81dd35Edcf9f0f13fc2cB",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xc6c46cd01403ac0b28ef92c4880f2e4be2d410e1",
    symbol: "vAMM-USDC/USDT",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xcc3880b990b11a712f2f42c0c0db57a0ca1529a9",
    symbol: "vAMM-USDC/NDX_2412",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xa09d7f02BaD175a9d6BcBeDf1A992EEAD1e33604",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xcc86572ce5a6eee74c76c57e9ea7b08221f06bb9",
    symbol: "USDC/LYNX (Wide)",
    gauge: "0x48C93b97A6AFf589B4Bc8B60865165ab19D509A0",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    isStrategy: true,
    bribe: "0x106932000083a21798Cba1E75cee1159D3f27084",
  },
  {
    address: "0xccf4fd9f2fbe89917821e4629cb2a6b760651baf",
    symbol: "vAMM-XRGB/WETH",
    gauge: "0x88D26a1aFe866dfA1d4a575CED0045F0d3c90E01",
    token0: "0x5cc5E64AB764A0f1E97F23984E20fD4528356a6a",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0xcd51f9572dba19CF5Ea22cbA1Ed1049aDA48e276",
  },
  {
    address: "0xcffbfd665bedb19b47837461a5abf4388c560d35",
    symbol: "STONE/WETH (Narrow)",
    gauge: "0x86d2D7709D390bd2946A335147965E54947c82d7",
    token0: "0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0xbBFEAf5fB451e6Ac31D707fd0F3FDf5B9E06545B",
  },
  {
    address: "0xd4630a296e33dff7fdacca2c6f192e9c78dcde13",
    symbol: "vAMM-USDC/WBTC",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xd6cc4a33da7557a629e819c68fb805ddb225f517",
    symbol: "USDC/BUSD (Stable)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x7d43AABC515C356145049227CeE54B608342c0ad",
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xe34b928996cc73fc3894898102842e86aa0ba33a",
    symbol: "sAMM-USDT/USD+",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    token1: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xe57f293520cbf7d5a17629cbfb06eabdb759a151",
    symbol: "LYNX/STONE (YieldIQ)",
    gauge: "0x96B7062cFd1Af7e4DE5eF513Ce66015E9ee6A991",
    token0: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
    token1: "0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116",
    isStrategy: true,
    bribe: "0x85528c3A3F6fA289Ccfe585FB51CC1FBBD8C9E4F",
  },
  {
    address: "0xe5e19bbf39c76a8c980b48f2ec89d0de877bf567",
    symbol: "vAMM-USDC/MENDI",
    gauge: "0x623AC24d0586579482184f5CBD07EA12CB0A4003",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    isStrategy: false,
    bribe: "0xec9453d72613c2c9d6a639784F9dB4A230cc0F5A",
  },
  {
    address: "0xe8f2288c21105d9cba6355c8833026f01e0f1cc3",
    symbol: "vAMM-oLYNX/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x63349BA5E1F71252eCD56E8F950D1A518B400b60",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xe9e146f5bcebd71fb8c526ea036de6bbfb1b0ad7",
    symbol: "sAMM-USDC/MAI",
    gauge: "0x19468fAea74029e5DCF86e5f78c99e44a5Ddf3e3",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xf3B001D64C656e30a62fbaacA003B1336b4ce12A",
    isStrategy: false,
    bribe: "0x5787BCAbFb559Ea64CE5F460678961A74865F7DD",
  },
  {
    address: "0xea5abd5d15b8cd168e9eff78047db52af079e094",
    symbol: "wstETH/WETH (Narrow)",
    gauge: "0xf213573c49B89e4ACEDE11bC97aaF2a88F02f878",
    token0: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x50bDaA06Ba523725FF5fD11d94DfB294F44d20B0",
  },
  {
    address: "0xf1866f414ce68512a5e2923673aa376341cb6cde",
    symbol: "sAMM-wDAI/USDC",
    gauge: "0x559143F118548E7E9213909077F9277E9EC65274",
    token0: "0x023617bAbEd6CeF5Da825BEa8363A5a9862E120F",
    token1: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    isStrategy: false,
    bribe: "0x193B4f8fc2dfB5a476B7568d9E92D2aFCCc5e22e",
  },
  {
    address: "0xf3b1125c8505f038503e002e61a78253610d4f60",
    symbol: "USDT/WETH (Narrow)",
    gauge: "0x7dB1b80ecF40A6a5F84554fD047aafdEEeBc4230",
    token0: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: true,
    bribe: "0x1a1099B7877b6715F03b973f3F165E7fB3Ddb96b",
  },
  {
    address: "0xf93f79c2557ebc38c6eb9d020b8ef50b8eb97b48",
    symbol: "vAMM-USDC/iNDX_2412",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xA7020f1Cf5d3aAa5f6f9f376d10D0DbFf647C4Cb",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xfb26fdeb0d7151731afccdffb0e38d2c5f33c807",
    symbol: "vAMM-LINUS/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xfb636707412d580f5333635a0d61523be5b09bdd",
    symbol: "vAMM-LINE/MENDI",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x2Fab0952449378DfdF4625fE37F9603011F189ab",
    token1: "0x43E8809ea748EFf3204ee01F08872F063e44065f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
  {
    address: "0xfb957de375cc10450d7a34ab85b1f15ef58680b4",
    symbol: "sAMM-USDC/WETH",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    isStrategy: false,
    bribe: "0x0000000000000000000000000000000000000000",
  },
];
export { gauges };

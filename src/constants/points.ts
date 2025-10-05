import { Points } from "../types";


export const points: Record<number, Points[]> = {
  59144: [
    {
      name: "Linea LXP Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/lxpBadge.png",
      infoUrl: "https://support.linea.build/linea-voyage/lxp",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Linea LXP Points.",
      poolAddresses: [
        // "0x6e9d701fb6478ed5972a37886c2ba6c82a4cbb4c", //BUSD/WETH
        // "0x8a9570ec97534277ade6e46d100939fbce4968f0", //WBTC/WETH
        // "0xd6cc4a33da7557a629e819c68fb805ddb225f517", //USDC/BUSD
        // "0x32e27ff479454e32868ff67ee9f06bafdc1e908f", //BUSD/USDT
        // "0xf3b1125c8505f038503e002e61a78253610d4f60", //USDT/WETH
        // "0x0b15a5e3ca0d4b492c3b476d0f807535f9b72079", //USDC/WETH
        // "0x8421c6102ee8a147facc01977df3b159f7921d54", //MATIC/WETH
        // "0xcC86572Ce5a6EEe74c76c57E9ea7b08221F06bb9", //USDC/LYNX
        // "0x624919d32d1563e33710b585f212664701869e64", //CROAK/WETH
        // "0xa3d9745dcd138bd2ba4b039fa61c042756bfe1e8", //wBTC/USDC
        // "0xEa5abd5d15B8CD168e9eFf78047DB52aF079e094", //wstETH/ETH
        // "0xcfFBFD665BEdB19B47837461A5aBf4388C560D35", //STONE/ETH
        // "0x392AC7d2D09042EC9fAfAEb8D52a88Dc591E9feA", //ezETH/ETH
        // "0x0A4A0C5bC4D404d48a5A47ef9197500acBdEa0a8", //uniETH/ETH
        // "0x530071b0373ab3029cad32e0c19b75253e231b69", //weETH/WETH
        // "0xC491C1b173E932E97d9F739ccD9AE5b6d5FcE4ce", //inETH/wstETH
        // "0xa45f03ffa6d5b7C5f8484B02Ed5301Ed59d47c4d", //NWG/WETH
        // "0xEA392b8332378cA039d6b91d024B94Ce9D1c31b6", //PEPE/WETH
        // "0x905E01a568F4E595D3E1889A4c4d82d441Bc9Ef9", //USDC/WETH
        // "0x4f74ED3b2278dAE2119658aB2c235BBcd2306d29", //USDC/WETH
        // "0x00b34e51ac2a78761982485a618b235a211f5d86", //WETH/USDC
        // "0xad53f20917b144cd0b100dbe75988c0e4b919dba", //wBTC/WETH
        // "0x511481ef0DEB10eB5c1E36B72140718c58921265", //WETH/LYNX
        // "0x92ccb773da4f3974c941974bDb978bAd7efa7744", //USDC/LYNX
        // "0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae", //wBTC/LYNX
        // "0x555267747b0918ABce10335F154FbE7B636F7804", //USDT/LYNX
        // "0xe57F293520CBf7d5a17629CbFB06eAbdb759a151", //STONE/LYNX
        // "0x1795C4b23Ec93C852653045DaB4dD1AC796D5248", //FOXY/WETH
        // "0x9d9070462eB1CBFE2b8cfA337bb4D0A3Ac420bD6", //FOXY/WETH
        // "0x9e480e37a036b6703818D701544763a36bfed35b", //ZERO/WETH
        // "0xad2406aF7fB59F9949af7D355AA19941178809a8", //MENDI/WETH
        // "0x19E622264aeE6c32Ba1E1B68b8338d3c43B80Ef2", //aBTC/wBTC
        // "0x16FE021BFc4E9e0E3fBCc082C76eE4d67cB85DDA", //wBTC/aBTC
        // "0xb4b1a076214c84e3173eed00cd52E50a8904B174", //ALEX/USDT
        // "0x87A5c04Bc996Dd23E80e025daCe5f00F20Ccc717", //USDT/ALEX
        // "0x2babed912322c355f4b8b58ea568727892ca3f05", //USDC/USDT
        // "0x77a0006fdeb1ce7f521a01852a632b2a21490d67", //USDC/EUR3
        // "0x8dabf94c7bdd771e448a4ae4794cd71f9f3d7a0d", //EUR3/USD+
        // "0x96411166448feed82661e164c38fc71d0ff169b0", //USDT/WETH
        // "0x504f0d95d3a43a6c9fcd86782a93e043e78d1ab0", //USDC/WETH
        // "0x24c6d82d316f80421f3e0f58c70127a97a5f1db7", //WBTC/WETH
        // "0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63", //SolvBTC.m/WETH
        // "0x27d09198fe47ac4e3e9f622032a71e26df776e99", //ankrETH/ANKR
        // "0xcc2be07ad5d1bd4621726cfddbef2ffd248b8d70", //ankrETH/wstETH
        // "0xadd8d818b15c7ed8f4872d4e1fd409238668ffcc", //USDC/DAI
        // "0x091872441a89b699ccc805c1d1ec67c4f2c8fa2c", //DOGE/WETH
        // "0xd14a66cb33d07cc019d990a1f62c7ab9bc20a418", //DAI/WETH
        // "0x620855ac3dcf06dbb12647b997a991f479442f7d", //SHIB/WETH
        // "0x4232F47Bf47Ed5b4ad84aBB835E5Db267929ffEd", //USDC/USDT
        // "0x2549D6b5658a75D7EAE869AF8cd8ae66507f0905", //USDC/WETH
        // "0xCC92940D2A0ccAd9b57a3f26e94a1eA80bf224D3", //CLIP/WETH
        // "0x2a24De4f0E84168DFE8C022Ae811eaAa6D16Fba6", //CLIP/WETH
        // "0xdA9B26B44C7C8E571A82802f8fd6ebA7A253020F", //WETH/SOUL
        // "0xb1C9F83099C88c8544004Bf7a4d1F7b434869B44", //USDC/DAI
        // "0x8eFFB06ceF54167587643123e6B0588E08E81c04", //DAI/WETH
        // "0x908EBbEab8c4bB1D3f1182Ecc3f5D95ef34F47b1", //WETH/LLL
      ],
    },
    {
      name: "Eigenlayer Restaked Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/eigenlrBadge.png",
      infoUrl: "https://docs.eigenlayer.xyz/", //Ask marketing if that's the link we need to use.
      tooltipDescription:
        "Liquidity Providers in this pool also earn Eigenlayer Restaked Points.",
      poolAddresses: [
        "0x530071b0373ab3029cad32e0c19b75253e231b69", // weETH/WETH (Narrow)
        "0x0a4a0c5bc4d404d48a5a47ef9197500acbdea0a8", // uniETH/ETH Gamma (Correlated)
      ],
    },
    {
      name: "Renzo ezPoints",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/renzoBadge.png",
      infoUrl:
        "https://mirror.xyz/10/0x965e92f21b8da409de9d1ca8e8a99e4d326e9bd5/render",
      tooltipDescription:
        "Liquidity Providers in this pool also earn x4 Renzo ezPoints.",
      poolAddresses: [
        "0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea", // ezETH/WETH (Narrow)
      ],
    },
    {
      name: "Bedrock Diamonds",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/bedrockBadge.png",
      infoUrl: "https://docs.bedrock.technology/bedrock-lrt/bedrock-diamonds",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Bedrock Diamonds.",
      poolAddresses: [
        "0x0a4a0c5bc4d404d48a5a47ef9197500acbdea0a8", // uniETH/ETH Gamma (Correlated)
      ],
    },
    {
      name: "Ether.Fi Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/etherfiBadge.png",
      infoUrl:
        "https://etherfi.gitbook.io/etherfi/getting-started/loyalty-points",
      tooltipDescription:
        "Liquidity Providers in this pool also earn 3x Ether.Fi points.",
      poolAddresses: [
        "0x530071b0373ab3029cad32e0c19b75253e231b69", // weETH/WETH (Narrow)
      ],
    },
    {
      name: "Inception Totems",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/inceptionlrtBadge.png",
      infoUrl: "https://docs.inceptionlrt.com/inceptionlrt/totems",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Inception totems.",
      poolAddresses: [
        "0xc491c1b173e932e97d9f739ccd9ae5b6d5fce4ce", // inETH/wstETH Gamma
      ],
    },
    {
      name: "Davos Peaks",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/davosBadge.png",
      infoUrl: "https://davos.xyz/",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Davos peaks.",
      poolAddresses: [
        "0x7088a31d53fc1fa300ceb5f9103343137a62b545", // sAMM-USDC/DUSD
      ],
    },
    {
      name: "LayerBank Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/layerbankBadge.png",
      infoUrl:
        "https://donvegas.medium.com/introducing-layerbanks-linea-points-program-your-path-to-a-potential-airdrop-7de1c2f7af2c",
      tooltipDescription:
        "Liquidity Providers in this pool also earn LayerBank points.",
      poolAddresses: [
        "0x1e0015f45e339c08f7c891f83e579fbe9ea9cd37", // sAMM-solvBTC/WBTC
        "0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63", // solvBTC/WETH Steer
        "0x1bb15aa9a8bdeea7bb3a21bd239a232c5a09b0c6", // sAMM-M-BTC/WBTC
        "0xb7d02ec92fe7bf5e47fcf82ac21575e01fe4f5f1", // sAMM-M-BTC/solvBTC.m
        "0x1577fb60deb25dc9d9c6f0ed736a682b849e6bfb", // vAMM-M-BTC/WETH
      ],
    },
    {
      name: "SolvBTC Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/solvBadge.png",
      infoUrl: "https://app.solv.finance/points",
      tooltipDescription:
        "Liquidity Providers in this pool also earn SolvBTC points.",
      poolAddresses: [
        "0x1e0015f45e339c08f7c891f83e579fbe9ea9cd37", // sAMM-solvBTC/WBTC
        "0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63", // solvBTC/WETH Steer
        "0xb7d02ec92fe7bf5e47fcf82ac21575e01fe4f5f1", // sAMM-M-BTC/solvBTC.m
      ],
    },
    {
      name: "StakeStone Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/stakestoneBadge.png",
      infoUrl: "https://stakestone.io/#/home",
      tooltipDescription:
        "Liquidity Providers in this pool also earn x2 StakeStone points.",
      poolAddresses: [
        "0x8f3e0a2378b0b5838e0e0d99fcecc167d47bc9a7",// sAMM-STONE/WETH
        "0xcffbfd665bedb19b47837461a5abf4388c560d35", // STONE/WETH (Narrow)
      ],
    },
    {
      name: "Turtle Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/turtleBadge.png",
      infoUrl: "https://turtle.club/",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Turtle points.",
      poolAddresses: [
        "0x8a9570ec97534277ade6e46d100939fbce4968f0", // WBTC/WETH (Narrow)
        "0xf3b1125c8505f038503e002e61a78253610d4f60", // USDT/WETH (Narrow)
        "0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea", // ezETH/WETH (Narrow)
        "0x511481ef0deb10eb5c1e36b72140718c58921265", // LYNX/WETH (Single Deposit)
        "0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae", // LYNX/WBTC (Single Deposit)
        "0x92ccb773da4f3974c941974bdb978bad7efa7744", // USDC/LYNX (Single Deposit)
        "0xa3d9745dcd138bd2ba4b039fa61c042756bfe1e8", // USDC/WBTC (Narrow)
        "0xcffbfd665bedb19b47837461a5abf4388c560d35", // STONE/WETH (Narrow)
        "0x555267747b0918abce10335f154fbe7b636f7804", // LYNX/USDT (Single Deposit)
        "0xe57f293520cbf7d5a17629cbfb06eabdb759a151", // LYNX/STONE (Single Deposit)
        "0x530071b0373ab3029cad32e0c19b75253e231b69", // weETH/WETH (Narrow)
        "0x0a4a0c5bc4d404d48a5a47ef9197500acbdea0a8", // uniETH/ETH Gamma (Correlated)
        "0x24c6d82d316f80421f3e0f58c70127a97a5f1db7", // WBTC/WETH (Elastic Expansion)
        "0x96411166448feed82661e164c38fc71d0ff169b0", // USDT/WETH Steer (Classic Rebalance)
        "0x504f0d95d3a43a6c9fcd86782a93e043e78d1ab0", // vAMM-USDT/WETH
        "0xc491c1b173e932e97d9f739ccd9ae5b6d5fce4ce", // inETH/wstETH Gamma
        "0x54001e83fcf7654e8a974c0ed2ef4b9cc4e6ff63", // solvBTC/WETH Steer
      ],
    },
  ],
  48900: [
    {
      name: "Zircuit Points",
      logoUrl:
        "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/zircuitBadge.png",
      infoUrl: "https://app.zircuit.com/dex",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Zircuit points.",
      poolAddresses: [
        "0xbd3332466d13588b1bfe8673b58190645bfe26be", // WBTC/WETH - Gamma Narrow
        "0x318e378b6ec1590315e5e8160a2ef28308ae7cfc", // WETH/USDT - Gamma Narrow
        "0x8118c33513fec13f8cf488ccb4509190650f0e92", // USDT/USDC - Gamma Narrow
        "0x181f22f21d1f0228d99741a5a84954ce78db1137", // ZRC/WETH - Gamma Narrow
        "0x2cbcc27a9d4497342c3b7ce67152f447fe63d42a", // WETH/ZRC (Classic Rebalance)
        "0x4f84351f2124bd4ba820730d3643984344ca481f", // WETH/USDT (Classic Rebalance)
        "0xe9962ab730b9fe4b5186278b6b55152ea2ccf793", // WBTC.e/WETH (Classic Rebalance)
        "0x9ac11fc3de0533d6a0db68e78991aaed0c7a48c8", // WETH/ZRC (Single Deposit)
        "0x1ece78b38845518a018a60ec919af470aa4f512f", // WBTC.e/WETH (Single Deposit) (WBTC)
        "0xe284e8ad2ba6a10baeaac270e846aa3993db485d", // WBTC.e/WETH (Single Deposit) (WETH)
        "0x1206fb230f60062fbe38c571ee689ec9127ef097", // WETH/USDT (Single Deposit) (WETH)
        "0xc14ee8d65f5e9d42e00518776711753c258655ef", // WETH/USDT (Single Deposit)(USDT)
      ],
    },
  ],
  9745: [
    {
      name: "Limited Ionex Point (4x)",
      logoUrl:
        "http://ionex.trade/projects/ionex/tokenLogo.png",
      infoUrl: "https://ionex.trade/",
      tooltipDescription:
        "Liquidity Providers in this pool also earn 4x Limited Ionex points.",
      multiplier: 4,
      poolAddresses: [
        "0x2b1a10e81351c5360a0cdfe6f11a55a636bcce76", //vAMM-INX/WXPL
        "0xc2622f55d51f878369b998ea641783a6920d1fa2", //vAMM-INX/USDT0
        "0xec1d2843cf1616ba4e53c1286d2e450951c874d1", //sAMM INX/USDT0
      ],
    },
    {
      name: "Limited Ionex Point (2x)",
      logoUrl:
        "http://ionex.trade/projects/ionex/tokenLogo.png",
      infoUrl: "https://ionex.trade/",
      tooltipDescription:
        "Liquidity Providers in this pool also earn 2x Limited Ionex points.",
      multiplier: 2,
      poolAddresses: [
        "0x697f96f54c862ca8f5a1cb95b9c1cf5d1b04091b", //vAMM-USDe/WXPL
        "0xc07aa78e87eef280b0b19abfe8965ac46ce8ec14", //vAMM-WXPL/USDT0
        "0x355705857c9548e71e866087b01bb5b0a1fd671b", //vAMM-WETH/weETH
        "0x8c0d0f3b753be6eefbb9a6b4545955fe465e6e1a", //vAMM-WXPL/WETH
        "0xaa3e8943aa325c689ad2918f6ab4fcddd2bdfdc9", //vAMM-WETH/USDT0
        "0x697f96f54c862ca8f5a1cb95b9c1cf5d1b04091b", //vAMM- USDe/WXPL
      ],
    },
    {
      name: "Limited Ionex Point (1x)",
      logoUrl:
        "http://ionex.trade/projects/ionex/tokenLogo.png",
      infoUrl: "https://ionex.trade/",
      tooltipDescription:
        "Liquidity Providers in this pool also earn Limited Ionex points.",
      multiplier: 1,
      poolAddresses: [
        "0xf36a95cc9ce7343ce3decd8836a179e1f0106c0d", //sAMM-USDai/USDT0
        "0x118ea19180637f851bb80601347e50ef2ae46954", //sAMM-USDe/USDT0
      ],
    },
  ],
};

import { defineChain } from "viem";
import { linea, zircuit, unichain } from "viem/chains";

export const plasma = defineChain({
  id: 9745,
  name: 'Plasma',
  nativeCurrency: {
    name: 'Plasma',
    symbol: 'XPL',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.plasma.to'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PlasmaScan',
      url: 'https://plasmascan.to',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 42,
    },
  },
})

export const gaugeConfigs = {
  48900: {
    viemChain: zircuit,
    pairAPIAddress: "0x0b4158e310AE236042203322f618Cde047289b3F",
    blacklist: ["0x0000000000000000000000000000000000000000"],
  },
  59144: {
    viemChain: linea,
    pairAPIAddress: "0x6c84329CC8c37376eb32db50a17F3bFc917c3665",
    blacklist: [
      "0x0000000000000000000000000000000000000000",
      "0x41d245492b3a9c5a5364e8f6bb75035abfe4079e", //vAMM-MECH/WETH
      "0xc8e3e29e006cd48a4f0ad0a06558e41853a1babd", // EURO3/USD+ (Stable)
    ],
  },
  130: {
    viemChain: unichain,
    pairAPIAddress: "0x9D61c9FA1264300B166d0122a0006377465Bc5cF",
    blacklist: ["0x0000000000000000000000000000000000000000"],
  },
  9745: {
    viemChain: plasma,
    pairAPIAddress: "0x6FE13f896FdE0fC8979404646f46b5e5fafecbCC",
    blacklist: ["0x0000000000000000000000000000000000000000"],
  },
};

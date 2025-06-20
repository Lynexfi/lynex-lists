import { linea, zircuit } from "viem/chains";
import { defineChain } from "viem";

export const injectiveEvmTestnet = defineChain({
  id: 888,
  name: "Injective EVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Injective",
    symbol: "INJ",
  },
  rpcUrls: {
    default: {
      http: ["https://k8s.testnet.json-rpc.injective.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet.blockscout.injective.network",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 80292147,
    },
  },
});

export const gaugeConfigs = {
  48900: {
    viemChain: zircuit,
    pairAPIAddress: "0x0b4158e310AE236042203322f618Cde047289b3F",
    blacklist: ["0x0000000000000000000000000000000000000000"],
    limitAmounts: 1000,
  },
  59144: {
    viemChain: linea,
    pairAPIAddress: "0x6c84329CC8c37376eb32db50a17F3bFc917c3665",
    blacklist: [
      "0x0000000000000000000000000000000000000000",
      "0x41d245492b3a9c5a5364e8f6bb75035abfe4079e", //vAMM-MECH/WETH
      "0xc8e3e29e006cd48a4f0ad0a06558e41853a1babd", // EURO3/USD+ (Stable)
    ],
    limitAmounts: 1000,
  },
  888: {
    viemChain: injectiveEvmTestnet,
    pairAPIAddress: "0x7b8a1A199E1Ada9165CcF81F11Ed888f31cFC53c",
    blacklist: ["0x0000000000000000000000000000000000000000"],
    limitAmounts: 450,
  },
};

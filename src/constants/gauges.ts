import { linea, zircuit, unichain, tac } from "viem/chains";

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
  239: {
    viemChain: tac,
    pairAPIAddress: "0x0000000000000000000000000000000000000000",
    blacklist: ["0x0000000000000000000000000000000000000000"],
  },
};

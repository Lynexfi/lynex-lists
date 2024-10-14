const fs = require("fs");
const path = require("path");

async function main() {
  const fetch = (await import("node-fetch")).default;
  const blacklistedGauges = [
    "0x0000000000000000000000000000000000000000",
    "0x41d245492b3a9c5a5364e8f6bb75035abfe4079e", //vAMM-MECH/WETH
    "0xc8e3e29e006cd48a4f0ad0a06558e41853a1babd", // EURO3/USD+ (Stable)
    "0xcd7731d878cbc41154393c82e06107d08442f41e", // abcLYNX
  ];
  const res = await fetch("https://da.lynex.fi/tracking/pools");
  const json = await res.json();
  let result = json
    .filter((item) => !blacklistedGauges.includes(item.gauge.address))
    .map((item) => {
      return {
        address: item.address,
        symbol: item.symbol,
        gauge: item.gauge.address,
        token0: item.token0.address,
        token1: item.token1.address,
        isStrategy: item.isGamma,
        bribe: item.gauge.bribe,
      };
    });
  result = result.sort(function (a, b) {
    if (a.address < b.address) {
      return -1;
    }
    if (a.address > b.address) {
      return 1;
    }
    return 0;
  });
  const destination = path.resolve("./config", "gauges.json");
  fs.writeFileSync(destination, JSON.stringify(result, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

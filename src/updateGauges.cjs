const fs = require("fs");
const path = require("path");

async function gaugeGod(apiEndpoint, blacklistedGauges) {
  const fetch = (await import("node-fetch")).default;
  const res = await fetch(apiEndpoint);
  const json = await res.json();
  return json
    .filter((item) => !blacklistedGauges.includes(item.gauge.address))
    .map((item) => ({
      address: item.address,
      symbol: item.symbol,
      gauge: item.gauge.address,
      token0: item.token0.address,
      token1: item.token1.address,
      isStrategy: item.isGamma,
      bribe: item.gauge.bribe,
    }))
    .sort((a, b) =>
      a.address < b.address ? -1 : a.address > b.address ? 1 : 0
    );
}

async function main() {
  const blacklistedGauges = [
    "0x0000000000000000000000000000000000000000",
    "0x41d245492b3a9c5a5364e8f6bb75035abfe4079e", //vAMM-MECH/WETH
    "0xc8e3e29e006cd48a4f0ad0a06558e41853a1babd", // EURO3/USD+ (Stable)
    "0xcd7731d878cbc41154393c82e06107d08442f41e", // abcLYNX
  ];

  const lineaGauges = await gaugeGod(
    "https://dev.da.lynex.fi/tracking/pools",
    blacklistedGauges
  );
  const zircuitGauges = await gaugeGod(
    "https://zircuit-app-121b8fe14bb2.herokuapp.com/tracking/pools",
    blacklistedGauges
  );

  const result = {
    59144: lineaGauges,
    48900: zircuitGauges,
  };

  const destination = path.resolve("./config", "gauges.json");
  fs.writeFileSync(destination, JSON.stringify(result, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

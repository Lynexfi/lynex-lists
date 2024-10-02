const fs = require("fs");
const path = require("path");

async function main() {
  const fetch = (await import("node-fetch")).default;
  const blacklistedGauges = [
    "0x0000000000000000000000000000000000000000",
    "0x41d245492B3a9C5a5364e8F6Bb75035abfe4079e", //vAMM-MECH/WETH
    "0xC8E3E29e006Cd48a4f0AD0A06558E41853a1bAbD", // EURO3/USD+ (Stable)
  ];
  const res = await fetch("https://api.lynex.fi/api/v1/fusions");
  const json = await res.json();
  let result = json.data
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

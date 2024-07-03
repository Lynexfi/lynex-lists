const fs = require('fs');
const path = require('path');

async function main() {
  const fetch = (await import('node-fetch')).default;

  const res = await fetch('https://api.lynex.fi/api/v1/fusions');
  const json = await res.json();
  let result = json.data.map((item) => {
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
  const destination = path.resolve('./config', 'gauges.json');
  fs.writeFileSync(destination, JSON.stringify(result, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

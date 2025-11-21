import fs from "fs";
import path from "path";
import { createPublicClient, http } from "viem";
import { PairApiABI } from "./constants/abis/pairApi.abi";
import { gaugeConfigs } from "./constants/gauges";
import { strategies } from "./constants/strategies";

type PairInfo = {
  pair_address: string;
  symbol: string;
  gauge: string;
  token0: string;
  token1: string;
  bribe: string;
};

async function gaugeGod(chainId: 48900 | 59144 | 130 | 9745 | 1776 | 1439) {
  const config = gaugeConfigs[chainId];
  const client = createPublicClient({
    chain: config.viemChain,
    transport: http(),
  });

  // Convert blacklist to lowercase for case-insensitive comparison
  const blacklist = config.blacklist.map((item) => item.toLowerCase());

  let batchSize = chainId === 1776 ? 50 : 1000;
  const fetchedPairs: PairInfo[] = [];
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    try {
      const batch = (await client.readContract({
        address: config.pairAPIAddress as `0x${string}`,
        abi: PairApiABI,
        functionName: "getAllPair",
        args: [config.pairAPIAddress as `0x${string}`, batchSize, offset],
      })) as PairInfo[];

      if (batch.length === 0) {
        hasMore = false;
      } else {
        fetchedPairs.push(...batch);
        offset += batch.length;
        if (batch.length < batchSize) {
          hasMore = false;
        }
      }
    } catch (e: any) {
      const isRevertError =
        e?.details === "Execution reverted" ||
        e?.shortMessage?.includes("reverted") ||
        e?.message?.includes("Execution reverted") ||
        e?.reason === "execution reverted" ||
        e?.reason?.includes("reverted") ||
        e?.cause?.reason === "execution reverted" ||
        e?.cause?.shortMessage?.includes("reverted");

      if (isRevertError) {
        if (fetchedPairs.length > 0) {
          hasMore = false;
          break;
        }
        throw e;
      }

      const isSizeLimitError =
        e?.details?.includes("exceeding limit") ||
        e?.message?.includes("exceeding limit") ||
        e?.shortMessage?.includes("exceeding limit");

      if (isSizeLimitError && batchSize > 25) {
        batchSize = Math.floor(batchSize / 2);
        continue;
      }

      throw e;
    }
  }

  const pairs = fetchedPairs;

  const filteredPairs = pairs.filter(
    (item) =>
      !blacklist.includes(item.gauge.toLowerCase()) &&
      !blacklist.includes(item.pair_address.toLowerCase())
  );

  const strategyPairs = await Promise.all(
    (strategies[chainId] || []).map(async (strategy) => {
      if (blacklist.includes(strategy.address.toLowerCase())) {
        console.log(`Skipping blacklisted strategy: ${strategy.address}`);
        return null;
      }

      console.log(
        `Fetching strategy: ${strategy.symbol} (${strategy.address})`
      );
      try {
        const pair = (await client.readContract({
          address: config.pairAPIAddress as `0x${string}`,
          abi: PairApiABI,
          functionName: "getPair",
          args: [
            strategy.address as `0x${string}`,
            "0x0000000000000000000000000000000000000000" as `0x${string}`,
          ],
        })) as PairInfo;
        return pair;
      } catch (e) {
        console.error(
          `Failed to get pair for strategy ${strategy.symbol} (${strategy.address}): ${e}`
        );
        try {
          const pairs = (await client.readContract({
            address: config.pairAPIAddress as `0x${string}`,
            abi: PairApiABI,
            functionName: "getAllPair",
            args: [strategy.address as `0x${string}`, 1, 0],
          })) as PairInfo[];
          console.log(`Strategy ${strategy.symbol} found in getAllPair`);
          return pairs[0];
        } catch (e2) {
          console.error(`Also failed to get strategy from getAllPair: ${e2}`);
          return null;
        }
      }
    })
  );

  const allPairs = [
    ...filteredPairs.map((item) => ({
      address: item.pair_address.toLowerCase(),
      symbol: item.symbol,
      gauge: item.gauge.toLowerCase(),
      token0: item.token0.toLowerCase(),
      token1: item.token1.toLowerCase(),
      isStrategy: false,
      bribe: item.bribe.toLowerCase(),
    })),
    ...strategyPairs
      .filter(
        (item): item is PairInfo =>
          item !== null && !blacklist.includes(item.gauge.toLowerCase())
      )
      .map((item) => {
        const strategy = (strategies[chainId] || []).find(
          (s) => s.address.toLowerCase() === item.pair_address.toLowerCase()
        );
        return {
          address: item.pair_address.toLowerCase(),
          symbol: strategy
            ? `${(strategy.symbol || "").split(" ")[0]} (${
                strategy.type || "Unknown"
              })`
            : item.symbol,
          gauge: item.gauge.toLowerCase(),
          token0: item.token0.toLowerCase(),
          token1: item.token1.toLowerCase(),
          isStrategy: true,
          bribe: item.bribe.toLowerCase(),
        };
      }),
  ].sort((a, b) =>
    a.address < b.address ? -1 : a.address > b.address ? 1 : 0
  );

  return allPairs;
}

async function main() {
  const lineaGauges = await gaugeGod(59144);
  const zircuitGauges = await gaugeGod(48900);
  const unichainGauges = await gaugeGod(130);
  const plasmaGauges = await gaugeGod(9745);
  const injectiveGauges = await gaugeGod(1776);
  //const injectiveGauges = await gaugeGod(1439);

  const result = {
    59144: lineaGauges,
    48900: zircuitGauges,
    130: unichainGauges,
    9745: plasmaGauges,
    1776: injectiveGauges,
    1439: injectiveGauges,
  };

  const gaugesDir = path.resolve("gauges");
  if (!fs.existsSync(gaugesDir)) {
    fs.mkdirSync(gaugesDir, { recursive: true });
  }

  Object.entries(result).forEach(([chainId, gauges]) => {
    const destination = path.resolve(gaugesDir, `${chainId}.json`);
    fs.writeFileSync(destination, JSON.stringify(gauges, null, 2));
  });

  const allDestination = path.resolve(gaugesDir, "main.json");
  fs.writeFileSync(allDestination, JSON.stringify(result, null, 2));

  console.log(
    "🍑🍑Gauge JSON files have been generated in the gauges directory!🍑🍑"
  );
}

main()
  .then(() => {
    console.log(
      "🍆🍆All JSON files for gauges have been generated successfully🍆🍆"
    );
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

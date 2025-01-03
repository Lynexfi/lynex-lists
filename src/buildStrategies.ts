import fs from "fs";
import path from "path";
import { strategies } from "./constants/strategies";

// Function to write JSON files
function writeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

// converting ts file to json files for strategies here:
function generateStrategyFiles() {
  const dirPath = path.resolve(__dirname, "../strategies");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  Object.entries(strategies).forEach(([chainId, value]) => {
    writeJSON(path.join("strategies", chainId), value);
  });

  // Generate all.json for strategies
  writeJSON(path.join("strategies", "main"), strategies);

  console.log(
    "🍑🍑Strategy JSON files have been generated in the config/strategies directory!🍑🍑"
  );
}

generateStrategyFiles();

console.log(
  "🍆🍆All JSON files for strategies have been generated successfully🍆🍆"
);

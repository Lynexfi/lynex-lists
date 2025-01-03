import fs from "fs";
import path from "path";
import { tokens } from "./constants/tokens";
import { strategies } from "./constants/strategies";

// Function to write JSON files
function writeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../config");
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
  const dirPath = path.resolve(__dirname, "../config/strategies");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  Object.entries(strategies).forEach(([chainId, value]) => {
    writeJSON(path.join("strategies", chainId), value);
  });

  // Generate all.json for strategies
  writeJSON(path.join("strategies", "all"), strategies);

  console.log(
    "🍑🍑Strategy JSON files have been generated in the config/strategies directory!🍑🍑"
  );
}

// converting ts file to json files for tokens here:
function generateTokenFiles() {
  const dirPath = path.resolve(__dirname, "../config/tokens");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  Object.entries(tokens).forEach(([chainId, value]) => {
    writeJSON(path.join("tokens", chainId), value);
  });

  // Generate all.json for tokens
  writeJSON(path.join("tokens", "all"), tokens);

  console.log(
    "🍌🍌Token JSON files have been generated in the config/tokens directory!🍌🍌"
  );
}

generateStrategyFiles();
generateTokenFiles();

console.log(
  "🍆🍆All JSON files for strategies and tokens have been generated successfully🍆🍆"
);

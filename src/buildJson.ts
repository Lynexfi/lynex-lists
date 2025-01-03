import fs from "fs";
import path from "path";
import { tokens } from "./constants/tokens";
import { strategies } from "./constants/strategies";

const strategyJsonFileNames: Record<string, string> = {
  "48900": "zircuitStrategies",
  "59144": "lineaStrategies",
  "59140": "lineaTestnetStrategies",
};

const tokenJsonFileNames: Record<string, string> = {
  "48900": "zircuitTokens",
  "59144": "lineaTokens",
};

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

  Object.entries(strategies).forEach(([key, value]) => {
    const fileName = strategyJsonFileNames[key] || `strategies_${key}`;
    writeJSON(path.join("strategies", fileName), value);
  });

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

  Object.entries(tokens).forEach(([key, value]) => {
    const fileName = tokenJsonFileNames[key] || `tokens_${key}`;
    writeJSON(path.join("tokens", fileName), value);
  });

  console.log(
    "🍌🍌Token JSON files have been generated in the config/tokens directory!🍌🍌"
  );
}

generateStrategyFiles();
generateTokenFiles();

console.log(
  "🍆🍆All JSON files for strategies and tokens have been generated successfully🍆🍆"
);

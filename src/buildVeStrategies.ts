import fs from "fs";
import path from "path";
import { veStrategies } from "./constants/veStrategies";

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

// Generate the veStrategies list files
function generateVeStrategiesFiles() {
  const dirPath = path.resolve(__dirname, "../veStrategies");
  const configDirPath = path.resolve(__dirname, "../config");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs.existsSync(configDirPath)) {
    fs.mkdirSync(configDirPath, { recursive: true });
  }

  // Generate chain-specific files
  Object.entries(veStrategies).forEach(([chainId, chainVeStrategies]) => {
    writeJSON(path.join("veStrategies", chainId), chainVeStrategies);
  });

  // Generate main.json and config mirror
  writeJSON(path.join("veStrategies", "main"), veStrategies);
  writeJSON(path.join("config", "veStrategies"), veStrategies);

  console.log(
    "🍑🍑veStrategies JSON files have been generated in the veStrategies directory!🍑🍑"
  );
}

generateVeStrategiesFiles();

console.log(
  "🍆🍆All JSON files for veStrategies have been generated successfully🍆🍆"
);



import fs from "fs";
import path from "path";
import { badges } from "./constants/badges";

// Function to write JSON files to badges folder
function writeBadgeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../badges");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

// Function to write JSON files to config folder
function writeConfigJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../config");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

// Generate the badges list files
function generateBadgeFiles() {
  // Generate chain-specific files in badges folder
  Object.entries(badges).forEach(([chainId, chainBadges]) => {
    writeBadgeJSON(chainId, chainBadges);
  });

  // Generate badges.json in config folder
  writeConfigJSON("badges", badges);

  console.log(
    "🍑🍑Badges JSON files have been generated!🍑🍑"
  );
}

generateBadgeFiles();

console.log(
  "🍆🍆All JSON files for badges have been generated successfully🍆🍆"
);


import fs from "fs";
import path from "path";
import { points } from "./constants/points";

// Function to write JSON files
function writeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../points");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

// Generate the points list files
function generatePointsFiles() {
  // Generate chain-specific files
  Object.entries(points).forEach(([chainId, chainPoints]) => {
    writeJSON(chainId, chainPoints);
  });

  // Generate main.json
  writeJSON("main", points);

  console.log(
    "🍑🍑Points JSON files have been generated in the points directory!🍑🍑"
  );
}

generatePointsFiles();

console.log(
  "🍆🍆All JSON files for points have been generated successfully🍆🍆"
);

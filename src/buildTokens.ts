import fs from "fs";
import path from "path";
import { tokens } from "./constants/tokens";

// Function to write JSON files
function writeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, "../tokens");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

// Get current version from main.json and increment it
function getIncrementedVersion(): {
  major: number;
  minor: number;
  patch: number;
} {
  try {
    const currentFile = fs.readFileSync(
      path.resolve(__dirname, "../tokens/main.json"),
      "utf8"
    );
    const currentData = JSON.parse(currentFile);
    const currentVersion = currentData.version;
    return {
      major: currentVersion.major,
      minor: currentVersion.minor,
      patch: currentVersion.patch + 1,
    };
  } catch (e) {
    // If file doesn't exist or is invalid, start at 1.0.0
    return { major: 1, minor: 0, patch: 0 };
  }
}

// Generate the token list files
function generateTokenFiles() {
  // Generate chain-specific files with raw token data
  Object.entries(tokens).forEach(([chainId, chainTokens]) => {
    writeJSON(chainId, chainTokens);
  });

  // Generate main.json with metadata wrapper
  const version = getIncrementedVersion();
  const allTokens = Object.entries(tokens).flatMap(([chainId, chainTokens]) =>
    chainTokens.map((token) => ({
      chainId: parseInt(chainId),
      ...token,
    }))
  );

  const mainTokenList = {
    name: "Lynex Token List",
    version,
    logoURI: "https://uploads-ssl.webflow.com/645d0baba624e61983ac17f8/64b2ef2100ba11f2a0899f91_logow.svg",
    keywords: ["lynex", "default"],
    tokens: allTokens
  };
  writeJSON("main", mainTokenList);

  console.log("🍑🍑Token JSON files have been generated in the tokens directory!🍑🍑");
}

generateTokenFiles();

console.log("🍆🍆All JSON files for tokens have been generated successfully🍆🍆");

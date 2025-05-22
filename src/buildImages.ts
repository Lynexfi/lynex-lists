import fs from "fs";
import path from "path";

const tokensFile = path.resolve(__dirname, "../src/constants/tokens.ts");

function convertRawGitHubToJsDelivr(rawUrl: string): string {
  if (!rawUrl.includes("raw.githubusercontent.com")) return rawUrl;
  return rawUrl
    .replace(
      "https://raw.githubusercontent.com/",
      "https://cdn.jsdelivr.net/gh/"
    )
    .replace("/main/", "@main/");
}

const fileContent = fs.readFileSync(tokensFile, "utf-8");

const updatedContent = fileContent.replace(
  /logoURI\s*:\s*["']([^"']+)["']/g,
  (_, url) => {
    const newUrl = convertRawGitHubToJsDelivr(url);
    return `logoURI: "${newUrl}"`;
  }
);

fs.writeFileSync(tokensFile, updatedContent);

console.log(`✅ Updated logoURI URLs in-place in ${tokensFile}`);

import fs from 'fs';
import path from 'path';
import { tokens } from './constants/tokens';
import { strategies } from './constants/strategies';
import { gauges } from './constants/gauges';

// Function to write JSON files
function writeJSON(fileName: string, data: any): void {
  const dirPath = path.resolve(__dirname, '../config');  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(path.join(dirPath, `${fileName}.json`), JSON.stringify(data, null, 2));
}

// Generate JSON files
writeJSON('tokens', tokens);
writeJSON('strategies', strategies);
writeJSON('gauges', gauges);

console.log('JSON files have been generated in the config directory.');

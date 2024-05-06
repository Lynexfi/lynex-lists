import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { tokens } from '../src/constants/tokens';
import { farms } from '../src/constants/farms';
import { strategies } from '../src/constants/strategies';
import { gauges } from '../src/constants/gauges';



const outputDir = join(__dirname, '..', 'config');
console.log(`Writing JSON files to: ${outputDir}`);

mkdirSync(outputDir, { recursive: true });

const tokensJson = JSON.stringify(tokens, null, 2);
writeFileSync(join(outputDir, 'tokens.json'), tokensJson);

const farmsJson = JSON.stringify(farms, null, 2);
writeFileSync(join(outputDir, 'farms.json'), farmsJson);

const strategiesJson = JSON.stringify(strategies, null, 2);
writeFileSync(join(outputDir, 'strategies.json'), strategiesJson);

const gaugessJson = JSON.stringify(gauges, null, 2);
writeFileSync(join(outputDir, 'gauges.json'), gaugessJson);


console.log('JSON files have been generated in the config directory.');

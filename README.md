# lynex-lists

## How to Manage This Repo ?

When you would like to make an edit to one of the lists in this repo, please only edit the `.ts` files. This is for better type control and to reduce the chance of errors. To apply the changes run `yarn build`.

For example, to edit a gauge:

1. Open the `constants/gauges.ts` file
2. Make the edits & save
3. Run `yarn build` to apply these changes to the corresponding JSON files
4. Publish a new npm package from `package.json` file.
5. Commit to the Github repo

Developers should interact with the TypeScript files & Lynex services pull in the JSON files!

## How To WL a Token ?

Developers should interact with `tokens/main.json` file to WL a token on frontend. Here's steps to add a token:

1. Upload a logo to `tokens/assets` folder. Name the logo as listed token's ticker with all uppercase letters.
2. Ideally the logo should be 200x200, circular and less than 50 KBs.
3. Update `tokens/main.json` file. Here's an example config:

```ts
    {
      "name": "CROAK",
      "symbol": "CROAK",
      "tokenId": "https://lineascan.build/token/0xacb54d07ca167934f57f829bee2cc665e1a5ebef",
      "address": "0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF",
      "chainId": 59144,
      "decimals": 18,
      "logoURI": "https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/CROAK.png"
    },
```
4. Make sure add the uploaded logo's name at the end of the `logoURI` flag before you commit.
5. There's an exception for token listings ,since we are editing a `JSON` file, we don't need to run `yarn build` as it won't create any `JSON` files.

## How To Add a Gauge ?

To add a new gauge, append a new object to the array in the `gauges.ts` file with the following structure:

```typescript
{
    address: "0x00b34e51ac2a78761982485a618b235a211f5d86",
    symbol: "USDC/WETH (YieldIQ)",
    gauge: "0x0000000000000000000000000000000000000000",
    token0: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f", 
    isStrategy: true,
    bribe: "0x0000000000000000000000000000000000000000",
}
```

- `address`: The smart contract address of the gauge.
- `symbol`: A descriptive symbol for the gauge, typically representing the pair involved.
- `gauge`: Address of the gauge contract, if applicable.
- `token0` and `token1` : References to the tokens involved.
- `isStrategy` : Boolean indicating whether this gauge is part of a strategic implementation.
- `bribe` : Address used for bribe mechanisms, if applicable.

After updating gauges.ts, you must rebuild the project to reflect these changes in the output JSON file. Execute the following command in your terminal within the project directory:

```ts
yarn build
```

This command compiles the TypeScript files and generates the updated JSON files necessary for the project deployment.

## How To Add a Strategy ?

To add a new strategy, append a new object to the array in the `strategies.ts` file with the following structure:

```typescript
{
    chainId: ChainId.LINEA_MAINNET,
    symbol: "WBTC/WETH Narrow",
    title: "GAMMA_NARROW",
    type: StrategyType.Narrow,
    strategist: Strategist.Gamma,
    allowed0: true,
    allowed1: true,
    address: "0x8a9570ec97534277ade6e46d100939fbce4968f0",
    token0: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    token1: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
}
```

- `chainId`: Specifies the blockchain network (e.g., ChainId.LINEA_MAINNET).
- `symbol`: A descriptive symbol for the strategy, typically representing the token pair involved.
- `title`: A unique identifier for the strategy setup.
- `type`: The strategy type, e.g., Narrow, Stable, Wide, etc.
- `strategist`: Specifies the strategist's role (e.g., Gamma, Ichi, Steer etc.).
- `allowed0 and allowed1`: Boolean flags that indicate whether the tokens are permitted in the strategy.
- `address`: The smart contract address of the strategy.
- `token0 and token1`: References to the tokens involved.

Once you've updated the strategies.ts file, it's crucial to rebuild the project to incorporate these changes in the deployment. Run the following command in your terminal within the project directory:

```ts
yarn build
```

This command compiles the TypeScript files and updates the JSON files necessary for deployment, ensuring that the new strategies are correctly integrated into the project.


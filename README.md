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

To add a new gauge, you'll need to run `yarn update-gauges` command and it'll create a file at `gauges.json` with the following structure automatically:

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

Make sure to double check if your gauge has been generated at `gauges.json` file.

## How To Add a Strategy ?

To add a new strategy, append a new object to the array in the `strategies.ts` file with the following structure:

```typescript
{
      symbol: "USDC/LYNX Wide",
      title: "Gamma Wide",
      type: "Wide",
      address: "0xcC86572Ce5a6EEe74c76c57E9ea7b08221F06bb9",
      token0: {
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
      },
      token1: {
        address: "0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af ",
      },
    },
```

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

## Publishing a New Package

Once you have made the necessary changes and are ready to release a new version of the package, follow these steps:

1. **Increment the Version:**
   - Open the `package.json` file.
   - Increment the version number in a way that follows semantic versioning (MAJOR.MINOR.PATCH).
   - For example, if the current version is `1.0.0` and you've added functionality in a backwards-compatible manner, you would update it to `1.0.1`.

2. **Publish the Package:**
   - Run the following command to publish the updated package to npm:
     ```bash
     npm publish
     ```
   - This command sends the updated package to npm with the new version, making it available for installation.

3. **Commit and Push Changes:**
   - After publishing, make sure to commit the changes made to the `package.json` and any other modified files to your Git repository.
   - Push the changes to GitHub or your preferred source control host:
     ```bash
     git add .
     git commit -m "Updated package version to 1.0.1 and built new changes."
     git push origin <branch>
     ```

These steps ensure that your changes are not only saved and tracked but also available for using at other repos through npm as an updated package. Always verify the new package works as expected after publishing.

## Code Formatting with Prettier

This repository uses Prettier for consistent code formatting. To set up formatting in your development environment:

1. Install dependencies:
```bash
yarn install
```
2. Install the "Prettier - Code formatter" extension in VS Code
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Prettier - Code formatter"
   - Click Install

3. Configure VS Code settings:
   - Open Settings (Ctrl+, / Cmd+,)
   - Add these settings to your workspace or user settings:
   ```json
   {
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.formatOnSave": true
   }
   ```

After completing these steps, your code will automatically format on save according to the project's Prettier configuration.


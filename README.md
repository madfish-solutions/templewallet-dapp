# ThanosWallet DApp Module

This module is required to provide communication between DApps and Thanos Wallet, it exposes unified interface for this interaction.

## 🚀 Quick Start

### 1) Install

```bash
yarn add @taquito/taquito@^6.3.0-wallet.3 @thanos-wallet/dapp
```

### 1) Usage

```typescript
import { ThanosWallet } from "@thanos-wallet/dapp";

(async () => {
  try {
    const available = await ThanosWallet.isAvailable();
    if (!available) {
      throw new Error("Thanos Wallet not installed");
    }

    const wallet = new ThanosWallet("My Super DApp");
    await wallet.connect("carthagenet");
    const tezos = wallet.toTezos();

    const accountPkh = await tezos.wallet.pkh();
    const accountBalance = await tezos.tz.getBalance(accountPkh);
    console.info(`address: ${accountPkh}, balance: ${accountBalance}`);

    const counter = await tezos.wallet.at(
      "KT1DjYkruvfujfKw6nLYafArqKufcwHuKXvT"
    );

    const operation = await counter.methods.increment(1).send();
    await operation.confirmation();

    const counterValue = await counter.storage();
    console.info(`count: ${counterValue}`);
  } catch (err) {
    console.error(err);
  }
})();
```

## API

You can explore auto generated [full API Docs here](docs/README.md).

Probably you would be most interested in the [ThanosWallet class](docs/classes/thanoswallet.md) methods.

## Local Development

Below is a list of commands you will probably find useful.

### npm run dev or yarn dev

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

Your library will be rebuilt if you make edits.

### npm run build or yarn build

Bundles the package to the dist folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

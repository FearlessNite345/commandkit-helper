<div align="center">
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/npm/v/commandkit-helper?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/npm/dt/commandkit-helper?style=for-the-badge" alt="npm downloads" />
  </a>
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/npm/l/commandkit-helper?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/github/issues/FearlessNite345/commandkit-helper?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/github/stars/FearlessNite345/commandkit-helper?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://www.npmjs.com/package/commandkit-helper">
    <img src="https://img.shields.io/github/forks/FearlessNite345/commandkit-helper?style=for-the-badge" alt="npm license" />
  </a>
</div>

# commandkit-helper

CommandKit-Helper is a simple library that will help with building comamnds to work with [CommandKit](https://www.npmjs.com/package/commandkit)

> **Works with Discord.JS V14**

## Features

-   Extreamly Beginner friendly
-   Allows you to have proper types when using [CommandKit](https://www.npmjs.com/package/commandkit)
-   Custom extended discord client so you can have custom options inside the client itself

## Installation

```bash
npm install commandkit-helper
```

## Usage

This is a small usage example of how you can use this package

### CJS

#### CustomDiscordClient

```js
const { ExtendedClient } = require('commandkit-helper');

const client = new ExtendedClient(
    {
        intents: [],
    },
    {
        // Here would go any custom options you want to always
        // be avaiable from the client provided inside the commandbuilders
        testNumber: 21,
    }
);

console.log(client.customOptions.testNumber); // -> 21 //Note: this will not give you intellisence
```

#### CommandBuilder

```js
const { BasicSlashCommand } = require('commandkit-helper')

module.exports = new BasicSlashCommand({
    run: async ({ interaction, client, handler }) => {

    },

    data: new SlashCommandBuilder()...

    // The options do have types so you can
    // add only the ones you want or custom ones
    options: {

    }
})
```

### ESM

#### CustomDiscordClient

```js
import { ExtendedClient } from 'commandkit-helper';

const client = new ExtendedClient(
    {
        intents: [],
    },
    {
        // Here would go any custom options you want to always
        // be avaiable from the client provided inside the commandbuilders
        testNumber: 21,
    }
);

console.log(client.customOptions.testNumber); // -> 21 //Note: this will not give you intellisence
```

#### CommandBuilder

```ts
import { BasicSlashCommand } from 'commandkit-helper'

export = new BasicSlashCommand({
    run: async ({ interaction, client,handler }) => {

    },

    data: new SlashCommandBuilder()...

    // The options do have types so you can
    // add only the ones you want or custom ones
    options: {

    }
})
```

# Changelog

### v1.2.0

-   Improved README
-   UserPermissions && BotPermissions are now of type PermissionResolvable
-   Added custom discord client

#### V1.1.0

-   Added support for custom options
-   Changed to using SlashCommandProps from CommandKit

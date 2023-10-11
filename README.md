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

-   Extremely Beginner friendly
-   Allows you to have command builders for [CommandKit](https://www.npmjs.com/package/commandkit)

## Installation

```bash
npm install commandkit-helper
```

## Usage

This is a small usage example of how you can use this package

### CJS

```js
const { SlashCommand, UserContextCommand, MessageContextCommand } = require('commandkit-helper')

module.exports = new SlashCommand()
  .setData({
    name: 'ping',
    description: 'Pong!'
  })
  .setRun(async ({ interaction, client, handler }) => {

  })
  // You can also set all the options if needed by default 
  // all the values are false so if you dont set them they wont matter
```

### ESM

```ts
import { SlashCommand, UserContextCommand, MessageContextCommand } from 'commandkit-helper'

export default new SlashCommand()
  .setData({
    name: 'ping',
    description: 'Pong!'
  })
  .setRun(async ({ interaction, client, handler }) => {

  })
  // You can also set all the options if needed by default 
  // all the values are false so if you dont set them they wont matter
  // same goes for the ones below

export default new UserContextCommand()
  .setData({
    name: 'user',
    type: CommandType.User
  })
  .setRun(async ({ interaction, client, handler }) => {

  })

export default new MessageContextCommand()
  .setData({
    name: 'content',
    type: CommandType.Message
  })
  .setRun(async ({ interaction, client, handler }) => {

  })
```

# Changelog

### v1.3.0

-   Added way better command builders that are alot easier to use look alot like the SlashCommandBuilder from D.JS
-   Removed custom discord client as it wont work with these new builders
-   Removed the old types so this update will cause some breaking changes but will be easy to fix

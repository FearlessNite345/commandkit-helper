# CommandKit-Helper

CommandKit-Helper is a simple library that will help with building comamnds to work with [CommandKit](https://www.npmjs.com/package/commandkit)

**Works with Discord.JS V14**

# Usage
### ES Modules
```ts
import { BasicSlashCommand } from 'commandkit-helper'

export = new BasicSlashCommand({
    run: async ({ interaction, client }) => {

    },

    data: new SlashCommandBuilder()...

    // The options do have types so you can add only the ones you want
    options: {

    }
})
```

### CJS
```js
const { BasicSlashCommand } = require('commandkit-helper')

module.exports = new BasicSlashCommand({
    run: async ({ interaction, client }) => {

    },

    data: new SlashCommandBuilder()...

    // The options do have types so you can add only the ones you want
    options: {

    }
})
```

CommandKit-Helper does support UserContextCommand and MessageContextCommand as well these are setup in basically the same way just with the proper types used
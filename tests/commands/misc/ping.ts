import { SlashCommand } from '../../../src/index';

export default new SlashCommand()
    .setRun(({ interaction, client }) => {
        interaction.reply(`:ping_pong: Pong! \`${client.ws.ping}ms\``);
    })
    .setData({
        name: 'ping2',
        description: 'Pong!',
    })
    .setDevOnly(true)
    .addCustomOption('testing', 28);

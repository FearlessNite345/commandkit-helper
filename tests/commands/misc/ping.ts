import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../../src/index';

export default new SlashCommand()
    .setRun(({ interaction, client }) => {
        interaction.reply(`:ping_pong: Pong! \`${client.ws.ping}ms\``);
    })
    .setData(
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Pong!')
            .addStringOption((option) =>
                option.setName('test').setDescription('test')
            )
    )
    .setDevOnly(true)
    .addCustomOption('testing', 28);

import { SlashCommandProps } from 'commandkit';
import { SlashCommand } from '../../../src';
import { SlashCommandBuilder } from 'discord.js';

export default new SlashCommand()
    .setData(
        new SlashCommandBuilder()
            .setName('reload')
            .setDescription('Reload commands, events, and validations')
    )
    .setRun(async ({ interaction, handler }: SlashCommandProps) => {
        interaction.deferReply({ ephemeral: true });

        await handler.reloadCommands();
        console.log('Reloaded commands');

        await handler.reloadValidations();
        console.log('Reloaded validations');

        await handler.reloadEvents();
        console.log('Reloaded events');

        interaction.followUp('Done!');
    })
    .setDevOnly(true);

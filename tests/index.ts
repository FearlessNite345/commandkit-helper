import { CommandKit } from 'commandkit';
import { Client } from 'discord.js';
import { config } from 'dotenv';
import { ExtendedClient } from '../src/index';

config({ path: `${__dirname}/.env` });

const client = new ExtendedClient({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
});

client.test = 21

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
    validationsPath: `${__dirname}/validations`,
    devGuildIds: ['1004792054783688775'], //'1049345075366334617'
    devUserIds: ['1002401206750150836'], //'1049343381903515778'
    bulkRegister: true,
});

client.login(process.env.TOKEN);

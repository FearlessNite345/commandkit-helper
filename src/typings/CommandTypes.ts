import {
    Client,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    RESTPostAPIApplicationCommandsJSONBody,
    SlashCommandBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { CommandData, CommandKit, SlashCommandProps } from 'commandkit';

export type AnySlashCommandData =
    | CommandData
    | SlashCommandBuilder
    | RESTPostAPIApplicationCommandsJSONBody;

export type SlashCommandRunFunction = (
    options: SlashCommandProps
) => Promise<void> | void;

export type AnyContextCommandData =
    | CommandData
    | RESTPostAPIApplicationCommandsJSONBody
    | ContextMenuCommandBuilder;

export type UserContextCommandRunFunction = (
    options: UserContextCommandProps
) => Promise<void> | void;

export type MessageContextCommandRunFunction = (
    options: MessageContextCommandProps
) => Promise<void> | void;

interface UserContextCommandProps {
    client: Client;
    interaction: UserContextMenuCommandInteraction;
    handler: CommandKit;
}

interface MessageContextCommandProps {
    client: Client;
    interaction: MessageContextMenuCommandInteraction;
    handler: CommandKit;
}


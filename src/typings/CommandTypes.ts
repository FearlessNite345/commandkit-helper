import {
    ContextMenuCommandBuilder,
    RESTPostAPIApplicationCommandsJSONBody,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js';
import { CommandData, SlashCommandProps } from 'commandkit';
import { UserContextCommandProps, MessageContextCommandProps } from '../interfaces/CommandInterfaces';

export type AnySlashCommandData =
    | CommandData
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | RESTPostAPIApplicationCommandsJSONBody
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">

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


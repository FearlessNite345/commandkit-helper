import {
    ChatInputCommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { OptionTypes } from './Options';
import { CommandKit } from 'commandkit';
import { ExtendedClient } from '../structures/Client';

interface BasicSlashCommandRunOptions {
    interaction: ChatInputCommandInteraction;
    client: ExtendedClient;
    handler: CommandKit;
}

type BasicSlashCommandRunFunction = (
    options: BasicSlashCommandRunOptions
) => Promise<void> | void;

export interface BasicCommandType {
    run: BasicSlashCommandRunFunction;
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
    options?: OptionTypes;
}

interface UserContextCommandRunOptions {
    client: ExtendedClient;
    interaction: UserContextMenuCommandInteraction;
}

type UserContextCommandRunFunction = (
    options: UserContextCommandRunOptions
) => Promise<void>;

export interface UserContextCommandType {
    run: UserContextCommandRunFunction;
    data: ContextMenuCommandBuilder;
    options?: OptionTypes;
}

interface MessageContextCommandRunOptions {
    client: ExtendedClient;
    interaction: MessageContextMenuCommandInteraction;
}

type MessageContextCommandRunFunction = (
    options: MessageContextCommandRunOptions
) => Promise<void>;

export interface MessageContextCommandType {
    run: MessageContextCommandRunFunction;
    data: ContextMenuCommandBuilder;
    options?: OptionTypes;
}

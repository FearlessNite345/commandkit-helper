import {
    Client,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { OptionTypes } from './Options';
import { SlashCommandProps } from 'commandkit';

type BasicSlashCommandRunFunction = (
    options: SlashCommandProps
) => Promise<void> | void;

export interface BasicCommandType {
    run: BasicSlashCommandRunFunction;
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
    options?: OptionTypes;
}

interface UserContextCommandRunOptions {
    client: Client;
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
    client: Client;
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

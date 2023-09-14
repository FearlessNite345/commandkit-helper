import {
    ChatInputCommandInteraction,
    Client,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';

interface BasicSlashCommandRunOptions {
    client: Client;
    interaction: ChatInputCommandInteraction;
}

type BasicSlashCommandRunFunction = (
    options: BasicSlashCommandRunOptions
) => Promise<void>;

export interface BasicCommandType {
    run: BasicSlashCommandRunFunction;
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
    options?: {
        devOnly?: boolean;
        guildOnly?: boolean;
        userPermissions?: string[] | bigint[];
        botPermissions?: string[] | bigint[];
        deleted?: boolean;
    };
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
    options?: {
        devOnly?: boolean;
        guildOnly?: boolean;
        userPermissions?: string[] | bigint[];
        botPermissions?: string[] | bigint[];
        deleted?: boolean;
    };
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
    options?: {
        devOnly?: boolean;
        guildOnly?: boolean;
        userPermissions?: string[] | bigint[];
        botPermissions?: string[] | bigint[];
        deleted?: boolean;
    };
}

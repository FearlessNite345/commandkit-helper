import { CommandKit } from "commandkit";
import { ChatInputCommandInteraction, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";
import { ExtendedClient } from "../classes/ExtendedClient";

export interface UserContextCommandProps {
    client: ExtendedClient;
    interaction: UserContextMenuCommandInteraction;
    handler: CommandKit;
}

export interface MessageContextCommandProps {
    client: ExtendedClient;
    interaction: MessageContextMenuCommandInteraction;
    handler: CommandKit;
}

export interface SlashCommandProps {
    client: ExtendedClient;
    interaction: ChatInputCommandInteraction;
    handler: CommandKit;
}
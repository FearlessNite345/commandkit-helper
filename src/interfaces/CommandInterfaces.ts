import { CommandKit } from "commandkit";
import { Client, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";

export interface UserContextCommandProps {
    client: Client;
    interaction: UserContextMenuCommandInteraction;
    handler: CommandKit;
}

export interface MessageContextCommandProps {
    client: Client;
    interaction: MessageContextMenuCommandInteraction;
    handler: CommandKit;
}
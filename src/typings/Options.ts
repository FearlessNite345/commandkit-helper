import { PermissionResolvable } from "discord.js";

export interface OptionTypes {
    devOnly?: boolean;
    guildOnly?: boolean;
    userPermissions?: PermissionResolvable[];
    botPermissions?: PermissionResolvable[];
    deleted?: boolean;
    [key: string]: any
}

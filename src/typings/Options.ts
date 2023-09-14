export interface OptionTypes {
    devOnly?: boolean;
    guildOnly?: boolean;
    userPermissions?: string[] | bigint[];
    botPermissions?: string[] | bigint[];
    deleted?: boolean;
    [key: string]: any
}

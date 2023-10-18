import { PermissionResolvable } from 'discord.js';
import {
    AnyContextCommandData,
    AnySlashCommandData,
    MessageContextCommandRunFunction,
    SlashCommandRunFunction,
    UserContextCommandRunFunction,
} from '../typings/CommandTypes';
import { CommandOptions } from 'commandkit';

export class SlashCommand {
    public data!: AnySlashCommandData;
    public options: CommandOptions = {
        deleted: false,
        devOnly: false,
        guildOnly: false,
        userPermissions: [],
        botPermissions: [],
    };
    public run!: SlashCommandRunFunction;

    setData(data: AnySlashCommandData) {
        this.data = data;
        return this;
    }

    setDevOnly(devOnly: boolean) {
        this.options.devOnly = devOnly;
        return this;
    }

    /**
     * @deprecated Since version 1.5.0. Use `dm_permission` in your command `setData` instead.
     */
    setGuildOnly(guildOnly: boolean) {
        this.options.guildOnly = guildOnly;
        return this;
    }

    setUserPermissions(userPermissions: PermissionResolvable) {
        this.options.userPermissions = userPermissions;
        return this;
    }

    setBotPermissions(botPermissions: PermissionResolvable) {
        this.options.botPermissions = botPermissions;
        return this;
    }

    setDeleted(deleted: boolean) {
        this.options.deleted = deleted;
        return this;
    }

    addCustomOption(optionName: string, optionValue: any) {
        this.options[optionName] = optionValue
        return this
    }

    setRun(run: SlashCommandRunFunction) {
        this.run = run;
        return this;
    }
}

export class UserContextCommand {
    public data!: AnyContextCommandData;
    public options: CommandOptions = {
        deleted: false,
        devOnly: false,
        guildOnly: false,
        userPermissions: [],
        botPermissions: [],
    };
    public run!: UserContextCommandRunFunction;

    setData(data: AnyContextCommandData) {
        this.data = data;
        return this;
    }

    setDevOnly(devOnly: boolean) {
        this.options.devOnly = devOnly;
        return this;
    }

    /**
     * @deprecated Since version 1.5.0. Use `dm_permission` in your command `setData` instead.
     */
    setGuildOnly(guildOnly: boolean) {
        this.options.guildOnly = guildOnly;
        return this;
    }

    setUserPermissions(userPermissions: PermissionResolvable) {
        this.options.userPermissions = userPermissions;
        return this;
    }

    setBotPermissions(botPermissions: PermissionResolvable) {
        this.options.botPermissions = botPermissions;
        return this;
    }

    setDeleted(deleted: boolean) {
        this.options.deleted = deleted;
        return this;
    }

    setRun(run: UserContextCommandRunFunction) {
        this.run = run;
        return this;
    }

    addCustomOption(optionName: string, optionValue: any) {
        this.options[optionName] = optionValue
        return this
    }
}

export class MessageContextCommand {
    public data!: AnyContextCommandData;
    public options: CommandOptions = {
        deleted: false,
        devOnly: false,
        guildOnly: false,
        userPermissions: [],
        botPermissions: [],
    };
    public run!: MessageContextCommandRunFunction;

    setData(data: AnyContextCommandData) {
        this.data = data;
        return this;
    }

    setDevOnly(devOnly: boolean) {
        this.options.devOnly = devOnly;
        return this;
    }

    /**
     * @deprecated Since version 1.5.0. Use `dm_permission` in your command `setData` instead. 
     */
    setGuildOnly(guildOnly: boolean) {
        this.options.guildOnly = guildOnly;
        return this;
    }

    setUserPermissions(userPermissions: PermissionResolvable) {
        this.options.userPermissions = userPermissions;
        return this;
    }

    setBotPermissions(botPermissions: PermissionResolvable) {
        this.options.botPermissions = botPermissions;
        return this;
    }

    setDeleted(deleted: boolean) {
        this.options.deleted = deleted;
        return this;
    }

    setRun(run: MessageContextCommandRunFunction) {
        this.run = run;
        return this;
    }

    addCustomOption(optionName: string, optionValue: any) {
        this.options[optionName] = optionValue
        return this
    }
}

import { Client, ClientOptions } from "discord.js";

export class ExtendedClient extends Client {
    customOptions: CustomClientOptions;

    constructor(options: ClientOptions, customOptions: CustomClientOptions) {
        super(options);
        this.customOptions = customOptions;
    }
}

export interface CustomClientOptions {
    [key: string]: any
}

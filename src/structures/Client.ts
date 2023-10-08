import { Client, ClientOptions } from 'discord.js';
import { CustomClientOptions } from '../typings/Client';

export class ExtendedClient extends Client {
    customOptions: CustomClientOptions;

    constructor(options: ClientOptions, customOptions: CustomClientOptions) {
        super(options);
        this.customOptions = customOptions;
    }
}
